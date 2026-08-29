import {
  FileSystem,
  FileStat,
  FileEntry,
  TreeNode,
  FSEventType,
  FSEvent,
  FSEventListener,
} from './FileSystem';
import { normalizePath, getDirname, getBasename, joinPaths } from './pathUtils';

/**
 * In-memory hierarchical Virtual File System.
 */
export class VirtualFileSystem implements FileSystem {
  private entries: Map<string, FileEntry> = new Map();
  private listeners: Map<string, Set<FSEventListener>> = new Map();

  constructor(initialFiles?: Record<string, string>) {
    // Ensure root exists
    this.entries.set('/', {
      path: '/',
      name: '',
      isDirectory: true,
      updatedAt: Date.now(),
      size: 0,
    });

    if (initialFiles) {
      this.fromJSONSync(initialFiles);
    }
  }

  /**
   * Synchronously load files from a JSON dictionary.
   */
  private fromJSONSync(files: Record<string, string>): void {
    for (const [rawPath, content] of Object.entries(files)) {
      const normPath = normalizePath(rawPath);
      this.ensureParentDirectories(normPath);
      this.entries.set(normPath, {
        path: normPath,
        name: getBasename(normPath),
        isDirectory: false,
        content: content,
        updatedAt: Date.now(),
        size: new Blob([content]).size,
      });
    }
  }

  private ensureParentDirectories(path: string): void {
    const parentDir = getDirname(path);
    if (parentDir === '/' || this.entries.has(parentDir)) return;

    const segments = parentDir.split('/').filter(Boolean);
    let current = '';
    for (const seg of segments) {
      current += '/' + seg;
      if (!this.entries.has(current)) {
        this.entries.set(current, {
          path: current,
          name: seg,
          isDirectory: true,
          updatedAt: Date.now(),
          size: 0,
        });
      }
    }
  }

  public async readFile(path: string): Promise<string> {
    const norm = normalizePath(path);
    const entry = this.entries.get(norm);
    if (!entry) {
      throw new Error(`File not found: ${norm}`);
    }
    if (entry.isDirectory) {
      throw new Error(`Path is a directory: ${norm}`);
    }
    return entry.content ?? '';
  }

  public async writeFile(path: string, content: string): Promise<void> {
    const norm = normalizePath(path);
    const current = this.entries.get(norm);
    if (current?.isDirectory) {
      throw new Error(`Path is a directory: ${norm}`);
    }
    this.ensureParentDirectories(norm);
    const isNew = !this.entries.has(norm);
    const existing = this.entries.get(norm);

    const entry: FileEntry = {
      path: norm,
      name: getBasename(norm),
      isDirectory: false,
      content,
      updatedAt: Date.now(),
      size: new Blob([content]).size,
    };

    this.entries.set(norm, entry);

    if (isNew) {
      this.emit({ type: 'create', path: norm, content });
    } else if (existing?.content !== content) {
      this.emit({ type: 'change', path: norm, content });
    }
  }

  public async createFile(path: string, content = ''): Promise<void> {
    const norm = normalizePath(path);
    if (this.entries.has(norm)) {
      throw new Error(`File already exists: ${norm}`);
    }
    await this.writeFile(norm, content);
  }

  public async createFolder(path: string): Promise<void> {
    const norm = normalizePath(path);
    if (this.entries.has(norm)) {
      throw new Error(`Directory already exists: ${norm}`);
    }
    this.ensureParentDirectories(norm);
    this.entries.set(norm, {
      path: norm,
      name: getBasename(norm),
      isDirectory: true,
      updatedAt: Date.now(),
      size: 0,
    });
    this.emit({ type: 'create', path: norm });
  }

  public async rename(from: string, to: string): Promise<void> {
    const normFrom = normalizePath(from);
    const normTo = normalizePath(to);

    if (normFrom === '/' || normTo === '/') {
      throw new Error('Cannot rename root directory');
    }
    if (!this.entries.has(normFrom)) {
      throw new Error(`Source path not found: ${normFrom}`);
    }
    if (this.entries.has(normTo)) {
      throw new Error(`Target path already exists: ${normTo}`);
    }
    if (normTo === normFrom || normTo.startsWith(normFrom + '/')) {
      throw new Error(
        `Cannot move a directory into itself: ${normFrom} -> ${normTo}`
      );
    }

    const sourceEntry = this.entries.get(normFrom)!;
    this.ensureParentDirectories(normTo);

    if (!sourceEntry.isDirectory) {
      // Single file rename
      this.entries.delete(normFrom);
      this.entries.set(normTo, {
        ...sourceEntry,
        path: normTo,
        name: getBasename(normTo),
        updatedAt: Date.now(),
      });
      this.emit({ type: 'rename', path: normTo, oldPath: normFrom });
    } else {
      // Directory rename: update all children paths
      const prefix = normFrom.endsWith('/') ? normFrom : normFrom + '/';
      const toPrefix = normTo.endsWith('/') ? normTo : normTo + '/';

      const entriesToMove: [string, FileEntry][] = [];
      for (const [p, entry] of this.entries.entries()) {
        if (p === normFrom || p.startsWith(prefix)) {
          entriesToMove.push([p, entry]);
        }
      }

      for (const [oldP, entry] of entriesToMove) {
        this.entries.delete(oldP);
        const newP =
          oldP === normFrom ? normTo : toPrefix + oldP.substring(prefix.length);
        this.entries.set(newP, {
          ...entry,
          path: newP,
          name: getBasename(newP),
          updatedAt: Date.now(),
        });
      }

      this.emit({ type: 'rename', path: normTo, oldPath: normFrom });
    }
  }

