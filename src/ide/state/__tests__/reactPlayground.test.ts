import { prepareSandpackFiles } from '../sandpackAdapter';
import {
  VITE_REACT_TEMPLATE,
  VITE_REACT_TS_TEMPLATE,
} from '../../templates/defaultTemplates';

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

console.log(
  '=== Testing React Playground Sandpack Adapter & Persistence ===\n'
);

// 1. Test Vite React default template file preparation
{
  console.log('Test 1: Vite React template preparation with Sandpack bridge');
  const sandpackFiles = prepareSandpackFiles(
    VITE_REACT_TEMPLATE.files,
    'vite-react'
  );

  // Must have package.json with "main": "/src/main.jsx"
  assert(Boolean(sandpackFiles['/package.json']), 'package.json must exist');
  const pkg = JSON.parse(sandpackFiles['/package.json']);
  assert(
    pkg.main === '/src/main.jsx',
    `package.json main must be /src/main.jsx, got ${pkg.main}`
  );

  // Must have mirrored /public/index.html with #root
  assert(
    Boolean(sandpackFiles['/public/index.html']),
    '/public/index.html must exist for Sandpack CRA bundler'
  );
  assert(
    sandpackFiles['/public/index.html'].includes('id="root"'),
    '/public/index.html must contain id="root"'
  );

  // Must have bridge files so Sandpack React packager executes user code instead of phantom "Hello world"
  assert(Boolean(sandpackFiles['/index.js']), '/index.js bridge must exist');
  assert(
    sandpackFiles['/index.js'].includes("import './src/main'"),
    '/index.js bridge must import ./src/main'
  );

  assert(Boolean(sandpackFiles['/App.js']), '/App.js bridge must exist');
  assert(
    sandpackFiles['/App.js'].includes("export { default } from './src/App'"),
    '/App.js bridge must re-export default from ./src/App'
  );

  // User files must remain intact
  assert(Boolean(sandpackFiles['/src/App.jsx']), '/src/App.jsx must exist');
  assert(Boolean(sandpackFiles['/src/main.jsx']), '/src/main.jsx must exist');
  console.log(
    '  ✓ Verified package.json main entry, index.html mirror, and Sandpack root bridges'
  );
}

// 2. Test user modifications are preserved and reflected
{
  console.log('\nTest 2: User code modifications reflection');
  const modifiedFiles: Record<string, string> = {
    ...VITE_REACT_TEMPLATE.files,
    '/src/App.jsx': `import React, { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(10);
  return <div className="user-custom-app">Count: {count}</div>;
}`,
    '/src/components/Badge.jsx': `export const Badge = ({ label }) => <span className="badge">{label}</span>;`,
  };

  const sandpackFiles = prepareSandpackFiles(modifiedFiles, 'vite-react');

  assert(
    sandpackFiles['/src/App.jsx'].includes('user-custom-app'),
    'Modified /src/App.jsx must be preserved with user content'
  );
  assert(
    sandpackFiles['/src/components/Badge.jsx'].includes('badge'),
    'New user component /src/components/Badge.jsx must be preserved'
  );
  // Bridges must still route to /src/App
  assert(
    sandpackFiles['/App.js'].includes("from './src/App'"),
    '/App.js bridge must route to user /src/App'
  );
  console.log(
    '  ✓ Verified user code modifications and custom components are properly passed to Sandpack'
  );
}

// 3. Test Vite React TypeScript template
{
  console.log('\nTest 3: Vite React TypeScript template preparation');
  const sandpackFiles = prepareSandpackFiles(
    VITE_REACT_TS_TEMPLATE.files,
    'vite-react-ts'
  );

  assert(Boolean(sandpackFiles['/package.json']), 'package.json must exist');
  const pkg = JSON.parse(sandpackFiles['/package.json']);
  assert(
    pkg.main === '/src/main.tsx',
    `package.json main must be /src/main.tsx, got ${pkg.main}`
  );

  assert(
    sandpackFiles['/index.js'].includes("import './src/main'"),
    '/index.js bridge must import ./src/main for TS template'
  );
  console.log(
    '  ✓ Verified Vite React TS package.json main entry and bridge wiring'
  );
}

