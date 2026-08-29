import { useState, useEffect, useCallback, useRef } from 'react';
import { TreeNode, FileSystem } from '../../fs/FileSystem';
import { joinPaths, getDirname, getBasename } from '../../fs/pathUtils';
import { FileTreeItem } from './FileTreeItem';
import { ContextMenu, ContextMenuItem } from './ContextMenu';
import JSZip from 'jszip';
import {
  FilePlus,
  FolderPlus,
  Download,
  Upload,
  RefreshCw,
  FolderTree,
} from 'lucide-react';

interface FileExplorerProps {
  vfs: FileSystem;
  activeFile: string;
  dirtyFiles: Set<string>;
  onSelectFile: (path: string) => void;
  onFileDeleted?: (path: string) => void;
  onFileRenamed?: (oldPath: string, newPath: string) => void;
  className?: string;
}

export function FileExplorer({
  vfs,
  activeFile,
  dirtyFiles,
  onSelectFile,
  onFileDeleted,
  onFileRenamed,
  className = '',
}: FileExplorerProps) {
  const [tree, setTree] = useState<TreeNode | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(['/', '/src', '/public'])
  );
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    items: ContextMenuItem[];
  } | null>(null);

  // Creation & Renaming states
  const [creatingUnderPath, setCreatingUnderPath] = useState<string | null>(
    null
  );
  const [creatingType, setCreatingType] = useState<'file' | 'folder' | null>(
    null
  );
  const [renamingPath, setRenamingPath] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const refreshTree = useCallback(async () => {
    try {
      const rootTree = await vfs.getTree('/');
      setTree(rootTree);
    } catch (e) {
      console.error('Failed to get FS tree:', e);
    }
  }, [vfs]);

  useEffect(() => {
    refreshTree();
    const unsub = vfs.on('*', () => {
      refreshTree();
    });
    return () => unsub();
  }, [vfs, refreshTree]);

  // Ensure active file's parent folder is expanded
  useEffect(() => {
    if (activeFile) {
      const parent = getDirname(activeFile);
      if (parent && parent !== '/') {
        setExpandedFolders((prev) => new Set([...prev, parent, '/']));
      }
    }
  }, [activeFile]);

  const handleToggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const handleCollapseAll = () => {
    setExpandedFolders(new Set(['/']));
  };

  const handleStartCreate = (parentPath: string, type: 'file' | 'folder') => {
    setExpandedFolders((prev) => new Set([...prev, parentPath]));
    setCreatingUnderPath(parentPath);
    setCreatingType(type);
    setRenamingPath(null);
  };

  const handleCreateSubmit = async (name: string) => {
    if (!creatingUnderPath || !creatingType) return;
    const targetPath = joinPaths(creatingUnderPath, name);

    try {
      if (creatingType === 'file') {
        await vfs.createFile(targetPath, '');
        onSelectFile(targetPath);
      } else {
        await vfs.createFolder(targetPath);
        setExpandedFolders((prev) => new Set([...prev, targetPath]));
      }
    } catch (e) {
      console.error('Create failed:', e);
      alert((e as Error).message);
    } finally {
      setCreatingUnderPath(null);
      setCreatingType(null);
    }
  };

  const handleCreateCancel = () => {
    setCreatingUnderPath(null);
    setCreatingType(null);
  };

  const handleStartRename = (path: string) => {
    setRenamingPath(path);
    setCreatingUnderPath(null);
    setCreatingType(null);
  };

  const handleRenameSubmit = async (oldPath: string, newName: string) => {
    const parent = getDirname(oldPath);
    const newPath = joinPaths(parent, newName);

    try {
      await vfs.rename(oldPath, newPath);
      onFileRenamed?.(oldPath, newPath);
    } catch (e) {
      console.error('Rename failed:', e);
      alert((e as Error).message);
    } finally {
      setRenamingPath(null);
    }
  };

  const handleRenameCancel = () => {
    setRenamingPath(null);
  };

  const handleDelete = async (path: string, isDirectory: boolean) => {
    const base = getBasename(path);
    const msg = isDirectory
      ? `Are you sure you want to delete folder '${base}' and all its contents?`
      : `Are you sure you want to delete '${base}'?`;

    if (window.confirm(msg)) {
      try {
        await vfs.delete(path);
        onFileDeleted?.(path);
      } catch (e) {
        console.error('Delete failed:', e);
        alert((e as Error).message);
      }
    }
  };

  const handleDuplicate = async (path: string) => {
    try {
      const content = await vfs.readFile(path);
      const dir = getDirname(path);
      const base = getBasename(path);
      const dot = base.lastIndexOf('.');
      const name = dot > 0 ? base.substring(0, dot) : base;
      const ext = dot > 0 ? base.substring(dot) : '';
      const newPath = joinPaths(dir, `${name}-copy${ext}`);

      await vfs.createFile(newPath, content);
      onSelectFile(newPath);
    } catch (e) {
      console.error('Duplicate failed:', e);
    }
  };

  const handleDownloadZip = async () => {
    try {
      const zip = new JSZip();
      const files = await vfs.toJSON();

      for (const [filePath, content] of Object.entries(files)) {
        // Strip leading slash for zip paths
        const relPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
        zip.file(relPath, content);
      }

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'runjs-react-project.zip';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        URL.revokeObjectURL(url);
      }, 100);
    } catch (e) {
      console.error('Failed to export ZIP:', e);
    }
  };

  const handleUploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const targetPath = joinPaths('/src', file.name);
        try {
          const exists = await vfs.exists(targetPath);
          if (exists) {
            const shouldOverwrite = window.confirm(
              `"${file.name}" already exists in /src. Overwrite it?`
            );
            if (!shouldOverwrite) continue;
          }
          const text = await file.text();
          await vfs.writeFile(targetPath, text);
        } catch (err) {
          console.error(`Failed to upload ${file.name}:`, err);
          alert(`Failed to upload "${file.name}".`);
        }
      }
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleNodeContextMenu = (e: React.MouseEvent, node: TreeNode) => {
    e.preventDefault();
    e.stopPropagation();

    const items: ContextMenuItem[] = [];

    if (node.isDirectory) {
      items.push(
        {
          label: 'New File...',
          icon: <FilePlus className="w-3.5 h-3.5" />,
          action: () => handleStartCreate(node.path, 'file'),
        },
        {
          label: 'New Folder...',
          icon: <FolderPlus className="w-3.5 h-3.5" />,
          action: () => handleStartCreate(node.path, 'folder'),
        },
        { divider: true, label: '', action: () => {} }
      );
    }

    if (node.path !== '/') {
      items.push({
        label: 'Rename...',
        shortcut: 'Enter',
        action: () => handleStartRename(node.path),
      });

      if (!node.isDirectory) {
        items.push({
          label: 'Duplicate',
          action: () => handleDuplicate(node.path),
        });
      }

      items.push({
        label: 'Copy Path',
        action: () => navigator.clipboard.writeText(node.path),
      });

      items.push(
        { divider: true, label: '', action: () => {} },
        {
          label: 'Delete',
          danger: true,
          action: () => handleDelete(node.path, node.isDirectory),
        }
      );
    }

    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      items,
    });
  };

  const handleRootContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      items: [
        {
          label: 'New File',
          icon: <FilePlus className="w-3.5 h-3.5" />,
          action: () => handleStartCreate('/', 'file'),
        },
        {
          label: 'New Folder',
          icon: <FolderPlus className="w-3.5 h-3.5" />,
          action: () => handleStartCreate('/', 'folder'),
        },
        { divider: true, label: '', action: () => {} },
        {
          label: 'Collapse All',
          icon: <RefreshCw className="w-3.5 h-3.5" />,
          action: handleCollapseAll,
        },
        {
          label: 'Download ZIP',
          icon: <Download className="w-3.5 h-3.5" />,
          action: handleDownloadZip,
        },
      ],
    });
  };

  return (
    <div
      className={`h-full w-full flex flex-col bg-[var(--bg-surface)] border-r border-[var(--border-default)] select-none text-xs ${className}`}
      onContextMenu={handleRootContextMenu}
    >
      {/* Hidden File Input for Upload */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleUploadFiles}
        className="hidden"
      />

      {/* Explorer Header */}
      <div className="h-9 px-3 flex items-center justify-between border-b border-[var(--border-default)] bg-[var(--bg-surface-muted)] shrink-0">
        <div className="flex items-center gap-1.5 font-semibold text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">
          <FolderTree className="w-3.5 h-3.5 text-amber-500" />
          <span>Explorer</span>
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={() => handleStartCreate('/', 'file')}
            title="New File"
            className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <FilePlus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => handleStartCreate('/', 'folder')}
            title="New Folder"
            className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <FolderPlus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleCollapseAll}
            title="Collapse All"
            className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Upload Files"
            className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleDownloadZip}
            title="Download ZIP"
            className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* File Tree List */}
      <div className="flex-1 overflow-y-auto py-1">
        {/* Root Level Inline Creation */}
        {creatingUnderPath === '/' && (
          <div className="flex items-center gap-1.5 py-1 px-3 bg-[var(--bg-surface-hover)]">
            <span className="w-3.5" />
            <input
              autoFocus
              type="text"
              placeholder={
                creatingType === 'folder' ? 'folder-name' : 'filename.jsx'
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const val = e.currentTarget.value.trim();
                  if (val) handleCreateSubmit(val);
                  else handleCreateCancel();
                } else if (e.key === 'Escape') {
                  handleCreateCancel();
                }
              }}
              onBlur={(e) => {
                const val = e.currentTarget.value.trim();
                if (val) handleCreateSubmit(val);
                else handleCreateCancel();
              }}
              className="px-1 py-0.2 bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded text-xs text-[var(--text-primary)] outline-none w-full"
            />
          </div>
        )}

        {tree && tree.children && tree.children.length > 0 ? (
          tree.children.map((child) => (
            <FileTreeItem
              key={child.path}
              node={child}
              depth={0}
              activeFile={activeFile}
              dirtyFiles={dirtyFiles}
              expandedFolders={expandedFolders}
              onToggleFolder={handleToggleFolder}
              onSelectFile={onSelectFile}
              onContextMenu={handleNodeContextMenu}
              creatingUnderPath={creatingUnderPath}
              creatingType={creatingType}
              renamingPath={renamingPath}
              onCreateSubmit={handleCreateSubmit}
              onCreateCancel={handleCreateCancel}
              onRenameSubmit={handleRenameSubmit}
              onRenameCancel={handleRenameCancel}
            />
          ))
        ) : (
          <div className="p-4 text-center text-[var(--text-muted)] text-xs">
            No files in workspace
          </div>
        )}
      </div>

      {/* Context Menu Modal */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          items={contextMenu.items}
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  );
}
