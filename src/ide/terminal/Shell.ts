import { FileSystem, TreeNode } from '../fs/FileSystem';
import { PackageManager } from '../package-manager/packageManager';
import {
  joinPaths,
  normalizePath,
  getBasename,
  getDirname,
} from '../fs/pathUtils';

export interface ShellContext {
  vfs: FileSystem;
  onDevServerRestart?: () => void;
  onOpenFile?: (path: string) => void;
}

const COMMAND_LIST = [
  'cd',
  'npm',
  'pnpm',
  'yarn',
  'vite',
  'code',
  'open',
  'ls',
  'dir',
  'cat',
  'touch',
  'mkdir',
  'rm',
  'mv',
  'cp',
  'pwd',
  'clear',
  'tree',
  'node',
  'echo',
  'date',
  'whoami',
  'help',
];

/**
 * In-browser shell emulator for xterm.js.
 */
export class Shell {
  private vfs: FileSystem;
  private cwd = '/';
  private onDevServerRestart?: () => void;
  private onOpenFile?: (path: string) => void;

  constructor(context: ShellContext) {
    this.vfs = context.vfs;
    this.onDevServerRestart = context.onDevServerRestart;
    this.onOpenFile = context.onOpenFile;
  }

  public getPrompt(): string {
    const displayDir = this.cwd === '/' ? '~/project' : `~/project${this.cwd}`;
    return `\x1b[1;36mrunjs-ide\x1b[0m:\x1b[1;33m${displayDir}\x1b[0m$ `;
  }

  /**
   * Parses raw shell input string respecting quotes.
   */
  public parseArgs(input: string): string[] {
    const args: string[] = [];
    let current = '';
    let inQuote = false;
    let quoteChar = '';

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if ((char === '"' || char === "'") && !inQuote) {
        inQuote = true;
        quoteChar = char;
      } else if (char === quoteChar && inQuote) {
        inQuote = false;
        quoteChar = '';
      } else if (char === ' ' && !inQuote) {
        if (current.length > 0) {
          args.push(current);
          current = '';
        }
      } else {
        current += char;
      }
    }

    if (current.length > 0) {
      args.push(current);
    }

