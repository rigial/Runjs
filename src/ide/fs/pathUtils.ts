/**
 * Path utilities for Virtual File System.
 */

/**
 * Normalizes a virtual path to start with '/' and remove redundant slashes and dots.
 */
export function normalizePath(path: string): string {
  if (!path || path === '.' || path === '') return '/';

  // Replace backslashes with forward slashes
  const p = path.replace(/\\/g, '/');

  // Split parts
  const segments = p.split('/').filter(Boolean);
  const stack: string[] = [];

  for (const seg of segments) {
    if (seg === '.') continue;
    if (seg === '..') {
      stack.pop();
    } else {
      stack.push(seg);
    }
  }

  return '/' + stack.join('/');
}

/**
 * Joins path segments into a normalized path.
 */
export function joinPaths(...parts: string[]): string {
  return normalizePath(parts.filter(Boolean).join('/'));
}

/**
 * Gets the directory name of a path.
 */
export function getDirname(path: string): string {
  const norm = normalizePath(path);
  if (norm === '/') return '/';
  const lastSlash = norm.lastIndexOf('/');
  if (lastSlash === 0) return '/';
  return norm.substring(0, lastSlash);
}

/**
 * Gets the base filename of a path.
 */
export function getBasename(path: string): string {
  const norm = normalizePath(path);
  if (norm === '/') return '';
  const lastSlash = norm.lastIndexOf('/');
  return norm.substring(lastSlash + 1);
}

/**
 * Gets the file extension without dot.
 */
export function getExtension(path: string): string {
  const base = getBasename(path);
  const lastDot = base.lastIndexOf('.');
  if (lastDot <= 0) return '';
  return base.substring(lastDot + 1).toLowerCase();
}

/**
 * Determines language identifier for Monaco based on file extension.
 */
export function getLanguageFromPath(path: string): string {
  const ext = getExtension(path);
  switch (ext) {
    case 'js':
    case 'mjs':
    case 'cjs':
      return 'javascript';
    case 'jsx':
      return 'javascript';
    case 'ts':
    case 'mts':
    case 'cts':
      return 'typescript';
    case 'tsx':
      return 'typescript';
    case 'json':
      return 'json';
    case 'css':
      return 'css';
    case 'scss':
    case 'sass':
      return 'scss';
    case 'less':
      return 'less';
    case 'html':
    case 'htm':
      return 'html';
    case 'md':
    case 'markdown':
      return 'markdown';
    case 'svg':
    case 'xml':
      return 'xml';
    case 'yaml':
    case 'yml':
      return 'yaml';
    default:
      return 'plaintext';
  }
}
