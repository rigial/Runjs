import React, { useState, useEffect, useRef } from 'react';
import { TreeNode } from '../../fs/FileSystem';
import { FileIcon } from './FileIcon';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface FileTreeItemProps {
  node: TreeNode;
  depth: number;
  activeFile: string;
  dirtyFiles: Set<string>;
  expandedFolders: Set<string>;
  onToggleFolder: (path: string) => void;
  onSelectFile: (path: string) => void;
  onContextMenu: (e: React.MouseEvent, node: TreeNode) => void;
  creatingUnderPath: string | null;
  creatingType: 'file' | 'folder' | null;
  renamingPath: string | null;
  onCreateSubmit: (name: string) => void;
  onCreateCancel: () => void;
  onRenameSubmit: (oldPath: string, newName: string) => void;
  onRenameCancel: () => void;
}

export function FileTreeItem({
  node,
  depth,
  activeFile,
  dirtyFiles,
  expandedFolders,
  onToggleFolder,
  onSelectFile,
  onContextMenu,
  creatingUnderPath,
  creatingType,
  renamingPath,
  onCreateSubmit,
  onCreateCancel,
  onRenameSubmit,
  onRenameCancel,
}: FileTreeItemProps) {
  const isExpanded = expandedFolders.has(node.path);
  const isActive = activeFile === node.path;
  const isDirty = dirtyFiles.has(node.path);
  const isRenaming = renamingPath === node.path;
  const isCreatingHere = creatingUnderPath === node.path;

  const [renameValue, setRenameValue] = useState(node.name);
  const [createValue, setCreateValue] = useState('');
  const renameInputRef = useRef<HTMLInputElement>(null);
  const createInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isRenaming) {
      setRenameValue(node.name);
      setTimeout(() => renameInputRef.current?.select(), 50);
    }
  }, [isRenaming, node.name]);

  useEffect(() => {
    if (isCreatingHere) {
      setCreateValue('');
      setTimeout(() => createInputRef.current?.focus(), 50);
    }
  }, [isCreatingHere]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (node.isDirectory) {
      onToggleFolder(node.path);
    } else {
      onSelectFile(node.path);
    }
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (renameValue.trim() && renameValue.trim() !== node.name) {
        onRenameSubmit(node.path, renameValue.trim());
      } else {
        onRenameCancel();
      }
    } else if (e.key === 'Escape') {
      onRenameCancel();
    }
  };

  const handleCreateKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (createValue.trim()) {
        onCreateSubmit(createValue.trim());
      } else {
        onCreateCancel();
      }
    } else if (e.key === 'Escape') {
      onCreateCancel();
    }
  };

  const paddingLeft = `${depth * 12 + 8}px`;

  return (
    <div className="select-none text-xs">
      {/* Node Row */}
      <div
        style={{ paddingLeft }}
        onClick={handleClick}
        onContextMenu={(e) => onContextMenu(e, node)}
        className={`group flex items-center justify-between pr-2 py-1 cursor-pointer transition-colors ${
          isActive
            ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] font-semibold shadow-2xs'
            : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]'
        }`}
      >
        <div className="flex items-center gap-1.5 min-w-0 flex-1">
          {node.isDirectory ? (
            <span className="w-3.5 h-3.5 flex items-center justify-center text-[var(--text-muted)]">
              {isExpanded ? (
                <ChevronDown className="w-3.5 h-3.5" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5" />
              )}
            </span>
          ) : (
            <span className="w-3.5" />
          )}

          <FileIcon
            path={node.path}
            isDirectory={node.isDirectory}
            isOpen={isExpanded}
          />

          {isRenaming ? (
            <input
              ref={renameInputRef}
              type="text"
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
              onKeyDown={handleRenameKeyDown}
              onBlur={() => {
                if (renameValue.trim() && renameValue.trim() !== node.name) {
                  onRenameSubmit(node.path, renameValue.trim());
                } else {
                  onRenameCancel();
                }
              }}
              onClick={(e) => e.stopPropagation()}
              className="px-1 py-0.2 bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded text-xs text-[var(--text-primary)] outline-none w-full"
            />
          ) : (
            <span className="truncate">{node.name}</span>
          )}
        </div>

        {/* Dirty unsaved state indicator */}
        {isDirty && !node.isDirectory && (
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 ml-1" />
        )}
      </div>

      {/* Inline Create Input when creating directly inside this directory */}
      {node.isDirectory && isExpanded && isCreatingHere && (
        <div
          style={{ paddingLeft: `${(depth + 1) * 12 + 8}px` }}
          className="flex items-center gap-1.5 py-1 pr-2 bg-[var(--bg-surface-hover)]"
        >
          <span className="w-3.5" />
          <FileIcon
            path={createValue || 'new-file'}
            isDirectory={creatingType === 'folder'}
          />
          <input
            ref={createInputRef}
            type="text"
            value={createValue}
            placeholder={
              creatingType === 'folder' ? 'folder-name' : 'filename.jsx'
            }
            onChange={(e) => setCreateValue(e.target.value)}
            onKeyDown={handleCreateKeyDown}
            onBlur={() => {
              if (createValue.trim()) {
                onCreateSubmit(createValue.trim());
              } else {
                onCreateCancel();
              }
            }}
            onClick={(e) => e.stopPropagation()}
            className="px-1 py-0.2 bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded text-xs text-[var(--text-primary)] outline-none w-full"
          />
        </div>
      )}

      {/* Nested Children */}
      {node.isDirectory && isExpanded && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTreeItem
              key={child.path}
              node={child}
              depth={depth + 1}
              activeFile={activeFile}
              dirtyFiles={dirtyFiles}
              expandedFolders={expandedFolders}
              onToggleFolder={onToggleFolder}
              onSelectFile={onSelectFile}
              onContextMenu={onContextMenu}
              creatingUnderPath={creatingUnderPath}
              creatingType={creatingType}
              renamingPath={renamingPath}
              onCreateSubmit={onCreateSubmit}
              onCreateCancel={onCreateCancel}
              onRenameSubmit={onRenameSubmit}
              onRenameCancel={onRenameCancel}
            />
          ))}
        </div>
      )}
    </div>
  );
}
