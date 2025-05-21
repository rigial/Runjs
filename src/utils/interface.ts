import { editor } from 'monaco-editor';

export type ConsoleMethods = 'log' | 'info' | 'warn' | 'error';

export interface UserCodeBase {
  code: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  createdAt: Date;
  fileName: string;
  isDelete: boolean;
  language: 'js' | 'ts' | 'html';
  lastModifiedAt: Date;
  star: number;
  tag: string;
  id: string;
  dbUpload: boolean;
}

export interface TaggedResult {
  tag: string;
  count: number;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

export interface Tag {
  [key: string]: number;
}

export type BuiltinTheme = 'vs' | 'vs-dark' | 'hc-black' | 'hc-light';

export interface CustomIStandaloneThemeData {
  base: BuiltinTheme;
  inherit: boolean;
  rules: ITokenThemeRule[];
  encodedTokensColors?: string[];
  colors: IColors;
}

export type IColors = {
  [colorId: string]: string;
};

export interface ITokenThemeRule {
  token: string;
  foreground?: string;
  background?: string;
  fontStyle?: string;
}

export interface ICodeEditor {
  code: string;
  language: 'javascript' | 'typescript';
  onChange: (
    value: string | undefined,
    ev: editor.IModelContentChangedEvent
  ) => void;
  currentFontSize: number;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  editorRef: React.MutableRefObject<any>;
}

export interface IAppLoading {
  freeLoading?: boolean;
}

export interface IModalProps {
  tagSuggestions: string[];
  edit: boolean;
  renameData?: UserCodeBase;
  dbcall?: () => Promise<void>;
}

export interface IProjectTable {
  data: UserCodeBase[];
  bin: boolean;
  createPlayground?: () => void;
  dbcall: () => Promise<void>;
  tagSuggestions: string[];
}

export interface ISearchInput {
  showFavourite: boolean;
  isFavouriteSelected: boolean;
  dialogRef: React.RefObject<ModalRef>;
  onInputChange: (e: string) => void;
  searchTerm: string;
  setIsFavouriteSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITerminal {
  consoleRef: React.RefObject<HTMLDivElement>;
  clearTerminal: () => void;
}

export type AnswerBlockType = 'para' | 'heading' | 'points' | 'code';
export interface AnswerBlock {
  type: AnswerBlockType;
  data: string[];
}

export interface JSInterviewQuestion {
  question: string;
  answer: AnswerBlock[];
}

export type JSInterviewQuestionList = JSInterviewQuestion[];

export interface IQuestionAccordion {
  data: JSInterviewQuestion;
  questionNumber: number;
  isOpened: boolean;
  changeActiveQuestion: () => void;
}
