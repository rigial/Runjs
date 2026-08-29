import {
  FormEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IModalProps, UserCodeBase } from '../utils/interface';
import { addCode, updateCode } from '../db/operations';
import { useNavigate } from 'react-router';
import { X, Sparkles, Tag as TagIcon, Check } from 'lucide-react';

import { VITE_REACT_TEMPLATE } from '../ide/templates/defaultTemplates';

interface LanguageOption {
  id: 'js' | 'ts' | 'react';
  label: string;
  description: string;
  textColorClass: string;
  activeBorderClass: string;
  activeBgClass: string;
  activeRingClass: string;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    id: 'js',
    label: 'JavaScript',
    description: 'ES6+, Web APIs, standard runtime',
    textColorClass: 'text-amber-500',
    activeBorderClass: 'border-amber-500',
    activeBgClass: 'bg-amber-500/10',
    activeRingClass: 'ring-amber-500',
  },
  {
    id: 'ts',
    label: 'TypeScript',
    description: 'Types, esbuild compilation',
    textColorClass: 'text-blue-500',
    activeBorderClass: 'border-blue-500',
    activeBgClass: 'bg-blue-500/10',
    activeRingClass: 'ring-blue-500',
  },
  {
    id: 'react',
    label: 'React + Vite',
    description: 'Live HMR, Multi-file, NPM terminal',
    textColorClass: 'text-cyan-500',
    activeBorderClass: 'border-cyan-500',
    activeBgClass: 'bg-cyan-500/10',
    activeRingClass: 'ring-cyan-500',
  },
];

interface LanguageCardProps {
  option: LanguageOption;
  isSelected: boolean;
  onSelect: (id: 'js' | 'ts' | 'react') => void;
}

