/**
 * Filesystem abstraction interface for browser-based IDEs.
 */
export interface FileStat {
  isFile: boolean;
  isDirectory: boolean;
  size: number;
  updatedAt: number;
}

export interface FileEntry {
  path: string;
  name: string;
  isDirectory: boolean;
  content?: string;
  updatedAt: number;
  size: number;
}

export interface TreeNode {
  path: string;
  name: string;
  isDirectory: boolean;
  children?: TreeNode[];
  updatedAt: number;
  size: number;
}

export type FSEventType = 'change' | 'create' | 'delete' | 'rename';

export interface FSEvent {
  type: FSEventType;
  path: string;
  oldPath?: string;
  content?: string;
}

export type FSEventListener = (event: FSEvent) => void;

export interface FileSystem {
  readFile(path: string): Promise<string>;
  writeFile(path: string, content: string): Promise<void>;
  createFile(path: string, content?: string): Promise<void>;
  createFolder(path: string): Promise<void>;
  rename(from: string, to: string): Promise<void>;
  delete(path: string): Promise<void>;
  readdir(path: string): Promise<string[]>;
  exists(path: string): Promise<boolean>;
  stat(path: string): Promise<FileStat>;
  getTree(rootPath?: string): Promise<TreeNode>;
  toJSON(): Promise<Record<string, string>>;
  fromJSON(files: Record<string, string>): Promise<void>;
  on(event: FSEventType | '*', listener: FSEventListener): () => void;
}
