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
   * Returns null if package is confirmed not found (404).
   */
  public static async resolvePackageVersion(
    name: string,
    requestedVersion?: string
  ): Promise<string | null> {
    if (requestedVersion && requestedVersion !== 'latest') {
      return requestedVersion.startsWith('^') ||
        requestedVersion.startsWith('~')
        ? requestedVersion
        : `^${requestedVersion}`;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let signal: AbortSignal | undefined;

    try {
      if (typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal) {
        signal = AbortSignal.timeout(5000);
      } else if (typeof AbortController !== 'undefined') {
        const controller = new AbortController();
        timeoutId = setTimeout(() => controller.abort(), 5000);
        signal = controller.signal;
      }

      const response = await fetch(
        `https://registry.npmjs.org/${encodeURIComponent(name)}/latest`,
        { headers: { Accept: 'application/json' }, signal }
      );

      if (response.status === 404) {
        return null;
      }

      if (response.ok) {
        const data = await response.json();
        if (data.version) {
          return `^${data.version}`;
        }
      }
    } catch {
      // Offline, network error, or timeout: fallback to 'latest'
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }

    return 'latest';
  }

  /**
   * Reads and parses /package.json from VFS.
   */
  public static async getPackageJson(
    vfs: FileSystem
  ): Promise<PackageJsonStructure> {
    let content: string;
    try {
      content = await vfs.readFile('/package.json');
    } catch {
      return {
        name: 'react-app',
        private: true,
        version: '0.0.0',
        dependencies: {},
        devDependencies: {},
      };
    }

    try {
      const parsed = JSON.parse(content);
      if (!parsed || typeof parsed !== 'object') {
        throw new Error('package.json root must be an object');
      }
      return parsed as PackageJsonStructure;
    } catch (e) {
      throw new Error(
        `/package.json is not valid JSON: ${(e as Error).message}`
      );
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
    let pkg: PackageJsonStructure;

    try {
      pkg = await this.getPackageJson(vfs);
    } catch (e) {
      return {
        success: false,
        packages: [],
        durationMs: Math.round(performance.now() - startTime),
        message: '',
        error: (e as Error).message,
      };
    }

    const installed: PackageInfo[] = [];
    const failed: string[] = [];

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
      if (resolvedVersion === null) {
        failed.push(name);
        continue;
      }

      targetSection[name] = resolvedVersion;

      installed.push({
        name,
        version: resolvedVersion,
        isDev,
      });
    }

    if (failed.length > 0) {
      const durationMs = Math.round(performance.now() - startTime);
      return {
        success: false,
        packages: installed,
        durationMs,
        message: '',
        error: `404 Not Found: package(s) not found: ${failed.join(', ')}`,
      };
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
    let pkg: PackageJsonStructure;

    try {
      pkg = await this.getPackageJson(vfs);
    } catch (e) {
      return {
        success: false,
        packages: [],
        durationMs: Math.round(performance.now() - startTime),
        message: '',
        error: (e as Error).message,
      };
    }

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

    if (removed.length === 0 && packageNames.length > 0) {
      return {
        success: false,
        packages: [],
        durationMs: Math.round(performance.now() - startTime),
        message: '',
        error: `No matching packages found to uninstall: ${packageNames.join(', ')}`,
      };
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