function LanguageCard({ option, isSelected, onSelect }: LanguageCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all duration-150 relative ${
        isSelected
          ? `${option.activeBorderClass} ${option.activeBgClass} text-[var(--text-primary)] shadow-xs ring-1 ${option.activeRingClass}`
          : 'border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)]'
      }`}
    >
      <div className="flex items-center justify-between w-full mb-1">
        <span className={`font-semibold text-xs ${option.textColorClass}`}>
          {option.label}
        </span>
        {isSelected && (
          <Check className={`w-3.5 h-3.5 ${option.textColorClass}`} />
        )}
      </div>
      <span className="text-[11px] text-[var(--text-muted)]">
        {option.description}
      </span>
    </button>
  );
}

const CreatePlayground = ({
  tagSuggestions,
  edit,
  renameData,
  dbcall,
  ref,
}: IModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const [tagName, setTag] = useState('');
  const [fileName, setFileName] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [lang, setLang] = useState<'js' | 'ts' | 'react' | 'html'>('js');

  useEffect(() => {
    setTag(renameData?.tag ?? '');
    setFileName(renameData?.fileName ?? '');
    setLang(renameData?.language ?? 'js');
    setFilteredSuggestions([]);
  }, [renameData]);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  async function updateProjectInfo() {
    if (renameData) {
      try {
        const updatePayload: UserCodeBase = {
          ...renameData,
          fileName: fileName.trim() || 'untitled',
          tag: tagName.trim(),
        };
        await updateCode(renameData.id, updatePayload);
        if (dbcall) await dbcall();
        dialogRef.current?.close();
      } catch (error) {
        console.log('Error', error);
      }
    }
  }

  async function createNewPlayGroundFunction(e: FormEvent) {
    e.preventDefault();
    if (edit) {
      await updateProjectInfo();
      return;
    }
    const id = uuidv4();
    const cleanFileName =
      fileName.trim() ||
      (lang === 'ts' ? 'main' : lang === 'react' ? 'react-app' : 'script');

    let newCode: UserCodeBase;

    if (lang === 'react') {
      newCode = {
        id: id,
        code: VITE_REACT_TEMPLATE.files['/src/App.jsx'],
        htmlCode: VITE_REACT_TEMPLATE.files['/index.html'],
        cssCode: VITE_REACT_TEMPLATE.files['/src/App.css'],
        jsCode: VITE_REACT_TEMPLATE.files['/src/App.jsx'],
        createdAt: new Date(),
        fileName: cleanFileName,
        isDelete: false,
        language: 'react',
        lastModifiedAt: new Date(),
        star: 0,
        tag: tagName.trim() || 'react',
        dbUpload: false,
        files: VITE_REACT_TEMPLATE.files,
        activeFile: VITE_REACT_TEMPLATE.activeFile,
        openFiles: VITE_REACT_TEMPLATE.openFiles,
      };
    } else {
      newCode = {
        id: id,
        code:
          lang === 'ts'
            ? `// RunJS TypeScript Playground\ninterface Greeting {\n  message: string;\n  date: Date;\n}\n\nconst greet: Greeting = {\n  message: "Hello from RunJS TypeScript!",\n  date: new Date()\n};\n\nconsole.log(greet.message);\nconsole.log("Current time:", greet.date.toLocaleTimeString());\n`
            : `// RunJS JavaScript Playground\nconsole.log("Hello from RunJS!");\n\nconst numbers = [1, 2, 3, 4, 5];\nconst squared = numbers.map(n => n ** 2);\nconsole.log("Squared numbers:", squared);\n`,
        htmlCode: '',
        cssCode: '',
        jsCode: '',
        createdAt: new Date(),
        fileName: cleanFileName,
        isDelete: false,
        language: lang,
        lastModifiedAt: new Date(),
        star: 0,
        tag: tagName.trim(),
        dbUpload: false,
      };
    }

    try {
      await addCode(newCode);
      dialogRef.current?.close();
      return navigate(`/${lang}/${id}`);
    } catch (error) {
      console.log('Error', error);
    }
  }

  function handleInputChange(term: string) {
    if (term) {
      const filtered = tagSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setTag(suggestion);
    setFilteredSuggestions([]);
  };

  const handleClose = () => {
    setTag(renameData?.tag ?? '');
    setFileName(renameData?.fileName ?? '');
    setLang(renameData?.language ?? 'js');
    setFilteredSuggestions([]);
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="rounded-xl w-full max-w-md p-0 shadow-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-default)] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/60 backdrop:backdrop-blur-xs text-[var(--text-primary)]"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          handleClose();
        }
      }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-[var(--text-primary)]">
                {edit ? 'Rename Playground' : 'New Playground'}
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                {edit
                  ? 'Update playground name and tag'
                  : 'Create a live JavaScript or TypeScript playground'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close dialog"
            className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={createNewPlayGroundFunction} className="mt-5 space-y-4">
          {/* File Name Field */}
          <div>
            <label
              htmlFor="playground-name"
              className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5"
            >
              Playground Name
            </label>
            <input
              id="playground-name"
              autoFocus
              maxLength={50}
              placeholder="e.g. array-methods, async-fetch"
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]/30 focus:border-[var(--border-focus)] transition-all"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              type="text"
              required
            />
          </div>

          {/* Tag Field */}
          <div className="relative">
            <label
              htmlFor="playground-tag"
              className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5"
            >
              Tag / Category{' '}
              <span className="text-[var(--text-muted)]">(optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-muted)]">
                <TagIcon className="w-3.5 h-3.5" />
              </div>
              <input
                id="playground-tag"
                maxLength={50}
                placeholder="e.g. algorithms, interview, react"
                className="w-full pl-8 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]/30 focus:border-[var(--border-focus)] transition-all"
                value={tagName}
                onChange={(e) => {
                  setTag(e.target.value.toLowerCase());
                  handleInputChange(e.target.value.toLowerCase());
                }}
                type="text"
              />
            </div>

            {/* Tag Suggestions Dropdown */}
            {filteredSuggestions.length > 0 && (
              <ul className="absolute z-20 w-full mt-1 max-h-36 overflow-y-auto rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] p-1 shadow-lg backdrop-blur-md">
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] rounded-md cursor-pointer transition-colors"
                  >
                    <TagIcon className="w-3 h-3 text-amber-500 opacity-70" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Language Selector Cards (Only in create mode) */}
          {!edit && (
            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                Language
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {LANGUAGE_OPTIONS.map((option) => (
                  <LanguageCard
                    key={option.id}
                    option={option}
                    isSelected={lang === option.id}
                    onSelect={(selectedLang) => setLang(selectedLang)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={handleClose}
              className="px-3.5 py-2 text-xs font-medium rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black shadow-sm transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              {edit ? 'Save Changes' : 'Create Playground'}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default CreatePlayground;
