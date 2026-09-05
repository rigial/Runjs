export const DRAFT_STORAGE_PREFIX = 'runjs_react_workspace_draft_';

export interface WorkspaceDraft {
  projectId: string;
  projectName: string;
  projectTag: string;
  templateId: string;
  activeFile: string;
  openFiles: string[];
  dirtyFiles: string[];
  fileContents: Record<string, string>;
  vfsFiles: Record<string, string>;
  updatedAt: number;
}

export function createWorkspaceDraft(params: {
  projectId: string;
  projectName: string;
  projectTag: string;
  templateId: string;
  activeFile: string;
  openFiles: string[];
  dirtyFiles: Set<string> | string[];
  fileContents: Record<string, string>;
  rawVfsFiles: Record<string, string>;
}): WorkspaceDraft {
  const vfsFiles = Object.fromEntries(
    Object.entries(params.rawVfsFiles).filter(
      ([p]) => !p.startsWith('/node_modules/')
    )
  );
  const dirtyContents = Object.fromEntries(
    Object.entries(params.fileContents).filter(
      ([p, c]) => !p.startsWith('/node_modules/') && vfsFiles[p] !== c
    )
  );

  return {
    projectId: params.projectId,
    projectName: params.projectName,
    projectTag: params.projectTag,
    templateId: params.templateId,
    activeFile: params.activeFile,
    openFiles: params.openFiles,
    dirtyFiles: Array.isArray(params.dirtyFiles)
      ? params.dirtyFiles
      : Array.from(params.dirtyFiles),
    fileContents: dirtyContents,
    vfsFiles,
    updatedAt: Date.now(),
  };
}

export function restoreDraftMergedFiles(
  draft: WorkspaceDraft
): Record<string, string> {
  return {
    ...draft.vfsFiles,
    ...(draft.fileContents || {}),
  };
}
