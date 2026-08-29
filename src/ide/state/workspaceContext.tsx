import React, { useState, useEffect, useCallback, useRef } from 'react';
import { VirtualFileSystem } from '../fs/VirtualFileSystem';
import { TEMPLATES, VITE_REACT_TEMPLATE } from '../templates/defaultTemplates';
import { UserCodeBase } from '../../utils/interface';
import { getCode, updateCode, addCode } from '../../db/operations';
import { normalizePath } from '../fs/pathUtils';
import useLocalStorageState from '../../hook/useLocalStorageState';
import { WorkspaceContext } from './workspaceTypes';
import { getAllPackageVirtualFiles } from '../languages/typescript/packageDefinitions';

interface WorkspaceProviderProps {
  initialProjectId?: string;
  children: React.ReactNode;
}

export function WorkspaceProvider({
  initialProjectId,
  children,
}: WorkspaceProviderProps) {
  const [projectId, setProjectId] = useState(
    initialProjectId || 'default-react-workspace'
  );
  const [projectName, setProjectName] = useState('React App');
  const [projectTag, setProjectTag] = useState('react');
  const [templateId, setTemplateId] = useState('vite-react');
  const [activeFile, setActiveFileState] = useState('/src/App.jsx');
  const [openFiles, setOpenFiles] = useState<string[]>([
    '/src/App.jsx',
    '/src/App.css',
    '/package.json',
  ]);
  const [dirtyFiles, setDirtyFiles] = useState<Set<string>>(new Set());
  const [fileContents, setFileContents] = useState<Record<string, string>>({});
  const [sandpackFiles, setSandpackFiles] = useState<Record<string, string>>(
    {}
  );
  const [isSaving, setIsSaving] = useState(false);

  // Layout states
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);

  // Font size sync
  const [currentFontSize, setFontSizeState] = useLocalStorageState(
    'fontSize',
    '14'
  );
  const fontSize = Number(currentFontSize) || 14;

  const vfsRef = useRef<VirtualFileSystem | null>(null);
  if (!vfsRef.current) {
    vfsRef.current = new VirtualFileSystem(VITE_REACT_TEMPLATE.files);
  }
  const vfs = vfsRef.current;

  // Sync VFS to sandpackFiles for runtime bundler
  const syncSandpackFiles = useCallback(async () => {
    const json = await vfs.toJSON();
    // Sandpack accepts paths without or with leading slash, but normalize for consistency
    setSandpackFiles({ ...json });
  }, [vfs]);

  // Load project from IndexedDB or template
  useEffect(() => {
    async function loadWorkspace() {
      if (initialProjectId) {
        try {
          const dbCode = await getCode(initialProjectId);
          if (dbCode) {
            setProjectId(dbCode.id);
            setProjectName(dbCode.fileName || 'React App');
            setProjectTag(dbCode.tag || 'react');

            if (dbCode.files && Object.keys(dbCode.files).length > 0) {
              await vfs.fromJSON(dbCode.files);
              setOpenFiles(
                dbCode.openFiles || [
                  '/src/App.jsx',
                  '/src/App.css',
                  '/package.json',
                ]
              );
              setActiveFileState(dbCode.activeFile || '/src/App.jsx');
              setTemplateId(
                dbCode.files['/src/App.tsx'] ? 'vite-react-ts' : 'vite-react'
              );
            } else if (dbCode.code) {
              // Backward compatibility for single-file code
              const template = { ...VITE_REACT_TEMPLATE.files };
              template['/src/App.jsx'] = dbCode.code;
              await vfs.fromJSON(template);
              setTemplateId('vite-react');
            }
            await syncSandpackFiles();
            return;
          }
        } catch (e) {
          console.error('Failed to load project from DB:', e);
        }
      }

      // Default template initialization
      await vfs.fromJSON(VITE_REACT_TEMPLATE.files);
      setOpenFiles(VITE_REACT_TEMPLATE.openFiles);
      setActiveFileState(VITE_REACT_TEMPLATE.activeFile);
      setTemplateId('vite-react');
      await syncSandpackFiles();
    }

    loadWorkspace();
  }, [initialProjectId, vfs, syncSandpackFiles]);

  // Read current active file content whenever active file or VFS updates
  useEffect(() => {
    async function loadActiveContent() {
      if (!activeFile || dirtyFiles.has(activeFile)) return;
      if (fileContents[activeFile] !== undefined) return;
      if (activeFile.startsWith('/node_modules/')) {
        const pkgFiles = getAllPackageVirtualFiles();
        if (pkgFiles[activeFile]) {
          setFileContents((prev) => ({
            ...prev,
            [activeFile]: pkgFiles[activeFile],
          }));
          return;
        }
      }
      if (await vfs.exists(activeFile)) {
        const content = await vfs.readFile(activeFile);
        setFileContents((prev) =>
          prev[activeFile] === content
            ? prev
            : { ...prev, [activeFile]: content }
        );
      }
    }
    loadActiveContent();
  }, [activeFile, vfs, dirtyFiles, fileContents]);

  // Subscribe to VFS modifications
  useEffect(() => {
    const unsub = vfs.on('*', async (event) => {
      await syncSandpackFiles();
      if (event.path === activeFile && event.content !== undefined) {
        setFileContents((prev) => ({ ...prev, [event.path]: event.content! }));
      }
    });
    return () => unsub();
  }, [vfs, activeFile, syncSandpackFiles]);

  const setActiveFile = useCallback((path: string) => {
    const norm = normalizePath(path);
    setActiveFileState(norm);
    setOpenFiles((prev) => (prev.includes(norm) ? prev : [...prev, norm]));
  }, []);

  const openFile = useCallback(
    (path: string) => {
      setActiveFile(path);
    },
    [setActiveFile]
  );

  const closeFile = useCallback(
    (path: string) => {
      const norm = normalizePath(path);
      let nextActive: string | null = null;

      setOpenFiles((prev) => {
        const next = prev.filter((p) => p !== norm);
        if (activeFile === norm) {
          const idx = prev.indexOf(norm);
          nextActive = next[idx] || next[idx - 1] || '';
        }
        return next;
      });

      if (nextActive !== null) {
        setActiveFileState(nextActive);
      }

      setDirtyFiles((prev) => {
        const next = new Set(prev);
        next.delete(norm);
        return next;
      });
    },
    [activeFile]
  );

  const closeOtherFiles = useCallback((keepPath: string) => {
    const norm = normalizePath(keepPath);
    setOpenFiles([norm]);
    setActiveFileState(norm);
    setDirtyFiles((prev) => {
      const next = new Set<string>();
      if (prev.has(norm)) next.add(norm);
      return next;
    });
  }, []);

  const closeAllFiles = useCallback(() => {
    setOpenFiles([]);
    setActiveFileState('');
    setDirtyFiles(new Set());
  }, []);

  const updateFileContent = useCallback((path: string, content: string) => {
    const norm = normalizePath(path);
    if (norm.startsWith('/node_modules/')) return;
    setFileContents((prev) => ({ ...prev, [norm]: content }));
    setDirtyFiles((prev) => new Set(prev).add(norm));
  }, []);

  const saveFile = useCallback(
    async (path: string) => {
      const norm = normalizePath(path);
      if (norm.startsWith('/node_modules/')) return;
      const content = fileContents[norm];
      if (content !== undefined) {
        await vfs.writeFile(norm, content);
        setDirtyFiles((prev) => {
          const next = new Set(prev);
          next.delete(norm);
          return next;
        });
        await syncSandpackFiles();
      }
    },
    [fileContents, vfs, syncSandpackFiles]
  );

  const saveProject = useCallback(async () => {
    setIsSaving(true);
    try {
      // Save all dirty files into VFS
      for (const dirtyPath of dirtyFiles) {
        if (dirtyPath.startsWith('/node_modules/')) continue;
        const content = fileContents[dirtyPath];
        if (content !== undefined) {
          await vfs.writeFile(dirtyPath, content);
        }
      }
      setDirtyFiles(new Set());

      const allFiles = await vfs.toJSON();
      const mainCode =
        allFiles['/src/App.jsx'] ||
        allFiles['/src/App.tsx'] ||
        allFiles['/src/main.jsx'] ||
        '';

      const existing = await getCode(projectId);

      const payload: UserCodeBase = {
        id: projectId,
        fileName: projectName,
        tag: projectTag,
        language: 'react',
        code: mainCode,
        htmlCode: allFiles['/index.html'] || '',
        cssCode: allFiles['/src/App.css'] || allFiles['/src/index.css'] || '',
        jsCode: mainCode,
        createdAt: existing?.createdAt || new Date(),
        lastModifiedAt: new Date(),
        isDelete: false,
        star: existing?.star ?? 0,
        dbUpload: false,
        files: allFiles,
        activeFile,
        openFiles,
      };

      if (existing) {
        await updateCode(projectId, payload);
      } else {
        await addCode(payload);
      }
    } catch (e) {
      console.error('Failed to save project to IndexedDB:', e);
    } finally {
      setIsSaving(false);
    }
  }, [
    dirtyFiles,
    fileContents,
    vfs,
    projectId,
    projectName,
    projectTag,
    activeFile,
    openFiles,
  ]);

  const switchTemplate = useCallback(
    async (newTemplateId: string) => {
      const template =
        TEMPLATES.find((t) => t.id === newTemplateId) || VITE_REACT_TEMPLATE;
      if (
        window.confirm(
          `Switch to template "${template.name}"? Current unsaved changes will be replaced.`
        )
      ) {
        await vfs.fromJSON(template.files);
        setOpenFiles(template.openFiles);
        setActiveFileState(template.activeFile);
        setTemplateId(template.id);
        setDirtyFiles(new Set());
        await syncSandpackFiles();
      }
    },
    [vfs, syncSandpackFiles]
  );

  const handleFileDeleted = useCallback(
    (path: string) => {
      const norm = normalizePath(path);
      closeFile(norm);
    },
    [closeFile]
  );

  const handleFileRenamed = useCallback(
    (oldPath: string, newPath: string) => {
      const normOld = normalizePath(oldPath);
      const normNew = normalizePath(newPath);

      setOpenFiles((prev) => prev.map((p) => (p === normOld ? normNew : p)));
      if (activeFile === normOld) {
        setActiveFileState(normNew);
      }
      setDirtyFiles((prev) => {
        const next = new Set(prev);
        if (next.has(normOld)) {
          next.delete(normOld);
          next.add(normNew);
        }
        return next;
      });
    },
    [activeFile]
  );

  const setFontSize = (size: number) => {
    setFontSizeState(size.toString());
  };

  const toggleExplorer = () => setIsExplorerOpen((prev) => !prev);
  const toggleTerminal = () => setIsTerminalOpen((prev) => !prev);
  const toggleConsole = () => setIsConsoleOpen((prev) => !prev);

  return (
    <WorkspaceContext.Provider
      value={{
        vfs,
        projectId,
        projectName,
        projectTag,
        templateId,
        activeFile,
        openFiles,
        dirtyFiles,
        fileContents,
        isSaving,
        fontSize,
        isExplorerOpen,
        isTerminalOpen,
        isConsoleOpen,
        sandpackFiles,
        setActiveFile,
        openFile,
        closeFile,
        closeOtherFiles,
        closeAllFiles,
        updateFileContent,
        saveFile,
        saveProject,
        setProjectName,
        setProjectTag,
        switchTemplate,
        toggleExplorer,
        toggleTerminal,
        toggleConsole,
        setFontSize,
        handleFileDeleted,
        handleFileRenamed,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}
