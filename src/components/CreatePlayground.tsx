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
  const [lang, setLang] = useState<'js' | 'ts' | 'html'>('js');

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
          fileName: fileName,
          tag: tagName,
        };
        await updateCode(renameData.id, updatePayload);
        if (dbcall) await dbcall();
        setTag(renameData?.tag ?? '');
        setFileName(renameData?.fileName ?? '');
        setLang(renameData?.language ?? 'js');
        setFilteredSuggestions([]);
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
    const newCode = {
      id: id,
      code: '',
      htmlCode: '',
      cssCode: '',
      jsCode: '',
      createdAt: new Date(),
      fileName: fileName,
      isDelete: false,
      language: lang,
      lastModifiedAt: new Date(),
      star: 0,
      tag: tagName,
      dbUpload: false,
    };
    try {
      await addCode(newCode);
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

  return (
    <dialog
      ref={dialogRef}
      className="rounded-lg w-96 p-6 shadow-lg bg-white border border-gray-300 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          setTag(renameData?.tag ?? '');
          setFileName(renameData?.fileName ?? '');
          setLang(renameData?.language ?? 'js');
          setFilteredSuggestions([]);
          dialogRef.current?.close();
        }
      }}
    >
      <h2 className="text-lg font-semibold text-gray-800">
        {edit ? renameData?.fileName : 'Create A Playground'}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {edit
          ? 'Enter a new title for this playground:'
          : 'Give it a nice name like'}
      </p>
      <form
        className="mt-4 flex flex-col justify-end"
        onSubmit={createNewPlayGroundFunction}
      >
        <input
          autoFocus={true}
          maxLength={50}
          placeholder="my-awesome-project"
          className="bg-modalBg border focus:outline-none rounded p-2"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          type="text"
          required
        />
        <div className="relative">
          <input
            maxLength={50}
            placeholder="tag (optional)"
            className="bg-modalBg border focus:outline-none rounded p-2 mt-3 w-full"
            value={tagName}
            onChange={(e) => {
              setTag(e.target.value.toLocaleLowerCase());
              handleInputChange(e.target.value.toLocaleLowerCase());
            }}
            type="text"
            required
          />
          {filteredSuggestions.length > 0 && (
            <ul className="absolute w-full mt-1 bg-modalBg border rounded shadow-lg overflow-y-auto bg-white">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 cursor-pointer text-black"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        {!edit && (
          <div className="flex w-full gap-4 justify-center mt-3">
            <button
              onClick={() => setLang('js')}
              type="button"
              className={`bg-transparent p-1 border ${lang === 'js' ? 'border-black' : 'border-gray-200'} rounded`}
            >
              <img
                src="/JavaScript.webp"
                className="size-9"
                alt="Javascript Logo"
              />
            </button>
            <button
              onClick={() => setLang('ts')}
              type="button"
              className={`bg-transparent p-1 border ${lang === 'ts' ? 'border-black' : 'border-gray-200'} rounded`}
            >
              <img
                src="/Typescript.webp"
                className="size-9"
                alt="Typescript Logo"
              />
            </button>
          </div>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded focus:outline-none mt-3"
        >
          {edit ? 'Update' : 'Create Playground'}
        </button>
      </form>
    </dialog>
  );
};

export default CreatePlayground;
