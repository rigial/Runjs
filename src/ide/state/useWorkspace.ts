import { useContext } from 'react';
import { WorkspaceContext, WorkspaceContextType } from './workspaceTypes';

export function useWorkspace(): WorkspaceContextType {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return ctx;
}
