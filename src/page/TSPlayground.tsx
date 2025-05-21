import { transform } from 'esbuild-wasm';
import { Fragment, memo, useRef } from 'react';
import Split from 'react-split';
import LunaConsole from 'luna-console';
import useLocalStorageState from '../hook/useLocalStorageState';
import useAdjustFontSize from '../hook/useAdjustFontSize';
import useComplieCode from '../hook/useComplieCode';
import useDebounceLocalStorageState from '../hook/useDebounceLocalStorageState';
import { addInfiniteLoopProtection } from '../utils/addInfiniteLoopProtection';
import { Link } from 'react-router-dom';
import { ModalRef } from '../utils/interface';
import HelpModal from '../components/HelpModal';
import useWarnOnClose from '../hook/useWarnOnClose ';
import useFormatDocument from '../hook/useFormatDocument';
import CodeEditor from '../components/CodeEditor';
import Terminal from '../components/Terminal';

function TSPlayground() {
  const [code, setCode] = useDebounceLocalStorageState(
    'tscode',
    '// Write your code here...',
    1000
  );
  const [currentFontSize, setFontSize] = useLocalStorageState('fontSize', '14');
  const consoleRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<ModalRef>(null);
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const editorRef = useRef<any>(null);

  function handleFontSize(operation: 'increaseFontSize' | 'decreaseFontSize') {
    let fontSize = Number(currentFontSize);
    if (operation == 'increaseFontSize') {
      fontSize += 1;
    } else {
      fontSize -= 1;
    }
    setFontSize(fontSize);
  }

  function clearTerminal() {
    if (consoleRef.current) {
      consoleRef.current.innerHTML = '';
    }
  }

  async function handleRunClick() {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument')?.run();
    }
    if (consoleRef.current) {
      consoleRef.current.innerHTML = '';

      const lunaConsole = new LunaConsole(consoleRef.current, {
        theme: 'dark',
      });

      type ConsoleMethods = 'log' | 'info' | 'warn' | 'error';
      const customConsole: Record<
        ConsoleMethods,
        (...args: unknown[]) => void
      > = {
        log: (...args: unknown[]) => lunaConsole.log(...args),
        info: (...args: unknown[]) => lunaConsole.info(...args),
        warn: (...args: unknown[]) => lunaConsole.warn(...args),
        error: (...args: unknown[]) => lunaConsole.error(...args),
      };

      try {
        const parseJavascriptCode = await transform(code ?? '', {
          loader: 'ts',
        });
        let final = parseJavascriptCode.code;
        final = addInfiniteLoopProtection(final);
        const executeCode = new Function('console', final);
        executeCode(customConsole);
        console.clear();
      } catch (error) {
        customConsole.error(error);
      }
    }
  }

  useAdjustFontSize(handleFontSize);
  useComplieCode(handleRunClick);
  useWarnOnClose();
  useFormatDocument(() => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument')?.run();
    }
  });

  return (
    <Fragment>
      <main className="bg-CustomDarkGrey">
        <nav className="h-7vh w-full flex items-center justify-between px-3">
          <Link to={'/dashboard'}>
            <img
              src={'/runjs.in.webp'}
              className="w-8 h-8 rounded"
              alt="RunJs Logo"
            />
          </Link>
          <button
            onClick={handleRunClick}
            className={`bg-TSBlue text-black font-semibold py-1 px-2 rounded flex flex-row gap-1 items-center hover:cursor-pointer`}
          >
            <svg
              stroke="currentColor"
              fill="#000000"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="shrink-0"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            </svg>
            Run
          </button>
          <button
            onClick={() => dialogRef?.current?.open()}
            className={`text-WindowBorder hover:cursor-pointer font-medium hover:text-white`}
          >
            Help
          </button>
        </nav>
        <section className="h-93vh w-full">
          <Split className="split h-full w-full" minSize={0}>
            <section className="h-full w-full flex flex-col">
              <div className="flex overflow-x-auto border-[1px] border-WindowBorder">
                <div
                  className={`flex items-center gap-2 bg-cblack py-2 px-3 border-r-[1px] border-r-WindowBorder hover:cursor-pointer`}
                >
                  <img
                    src={'/Typescript.webp'}
                    className="w-5 h-5 rounded-sm"
                    alt="Typescript Logo"
                  />
                  <span className="text-white text-sm">script.ts</span>
                </div>
              </div>
              <CodeEditor
                language={'typescript'}
                code={code}
                editorRef={editorRef}
                currentFontSize={Number(currentFontSize)}
                onChange={(value) => setCode(value ?? '')}
              />
            </section>
            <Terminal clearTerminal={clearTerminal} consoleRef={consoleRef} />
          </Split>
        </section>
      </main>
      <HelpModal ref={dialogRef} />
    </Fragment>
  );
}

export default memo(TSPlayground);
