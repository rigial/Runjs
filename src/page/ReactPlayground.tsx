import { memo, useMemo } from 'react';
import {
  SandpackProvider,
  SandpackPreview,
  SandpackConsole,
} from '@codesandbox/sandpack-react';
import SandpackFileExplorer from '@rainetian/sandpack-file-explorer';
import Split from 'react-split';
import ReactEditor from '../components/ReactEditor';
import { fileIcon } from '../utils/folderIcons';

function ReactPlayground() {
  const filesIcon = useMemo(
    () => (fileSuffix: string) => fileIcon(fileSuffix),
    []
  );

  return (
    <main className="h-screen w-full bg-black">
      <SandpackProvider
        options={{
          recompileMode: 'delayed',
          recompileDelay: 500,
        }}
        template="react"
        theme="dark"
        style={{ height: '100%' }}
      >
        <Split
          className="flex h-full"
          sizes={[15, 45, 40]}
          minSize={150}
          gutterSize={6}
        >
          <div className="h-full overflow-auto">
            <SandpackFileExplorer
              fileIcon={filesIcon}
              style={{ height: '100%' }}
            />
          </div>

          <div className="h-full overflow-hidden">
            <ReactEditor />
          </div>

          <Split
            className="flex flex-col h-full"
            direction="vertical"
            sizes={[70, 30]}
            minSize={100}
            gutterSize={6}
          >
            <div className="h-full overflow-auto">
              <SandpackPreview showNavigator style={{ height: '100%' }} />
            </div>
            <div className="h-full overflow-auto">
              <SandpackConsole
                resetOnPreviewRestart
                style={{ height: '100%' }}
              />
            </div>
          </Split>
        </Split>
      </SandpackProvider>
    </main>
  );
}

export default memo(ReactPlayground);