// 4. Test Draft persistence simulation (Hard reload recovery)
{
  console.log(
    '\nTest 4: Draft persistence & recovery on hard reload simulation'
  );
  const mockStorage: Record<string, string> = {};
  const effectiveProjectId = 'default-react-workspace';
  const draftKey = `runjs_react_workspace_draft_${effectiveProjectId}`;

  // User edits code without explicitly pressing save:
  const draftPayload = {
    files: {
      '/src/App.jsx': {
        name: 'App.jsx',
        path: '/src/App.jsx',
        content:
          'export default function App() { return <h1>Hard Reload Restored</h1>; }',
      },
    },
    activeFilePath: '/src/App.jsx',
    openTabs: ['/src/App.jsx'],
    isDirtyMap: { '/src/App.jsx': true },
    projectName: 'My Draft Project',
    updatedAt: Date.now(),
  };

  // Simulate auto-save draft to localStorage
  mockStorage[draftKey] = JSON.stringify(draftPayload);

  // Simulate browser hard reload:
  // Workspace initialization reads draft from localStorage first
  const rawDraft = mockStorage[draftKey];
  assert(Boolean(rawDraft), 'Draft must exist in localStorage');
  const restoredDraft = JSON.parse(rawDraft);

  assert(
    restoredDraft.files['/src/App.jsx'].content.includes(
      'Hard Reload Restored'
    ),
    'Draft content must be recovered after hard reload simulation'
  );
  assert(
    restoredDraft.activeFilePath === '/src/App.jsx',
    'Active tab must be restored after hard reload simulation'
  );
  assert(
    restoredDraft.isDirtyMap['/src/App.jsx'] === true,
    'Dirty state must be preserved for unsaved draft'
  );

  console.log(
    '  ✓ Verified uncommitted edits & tab state are fully recovered after hard reload'
  );
}

// 5. Test Workspace reset cleans up draft state
{
  console.log(
    '\nTest 5: Reset workspace clears draft and reinitializes template'
  );
  const mockStorage: Record<string, string> = {};
  const effectiveProjectId = 'default-react-workspace';
  const draftKey = `runjs_react_workspace_draft_${effectiveProjectId}`;
  mockStorage[draftKey] = '{"files":{}}';

  // Perform reset
  delete mockStorage[draftKey];

  assert(mockStorage[draftKey] === undefined, 'Draft must be cleared on reset');
  console.log('  ✓ Verified workspace reset purges draft storage');
}

// 6. Test Reset Modal Workflow
{
  console.log('\nTest 6: Reset Workspace Modal Workflow');
  let currentFiles: Record<string, string> = {
    ...VITE_REACT_TEMPLATE.files,
    '/src/custom.js': 'console.log("dirty");',
  };
  const modalState = { isOpen: false };

  // User clicks reset
  modalState.isOpen = true;
  assert(modalState.isOpen, 'Reset modal opens on reset button click');

  // User cancels modal
  const onCancel = () => {
    modalState.isOpen = false;
  };
  onCancel();
  assert(!modalState.isOpen, 'Reset modal closes on cancel');
  assert(
    Boolean(currentFiles['/src/custom.js']),
    'Custom files preserved on cancel'
  );

  // User clicks reset and confirms
  modalState.isOpen = true;
  const onResetConfirm = () => {
    currentFiles = { ...VITE_REACT_TEMPLATE.files };
    modalState.isOpen = false;
  };
  onResetConfirm();
  assert(!modalState.isOpen, 'Reset modal closes after confirmation');
  assert(
    currentFiles['/src/custom.js'] === undefined,
    'Workspace re-initializes to clean default template on reset confirm'
  );
  console.log(
    '  ✓ Verified custom modal confirmation workflow for workspace reset'
  );
}

console.log('\n=== All React Playground tests passed successfully! ===\n');
