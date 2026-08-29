import {
  FileCode,
  FileJson,
  FileText,
  File,
  Code2,
  Atom,
  Zap,
  Boxes,
  Palette,
  Image,
  Folder,
  FolderOpen,
} from 'lucide-react';
import { getBasename, getExtension } from '../../fs/pathUtils';

interface FileIconProps {
  path: string;
  isDirectory?: boolean;
  isOpen?: boolean;
  className?: string;
}

export function FileIcon({
  path,
  isDirectory,
  isOpen,
  className = 'w-4 h-4',
}: FileIconProps) {
  if (isDirectory) {
    return isOpen ? (
      <FolderOpen className={`${className} text-amber-500`} />
    ) : (
      <Folder className={`${className} text-amber-500`} />
    );
  }

  const base = getBasename(path).toLowerCase();
  const ext = getExtension(path);

  if (base === 'package.json') {
    return <Boxes className={`${className} text-red-500`} />;
  }
  if (base.startsWith('vite.config')) {
    return <Zap className={`${className} text-amber-400`} />;
  }
  if (base === 'tsconfig.json') {
    return <FileCode className={`${className} text-blue-500`} />;
  }

  switch (ext) {
    case 'jsx':
      return <Atom className={`${className} text-cyan-400`} />;
    case 'tsx':
      return <Atom className={`${className} text-blue-400`} />;
    case 'js':
    case 'mjs':
    case 'cjs':
      return <Code2 className={`${className} text-amber-400`} />;
    case 'ts':
    case 'mts':
    case 'cts':
      return <Code2 className={`${className} text-blue-500`} />;
    case 'json':
      return <FileJson className={`${className} text-yellow-500`} />;
    case 'css':
    case 'scss':
    case 'sass':
    case 'less':
      return <Palette className={`${className} text-sky-400`} />;
    case 'html':
      return <FileCode className={`${className} text-orange-500`} />;
    case 'svg':
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'webp':
      return <Image className={`${className} text-purple-400`} />;
    case 'md':
      return <FileText className={`${className} text-slate-400`} />;
    default:
      return <File className={`${className} text-slate-400`} />;
  }
}