  public async delete(path: string): Promise<void> {
    const norm = normalizePath(path);
    if (norm === '/') {
      throw new Error('Cannot delete root directory');
    }
    if (!this.entries.has(norm)) {
      return; // already gone
    }

    const entry = this.entries.get(norm)!;
    if (!entry.isDirectory) {
      this.entries.delete(norm);
      this.emit({ type: 'delete', path: norm });
    } else {
      // Recursive delete
      const prefix = norm.endsWith('/') ? norm : norm + '/';
      const toDelete: string[] = [];
      for (const p of this.entries.keys()) {
        if (p === norm || p.startsWith(prefix)) {
          toDelete.push(p);
        }
      }
      for (const p of toDelete) {
        this.entries.delete(p);
      }
      this.emit({ type: 'delete', path: norm });
    }
  }

  public async readdir(path: string): Promise<string[]> {
    const norm = normalizePath(path);
    const entry = this.entries.get(norm);
    if (!entry || !entry.isDirectory) {
      throw new Error(`Directory not found: ${norm}`);
    }

    const prefix = norm === '/' ? '/' : norm + '/';
    const directChildren = new Set<string>();

    for (const p of this.entries.keys()) {
      if (p === norm) continue;
      if (p.startsWith(prefix)) {
        const relative = p.substring(prefix.length);
        const firstSegment = relative.split('/')[0];
        if (firstSegment) {
          directChildren.add(firstSegment);
        }
      }
    }

    return Array.from(directChildren).sort();
  }

  public async exists(path: string): Promise<boolean> {
    const norm = normalizePath(path);
    return this.entries.has(norm);
  }

  public async stat(path: string): Promise<FileStat> {
    const norm = normalizePath(path);
    const entry = this.entries.get(norm);
    if (!entry) {
      throw new Error(`Path not found: ${norm}`);
    }
    return {
      isFile: !entry.isDirectory,
      isDirectory: entry.isDirectory,
      size: entry.size,
      updatedAt: entry.updatedAt,
    };
  }

  public async getTree(rootPath = '/'): Promise<TreeNode> {
    const normRoot = normalizePath(rootPath);
    const rootEntry = this.entries.get(normRoot);
    if (!rootEntry) {
      throw new Error(`Root not found: ${normRoot}`);
    }

    const buildNode = (currPath: string): TreeNode => {
      const entry = this.entries.get(currPath)!;
      if (!entry.isDirectory) {
        return {
          path: entry.path,
          name: entry.name,
          isDirectory: false,
          updatedAt: entry.updatedAt,
          size: entry.size,
        };
      }

      const prefix = currPath === '/' ? '/' : currPath + '/';
      const childNames = new Set<string>();

      for (const p of this.entries.keys()) {
        if (p === currPath) continue;
        if (p.startsWith(prefix)) {
          const rel = p.substring(prefix.length);
          const seg = rel.split('/')[0];
          if (seg) childNames.add(seg);
        }
      }

      const children: TreeNode[] = [];
      for (const name of Array.from(childNames)) {
        const childPath = joinPaths(currPath, name);
        if (this.entries.has(childPath)) {
          children.push(buildNode(childPath));
        }
      }

      // Sort directories first, then alphabetical
      children.sort((a, b) => {
        if (a.isDirectory === b.isDirectory) {
          return a.name.localeCompare(b.name);
        }
        return a.isDirectory ? -1 : 1;
      });

      return {
        path: entry.path,
        name: entry.name || 'root',
        isDirectory: true,
        children,
        updatedAt: entry.updatedAt,
        size: entry.size,
      };
    };

    return buildNode(normRoot);
  }

  public async toJSON(): Promise<Record<string, string>> {
    const result: Record<string, string> = {};
    for (const [path, entry] of this.entries.entries()) {
      if (!entry.isDirectory && entry.content !== undefined) {
        // Strip leading slash for Sandpack compatibility if needed, or keep normalized
        result[path] = entry.content;
      }
    }
    return result;
  }

  public async fromJSON(files: Record<string, string>): Promise<void> {
    this.entries.clear();
    this.entries.set('/', {
      path: '/',
      name: '',
      isDirectory: true,
      updatedAt: Date.now(),
      size: 0,
    });
    this.fromJSONSync(files);
    this.emit({ type: 'change', path: '/' });
  }

  public on(event: FSEventType | '*', listener: FSEventListener): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener);

    return () => {
      this.listeners.get(event)?.delete(listener);
    };
  }

  private emit(event: FSEvent): void {
    const specificListeners = this.listeners.get(event.type);
    if (specificListeners) {
      for (const l of specificListeners) {
        try {
          l(event);
        } catch (e) {
          console.error('Error in FS listener:', e);
        }
      }
    }

    const wildcardListeners = this.listeners.get('*');
    if (wildcardListeners) {
      for (const l of wildcardListeners) {
        try {
          l(event);
        } catch (e) {
          console.error('Error in FS wildcard listener:', e);
        }
      }
    }
  }
}