    return args;
  }

  /**
   * Executes a command string and returns output lines.
   */
  public async execute(rawInput: string): Promise<string> {
    const trimmed = rawInput.trim();
    if (!trimmed) return '';

    const args = this.parseArgs(trimmed);
    const cmd = args[0].toLowerCase();
    const cmdArgs = args.slice(1);

    switch (cmd) {
      case 'help':
        return this.cmdHelp();
      case 'clear':
        return '\x1b[2J\x1b[3J\x1b[H';
      case 'pwd':
        return `/project${this.cwd === '/' ? '' : this.cwd}`;
      case 'cd':
        return await this.cmdCd(cmdArgs);
      case 'whoami':
        return 'developer';
      case 'date':
        return new Date().toString();
      case 'echo':
        return cmdArgs.join(' ');
      case 'node':
        return this.cmdNode(cmdArgs);
      case 'ls':
      case 'dir':
        return await this.cmdLs(cmdArgs);
      case 'cat':
        return await this.cmdCat(cmdArgs);
      case 'touch':
        return await this.cmdTouch(cmdArgs);
      case 'mkdir':
        return await this.cmdMkdir(cmdArgs);
      case 'rm':
        return await this.cmdRm(cmdArgs);
      case 'mv':
        return await this.cmdMv(cmdArgs);
      case 'cp':
        return await this.cmdCp(cmdArgs);
      case 'tree':
        return await this.cmdTree();
      case 'npm':
      case 'pnpm':
      case 'yarn':
        return await this.cmdNpm(cmdArgs);
      case 'code':
      case 'open': {
        if (!cmdArgs[0]) return '\x1b[31musage: code <file>\x1b[0m';
        const targetPath = this.resolvePath(cmdArgs[0]);
        this.onOpenFile?.(targetPath);
        return `\x1b[32mOpened ${cmdArgs[0]} in editor\x1b[0m`;
      }
      case 'vite':
        return await this.cmdVite(cmdArgs);
      default:
        return `\x1b[31mcommand not found: ${cmd}\x1b[0m. Type \x1b[1;33mhelp\x1b[0m for a list of available commands.`;
    }
  }

  /**
   * Provides autocompletion results for partial input.
   */
  public async complete(partial: string): Promise<string[]> {
    const trimmed = partial.trimStart();
    const args = this.parseArgs(trimmed);

    if (args.length <= 1 && !partial.endsWith(' ')) {
      // Complete command names
      const prefix = (args[0] || '').toLowerCase();
      return COMMAND_LIST.filter((c) => c.startsWith(prefix));
    }

    // Complete file/directory paths
    const isCdCmd = args[0]?.toLowerCase() === 'cd';
    const lastArg = partial.endsWith(' ') ? '' : args[args.length - 1] || '';
    const searchDir = lastArg.includes('/')
      ? joinPaths(this.cwd, getDirname(lastArg))
      : this.cwd;
    const filePrefix = lastArg.includes('/') ? getBasename(lastArg) : lastArg;

    try {
      const items = await this.vfs.readdir(searchDir);
      const matched: string[] = [];

      for (const item of items) {
        if (!item.toLowerCase().startsWith(filePrefix.toLowerCase())) continue;
        const itemFullPath = joinPaths(searchDir, item);
        const stat = await this.vfs.stat(itemFullPath);
        if (isCdCmd && !stat.isDirectory) continue;

        const suffix = stat.isDirectory ? '/' : '';
        const res =
          (lastArg.includes('/')
            ? joinPaths(getDirname(lastArg), item)
            : item) + suffix;
        matched.push(res);
      }

      return matched;
    } catch {
      return [];
    }
  }

  private cmdHelp(): string {
    return [
      '\x1b[1;36mRunJS In-Browser IDE Terminal\x1b[0m',
      '',
      '\x1b[1mNPM Package Manager:\x1b[0m',
      '  \x1b[32mnpm install <pkg>\x1b[0m         Install and sync packages in browser runtime',
      '  \x1b[32mnpm uninstall <pkg>\x1b[0m       Remove package from project',
      '  \x1b[32mnpm run dev\x1b[0m               Start / restart Vite development server',
      '  \x1b[32mnpm run build\x1b[0m             Run production build & output bundle metrics',
      '  \x1b[32mnpm list\x1b[0m                  List project dependencies',
      '',
      '\x1b[1mFile & Directory Navigation:\x1b[0m',
      '  \x1b[33mcd [dir]\x1b[0m                  Change current directory (e.g. cd src, cd .., cd ~)',
      '  \x1b[33mpwd\x1b[0m                       Print working directory',
      '  \x1b[33mls [path]\x1b[0m                 List files and directories',
      '  \x1b[33mcat <file>\x1b[0m                Print file contents',
      '  \x1b[33mcode <file>\x1b[0m               Open file in editor',
      '  \x1b[33mtouch <file>\x1b[0m              Create a new file',
      '  \x1b[33mmkdir <dir>\x1b[0m               Create a directory',
      '  \x1b[33mrm [-rf] <path>\x1b[0m           Delete file or directory',
      '  \x1b[33mmv <src> <dest>\x1b[0m           Move or rename file',
      '  \x1b[33mcp <src> <dest>\x1b[0m           Copy file',
      '  \x1b[33mtree\x1b[0m                      Display visual directory hierarchy',
      '  \x1b[33mclear\x1b[0m                     Clear terminal screen',
    ].join('\r\n');
  }

  /**
   * Resolves a target path consistently relative to virtual root or current working directory.
   */
  private resolvePath(target?: string): string {
    if (!target || target === '.' || target === '') {
      return this.cwd;
    }
    if (
      target === '~' ||
      target === '/' ||
      target === '~/project' ||
      target === '/project'
    ) {
      return '/';
    }
    if (target.startsWith('~/project/')) {
      return normalizePath(target.slice('~/project'.length));
    }
    if (target.startsWith('/project/')) {
      return normalizePath(target.slice('/project'.length));
    }
    if (target.startsWith('~/')) {
      return normalizePath(target.slice(1));
    }
    if (target.startsWith('/')) {
      return normalizePath(target);
    }
    return normalizePath(joinPaths(this.cwd, target));
  }

  private async cmdCd(args: string[]): Promise<string> {
    const target = args[0];
    const targetPath = this.resolvePath(target);

    try {
      const exists = await this.vfs.exists(targetPath);
      if (!exists) {
        return `\x1b[31mcd: no such file or directory: ${target || ''}\x1b[0m`;
      }
      const stat = await this.vfs.stat(targetPath);
      if (!stat.isDirectory) {
        return `\x1b[31mcd: not a directory: ${target}\x1b[0m`;
      }
      this.cwd = targetPath;
      return '';
    } catch {
      return `\x1b[31mcd: no such file or directory: ${target || ''}\x1b[0m`;
    }
  }

  private cmdNode(args: string[]): string {
    if (args.includes('-v') || args.includes('--version')) {
      return 'v22.12.0';
    }
    return 'RunJS In-Browser Node.js Environment (v22.12.0)';
  }

  private async cmdLs(args: string[]): Promise<string> {
    const targetDir = this.resolvePath(args[0]);

    try {
      const items = await this.vfs.readdir(targetDir);
      if (items.length === 0) return '';

      const formatted: string[] = [];
      for (const name of items) {
        const itemPath = joinPaths(targetDir, name);
        const stat = await this.vfs.stat(itemPath);
        if (stat.isDirectory) {
          formatted.push(`\x1b[1;34m${name}/\x1b[0m`);
        } else {
          formatted.push(name);
        }
      }
      return formatted.join('  ');
    } catch {
      return `\x1b[31mls: ${args[0] || targetDir}: No such directory\x1b[0m`;
    }
  }

  private async cmdCat(args: string[]): Promise<string> {
    if (!args[0]) return '\x1b[31musage: cat <file>\x1b[0m';
    const targetPath = this.resolvePath(args[0]);

    try {
      const content = await this.vfs.readFile(targetPath);
      return content.replace(/\n/g, '\r\n');
    } catch {
      return `\x1b[31mcat: ${args[0]}: No such file\x1b[0m`;
    }
  }

  private async cmdTouch(args: string[]): Promise<string> {
    if (!args[0]) return '\x1b[31musage: touch <file>\x1b[0m';
    const targetPath = this.resolvePath(args[0]);

    try {
      if (!(await this.vfs.exists(targetPath))) {
        await this.vfs.createFile(targetPath, '');
      }
      return '';
    } catch (e) {
      return `\x1b[31mtouch: ${(e as Error).message}\x1b[0m`;
    }
  }

  private async cmdMkdir(args: string[]): Promise<string> {
    if (!args[0]) return '\x1b[31musage: mkdir <dir>\x1b[0m';
    const targetPath = this.resolvePath(args[0]);

    try {
      await this.vfs.createFolder(targetPath);
      return '';
    } catch (e) {
      return `\x1b[31mmkdir: ${(e as Error).message}\x1b[0m`;
    }
  }

  private async cmdRm(args: string[]): Promise<string> {
    const rawPaths = args.filter((a) => !a.startsWith('-'));
    if (rawPaths.length === 0) return '\x1b[31musage: rm [-rf] <path>\x1b[0m';

    const targetPath = this.resolvePath(rawPaths[0]);
    try {
      await this.vfs.delete(targetPath);
      return '';
    } catch (e) {
      return `\x1b[31mrm: ${(e as Error).message}\x1b[0m`;
    }
  }

  private async cmdMv(args: string[]): Promise<string> {
    if (args.length < 2) return '\x1b[31musage: mv <src> <dest>\x1b[0m';
    const fromPath = this.resolvePath(args[0]);
    const toPath = this.resolvePath(args[1]);

    try {
      await this.vfs.rename(fromPath, toPath);
      return '';
    } catch (e) {
      return `\x1b[31mmv: ${(e as Error).message}\x1b[0m`;
    }
  }

  private async cmdCp(args: string[]): Promise<string> {
    if (args.length < 2) return '\x1b[31musage: cp <src> <dest>\x1b[0m';
    const fromPath = this.resolvePath(args[0]);
    const toPath = this.resolvePath(args[1]);

    try {
      const content = await this.vfs.readFile(fromPath);
      await this.vfs.createFile(toPath, content);
      return '';
    } catch (e) {
      return `\x1b[31mcp: ${(e as Error).message}\x1b[0m`;
    }
  }

  private async cmdTree(): Promise<string> {
    try {
      const tree = await this.vfs.getTree('/');
      const lines: string[] = ['\x1b[1;34mproject/\x1b[0m'];

      const renderNode = (node: TreeNode, prefix: string) => {
        if (!node.children) return;
        node.children.forEach((child: TreeNode, idx: number) => {
          const isLast = idx === (node.children ? node.children.length - 1 : 0);
          const marker = isLast ? '└── ' : '├── ';
          const nextPrefix = prefix + (isLast ? '    ' : '│   ');

          if (child.isDirectory) {
            lines.push(`${prefix}${marker}\x1b[1;34m${child.name}/\x1b[0m`);
            renderNode(child, nextPrefix);
          } else {
            lines.push(`${prefix}${marker}${child.name}`);
          }
        });
      };

      renderNode(tree, '');
      return lines.join('\r\n');
    } catch {
      return '\x1b[31mFailed to read project tree\x1b[0m';
    }
  }

  private async cmdNpm(args: string[]): Promise<string> {
    if (args.length === 0 || args[0] === '--version' || args[0] === '-v') {
      return '10.8.2';
    }

    const sub = args[0].toLowerCase();

    if (sub === 'install' || sub === 'i' || sub === 'add') {
      const pkgs = args.slice(1).filter((a) => !a.startsWith('-'));
      const isDev = args.includes('-D') || args.includes('--save-dev');

      if (pkgs.length === 0) {
        // Simple npm install / restore
        return [
          'up to date, audited 42 packages in 180ms',
          'found 0 vulnerabilities',
        ].join('\r\n');
      }

      const lines: string[] = [
        `\x1b[36m📦 Resolving package(s): ${pkgs.join(', ')}...\x1b[0m`,
      ];

      const res = await PackageManager.install(this.vfs, pkgs, isDev);
      if (res.success) {
        for (const p of res.packages) {
          lines.push(
            `\x1b[32m✔ Added ${p.name}@${p.version} to package.json (${
              p.isDev ? 'devDependencies' : 'dependencies'
            })\x1b[0m`
          );
        }
        lines.push('');
        lines.push(`\x1b[1m${res.message}\x1b[0m`);
        lines.push('\x1b[32m✔ Synced with in-browser Vite bundler\x1b[0m');
      } else {
        lines.push(`\x1b[31m✖ Installation failed: ${res.error}\x1b[0m`);
      }

      return lines.join('\r\n');
    }

    if (sub === 'uninstall' || sub === 'rm' || sub === 'remove') {
      const pkgs = args.slice(1).filter((a) => !a.startsWith('-'));
      if (pkgs.length === 0) {
        return '\x1b[31musage: npm uninstall <package-name>\x1b[0m';
      }

      const res = await PackageManager.uninstall(this.vfs, pkgs);
      if (!res.success || res.packages.length === 0) {
        return `\x1b[31m✖ Removal failed: ${res.error || 'no matching package'}\x1b[0m`;
      }

      return [
        `\x1b[32m✔ Removed ${res.packages.join(', ')} from package.json\x1b[0m`,
        `\x1b[1m${res.message}\x1b[0m`,
        '\x1b[32m✔ Synced with in-browser Vite bundler\x1b[0m',
      ].join('\r\n');
    }

    if (sub === 'run') {
      const script = args[1]?.toLowerCase();
      if (!script) {
        return '\x1b[31musage: npm run <script> (e.g. dev, build)\x1b[0m';
      }

      if (script === 'dev' || script === 'start') {
        this.onDevServerRestart?.();
        return [
          '',
          '  \x1b[1;32mVITE v6.0.3\x1b[0m  \x1b[2mready in 120 ms\x1b[0m',
          '',
          '  \x1b[1m➜\x1b[0m  \x1b[1mLocal:\x1b[0m   \x1b[36mhttp://localhost:5173/\x1b[0m',
          '  \x1b[1m➜\x1b[0m  \x1b[1mNetwork:\x1b[0m \x1b[2muse --host to expose\x1b[0m',
          '  \x1b[1m➜\x1b[0m  \x1b[2mpress h + enter to show help\x1b[0m',
          '',
          '\x1b[32m✔ Dev server restarted with HMR active\x1b[0m',
        ].join('\r\n');
      }

      if (script === 'build') {
        return [
          '',
          '> vite-react-app@0.0.0 build',
          '> vite build',
          '',
          '\x1b[36mvite v6.0.3 building for production...\x1b[0m',
          'transforming (24) modules...',
          '\x1b[32m✓ 24 modules transformed.\x1b[0m',
          'dist/index.html                   0.46 kB │ gzip:  0.30 kB',
          'dist/assets/index-D7b39a.css      1.84 kB │ gzip:  0.82 kB',
          'dist/assets/index-B981ca.js     148.60 kB │ gzip: 47.92 kB',
          '\x1b[32m✓ built in 240ms\x1b[0m',
        ].join('\r\n');
      }

      return `\x1b[31mUnknown script "${script}". Available: dev, build\x1b[0m`;
    }

    if (sub === 'list' || sub === 'ls') {
      const deps = await PackageManager.getDependencies(this.vfs);
      const lines: string[] = ['\x1b[1;36mvite-react-app@0.0.0\x1b[0m'];
      const entries = Object.entries(deps);
      entries.forEach(([name, ver], idx) => {
        const isLast = idx === entries.length - 1;
        lines.push(`${isLast ? '└── ' : '├── '}${name}@\x1b[33m${ver}\x1b[0m`);
      });
      return lines.join('\r\n');
    }

    return `\x1b[31mUnknown npm command "${sub}". Type \x1b[1;33mhelp\x1b[0m for available commands.\x1b[0m`;
  }

  private async cmdVite(args: string[]): Promise<string> {
    if (args.includes('--version') || args.includes('-v')) {
      return 'vite/6.0.3 browser-runtime';
    }
    return this.cmdNpm(['run', args[0] || 'dev']);
  }
}
