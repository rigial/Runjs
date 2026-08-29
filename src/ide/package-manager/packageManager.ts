import { FileSystem } from '../fs/FileSystem';

export interface PackageInfo {
  name: string;
  version: string;
  isDev?: boolean;
}

export interface InstallResult {
  success: boolean;
  packages: PackageInfo[];
  durationMs: number;
  message: string;
  error?: string;
}

export interface UninstallResult {
  success: boolean;
  packages: string[];
  durationMs: number;
  message: string;
  error?: string;
}

export interface PackageJsonStructure {
  name?: string;
  private?: boolean;
  version?: string;
  type?: string;
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  [key: string]: unknown;
}

/**
 * In-browser NPM package manager.
 */
export class PackageManager {
  /**
   * Fetches latest or matching version from NPM registry.
   */
  public static async resolvePackageVersion(
    name: string,
    requestedVersion?: string
  ): Promise<string> {
    if (requestedVersion && requestedVersion !== 'latest') {
      return requestedVersion.startsWith('^') ||
        requestedVersion.startsWith('~')
        ? requestedVersion
        : `^${requestedVersion}`;
    }

    try {
      const response = await fetch(
        `https://registry.npmjs.org/${encodeURIComponent(name)}/latest`,
        { headers: { Accept: 'application/json' } }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.version) {
          return `^${data.version}`;
        }
      }
    } catch {
      // Offline or CORS fallback
    }

    return 'latest';
  }

  /**
   * Reads and parses /package.json from VFS.
   */
  public static async getPackageJson(
    vfs: FileSystem
  ): Promise<PackageJsonStructure> {
    try {
      const content = await vfs.readFile('/package.json');
      return JSON.parse(content);
    } catch {
      return {
        name: 'react-app',
        private: true,
        version: '0.0.0',
        dependencies: {},
        devDependencies: {},
      };
    }
  }

  /**
   * Saves updated /package.json to VFS.
   */
  public static async savePackageJson(
    vfs: FileSystem,
    pkg: PackageJsonStructure
  ): Promise<void> {
    const formatted = JSON.stringify(pkg, null, 2);
    await vfs.writeFile('/package.json', formatted);
  }

  /**
   * Installs one or more packages into package.json.
   */
  public static async install(
    vfs: FileSystem,
    rawSpecs: string[],
    isDev = false
  ): Promise<InstallResult> {
    const startTime = performance.now();
    const pkg = await this.getPackageJson(vfs);
    const installed: PackageInfo[] = [];

    if (!pkg.dependencies) pkg.dependencies = {};
    if (!pkg.devDependencies) pkg.devDependencies = {};

    const targetSection = isDev ? pkg.devDependencies : pkg.dependencies;

    for (const rawSpec of rawSpecs) {
      if (!rawSpec.trim()) continue;

      let name = rawSpec.trim();
      let version = 'latest';

      if (name.startsWith('@')) {
        // Scoped package e.g. @types/react@^18.0.0
        const parts = name.substring(1).split('@');
        name = '@' + parts[0];
        if (parts[1]) version = parts[1];
      } else if (name.includes('@')) {
        // Unscoped package e.g. axios@^1.6.0
        const parts = name.split('@');
        name = parts[0];
        if (parts[1]) version = parts[1];
      }

      const resolvedVersion = await this.resolvePackageVersion(name, version);
      targetSection[name] = resolvedVersion;

      installed.push({
        name,
        version: resolvedVersion,
        isDev,
      });
    }

    await this.savePackageJson(vfs, pkg);
    const durationMs = Math.round(performance.now() - startTime);

    return {
      success: true,
      packages: installed,
      durationMs,
      message: `added ${installed.length} package${
        installed.length === 1 ? '' : 's'
      } in ${durationMs}ms`,
    };
  }

  /**
   * Uninstalls one or more packages from package.json.
   */
  public static async uninstall(
    vfs: FileSystem,
    packageNames: string[]
  ): Promise<UninstallResult> {
    const startTime = performance.now();
    const pkg = await this.getPackageJson(vfs);
    const removed: string[] = [];

    for (const name of packageNames) {
      const cleanName = name.trim();
      if (pkg.dependencies && pkg.dependencies[cleanName]) {
        delete pkg.dependencies[cleanName];
        removed.push(cleanName);
      }
      if (pkg.devDependencies && pkg.devDependencies[cleanName]) {
        delete pkg.devDependencies[cleanName];
        if (!removed.includes(cleanName)) removed.push(cleanName);
      }
    }

    await this.savePackageJson(vfs, pkg);
    const durationMs = Math.round(performance.now() - startTime);

    return {
      success: true,
      packages: removed,
      durationMs,
      message: `removed ${removed.length} package${
        removed.length === 1 ? '' : 's'
      } in ${durationMs}ms`,
    };
  }

  /**
   * Returns list of dependencies as a flat dictionary.
   */
  public static async getDependencies(
    vfs: FileSystem
  ): Promise<Record<string, string>> {
    const pkg = await this.getPackageJson(vfs);
    return {
      ...(pkg.dependencies || {}),
      ...(pkg.devDependencies || {}),
    };
  }
}
