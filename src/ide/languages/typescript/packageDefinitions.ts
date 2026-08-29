/**
 * Built-in package type definitions for in-browser IDE navigation and IntelliSense.
 */

export const REACT_TYPES_CONTENT = `/**
 * Type definitions for React 19
 * Project: https://react.dev/
 */

declare namespace React {
  export type ReactNode =
    | ReactElement
    | string
    | number
    | Iterable<ReactNode>
    | ReactPortal
    | boolean
    | null
    | undefined;

  export type ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> = {
    type: T;
    props: P;
    key: string | null;
  };

  export type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
  export type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any> | null) | (new (props: P) => Component<any, any>);

  export interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    propTypes?: any;
    defaultProps?: Partial<P>;
    displayName?: string;
  }
  export type FC<P = {}> = FunctionComponent<P>;

  export class Component<P = {}, S = {}, SS = any> {
    constructor(props: P);
    state: Readonly<S>;
    props: Readonly<P>;
    setState(state: ((prevState: Readonly<S>, props: Readonly<P>) => S | Partial<S> | null) | S | Partial<S> | null, callback?: () => void): void;
    forceUpdate(callBack?: () => void): void;
    render(): ReactNode;
  }

  export type SetStateAction<S> = S | ((prevState: S) => S);
  export type Dispatch<A> = (value: A) => void;

  export function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  export function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

  export type DependencyList = ReadonlyArray<unknown>;
  export type EffectCallback = () => void | (() => void | undefined);
  export function useEffect(effect: EffectCallback, deps?: DependencyList): void;
  export function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
  export function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
  export function useRef<T>(initialValue: T): { current: T };
  export function useRef<T = undefined>(): { current: T | undefined };
  export function useContext<T>(context: Context<T>): T;
  export function useReducer<R extends (state: any, action: any) => any>(
    reducer: R,
    initialState: Parameters<R>[0]
  ): [Parameters<R>[0], Dispatch<Parameters<R>[1]>];
  export function useId(): string;
  export function useTransition(): [boolean, (callback: () => void) => void];
  export function useDeferredValue<T>(value: T): T;
  export function useImperativeHandle<T, R extends T>(ref: { current: T | null } | ((instance: T | null) => void) | null | undefined, init: () => R, deps?: DependencyList): void;

  export interface Context<T> {
    Provider: FC<{ value: T; children?: ReactNode }>;
    Consumer: FC<{ children: (value: T) => ReactNode }>;
    displayName?: string;
  }
  export function createContext<T>(defaultValue: T): Context<T>;
  export function memo<T extends ComponentType<any>>(Component: T): T;
  export function forwardRef<T, P = {}>(render: (props: P, ref: any) => ReactElement | null): FC<P & { ref?: any }>;

  export const Fragment: FC<{ children?: ReactNode }>;
  export const StrictMode: FC<{ children?: ReactNode }>;
  export const Suspense: FC<{ fallback?: ReactNode; children?: ReactNode }>;

  export interface CSSProperties {
    [key: string]: any;
  }

  export interface HTMLAttributes<T = HTMLElement> {
    className?: string;
    id?: string;
    style?: CSSProperties;
    title?: string;
    onClick?: (event: MouseEvent<T>) => void;
    onSubmit?: (event: FormEvent<T>) => void;
    onChange?: (event: ChangeEvent<T>) => void;
    onKeyDown?: (event: KeyboardEvent<T>) => void;
    onKeyUp?: (event: KeyboardEvent<T>) => void;
    onFocus?: (event: SyntheticEvent<T>) => void;
    onBlur?: (event: SyntheticEvent<T>) => void;
    children?: ReactNode;
    [key: string]: any;
  }

  export interface InputHTMLAttributes<T = HTMLInputElement> extends HTMLAttributes<T> {
    type?: string;
    value?: string | number | readonly string[];
    defaultValue?: string | number | readonly string[];
    placeholder?: string;
    disabled?: boolean;
    checked?: boolean;
    autoFocus?: boolean;
    name?: string;
    readOnly?: boolean;
    required?: boolean;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    autoComplete?: string;
  }

  export interface ButtonHTMLAttributes<T = HTMLButtonElement> extends HTMLAttributes<T> {
    type?: 'submit' | 'reset' | 'button';
    disabled?: boolean;
    name?: string;
    value?: string | string[] | number;
  }

  export interface FormHTMLAttributes<T = HTMLFormElement> extends HTMLAttributes<T> {
    action?: string;
    method?: string;
    target?: string;
    autoComplete?: string;
  }

  export interface TextareaHTMLAttributes<T = HTMLTextAreaElement> extends HTMLAttributes<T> {
    value?: string | number | readonly string[];
    defaultValue?: string | number | readonly string[];
    placeholder?: string;
    rows?: number;
    cols?: number;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
  }

  export interface SelectHTMLAttributes<T = HTMLSelectElement> extends HTMLAttributes<T> {
    value?: string | number | readonly string[];
    defaultValue?: string | number | readonly string[];
    disabled?: boolean;
    multiple?: boolean;
    name?: string;
    required?: boolean;
  }

  export interface OptionHTMLAttributes<T = HTMLOptionElement> extends HTMLAttributes<T> {
    disabled?: boolean;
    selected?: boolean;
    value?: string | number | readonly string[];
  }

  export interface AnchorHTMLAttributes<T = HTMLAnchorElement> extends HTMLAttributes<T> {
    href?: string;
    target?: string;
    rel?: string;
    download?: any;
  }

  export interface ImgHTMLAttributes<T = HTMLImageElement> extends HTMLAttributes<T> {
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    loading?: 'eager' | 'lazy';
  }

  export interface SVGAttributes<T = SVGElement> extends HTMLAttributes<T> {
    width?: number | string;
    height?: number | string;
    viewBox?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number | string;
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
    d?: string;
    [key: string]: any;
  }

  export interface SVGProps<T = SVGElement> extends SVGAttributes<T> {}

  export type DetailedHTMLProps<E, T> = E;

  export interface SyntheticEvent<T = Element, E = Event> {
    currentTarget: EventTarget & T;
    target: EventTarget;
    preventDefault(): void;
    stopPropagation(): void;
    nativeEvent: E;
  }

  export interface FormEvent<T = Element> extends SyntheticEvent<T> {}
  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {}
  export interface MouseEvent<T = Element> extends SyntheticEvent<T> {}
  export interface KeyboardEvent<T = Element> extends SyntheticEvent<T> {
    key: string;
    code: string;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
  }
}

namespace JSX {
  export interface Element extends React.ReactElement<any, any> {}
  export interface ElementClass extends React.Component<any> {}
  export interface ElementAttributesProperty { props: {}; }
  export interface ElementChildrenAttribute { children: {}; }
  export interface IntrinsicElements {
    input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
    h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
    ol: React.DetailedHTMLProps<React.HTMLAttributes<HTMLOListElement>, HTMLOListElement>;
    li: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>;
    label: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
    select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
    option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
    code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    svg: React.DetailedHTMLProps<React.SVGProps<SVGSVGElement>, SVGSVGElement>;
    path: React.DetailedHTMLProps<React.SVGProps<SVGPathElement>, SVGPathElement>;
    img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    [elemName: string]: any;
  }
}

declare module 'react' {
  export = React;
  export as namespace React;
}
`;

export const LUCIDE_REACT_TYPES_CONTENT = `/**
 * Type definitions for lucide-react
 * Project: https://lucide.dev/
 */

import * as React from 'react';

export interface LucideProps {
  size?: string | number;
  color?: string;
  strokeWidth?: string | number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  [key: string]: any;
}

export type LucideIcon = React.FC<LucideProps>;

// Icons
export const ShieldCheck: LucideIcon;
export const CheckCircle2: LucideIcon;
export const Circle: LucideIcon;
export const Plus: LucideIcon;
export const Trash2: LucideIcon;
export const Sparkles: LucideIcon;
export const Code2: LucideIcon;
export const Terminal: LucideIcon;
export const Layers: LucideIcon;
export const RotateCcw: LucideIcon;
export const PackageCheck: LucideIcon;
export const Save: LucideIcon;
export const Search: LucideIcon;
export const ChevronRight: LucideIcon;
export const ChevronLeft: LucideIcon;
export const ChevronDown: LucideIcon;
export const ChevronUp: LucideIcon;
export const FolderTree: LucideIcon;
export const MessageSquare: LucideIcon;
export const Edit2: LucideIcon;
export const Check: LucideIcon;
export const X: LucideIcon;
export const Play: LucideIcon;
export const Zap: LucideIcon;
export const BookOpen: LucideIcon;
export const Copy: LucideIcon;
export const FileText: LucideIcon;
export const Star: LucideIcon;
export const Download: LucideIcon;
export const Upload: LucideIcon;
export const RefreshCw: LucideIcon;
export const FilePlus: LucideIcon;
export const FolderPlus: LucideIcon;
export const AlertCircle: LucideIcon;
export const Info: LucideIcon;
export const Settings: LucideIcon;
export const Menu: LucideIcon;
export const User: LucideIcon;
export const Sun: LucideIcon;
export const Moon: LucideIcon;
export const Heart: LucideIcon;
export const Eye: LucideIcon;
export const EyeOff: LucideIcon;
export const Lock: LucideIcon;
export const Unlock: LucideIcon;
export const ArrowRight: LucideIcon;
export const ArrowLeft: LucideIcon;
export const Filter: LucideIcon;
export const Loader2: LucideIcon;
`;

export const REACT_DOM_TYPES_CONTENT = `/**
 * Type definitions for react-dom 19
 * Project: https://react.dev/
 */

declare namespace ReactDOM {
  export const version: string;
  export function createPortal(children: any, container: Element | DocumentFragment, key?: null | string): any;
  export function flushSync<R>(fn: () => R): R;
}

declare module 'react-dom' {
  export = ReactDOM;
  export as namespace ReactDOM;
}
`;

export const REACT_DOM_CLIENT_TYPES_CONTENT = `/**
 * Type definitions for react-dom/client
 */

declare module 'react-dom/client' {
  export interface Root {
    render(children: any): void;
    unmount(): void;
  }
  export function createRoot(container: Element | DocumentFragment): Root;
  export function hydrateRoot(container: Element | DocumentFragment, initialChildren: any): Root;
}
`;

export const CANVAS_CONFETTI_TYPES_CONTENT = `/**
 * Type definitions for canvas-confetti
 */

export interface ConfettiOptions {
  particleCount?: number;
  angle?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  ticks?: number;
  origin?: { x?: number; y?: number };
  colors?: string[];
  shapes?: string[];
  zIndex?: number;
  disableForReducedMotion?: boolean;
}

declare function confetti(options?: ConfettiOptions): Promise<null> | null;
export default confetti;
`;

export const REACT_ROUTER_TYPES_CONTENT = `/**
 * Type definitions for react-router
 */

import * as React from 'react';

export interface NavigateFunction {
  (to: string, options?: { replace?: boolean; state?: any }): void;
}

export function useNavigate(): NavigateFunction;
export function useParams<ParamsOrKey extends string | Record<string, string | undefined> = string>(): Readonly<[ParamsOrKey] extends [string] ? { [k in ParamsOrKey]?: string } : ParamsOrKey>;
export function useLocation(): { pathname: string; search: string; hash: string; state: any; key: string };
export function useSearchParams(): [URLSearchParams, (nextInit: any) => void];

export const Link: React.FC<{ to: string; className?: string; children?: React.ReactNode; [key: string]: any }>;
export const NavLink: React.FC<{ to: string; className?: any; children?: React.ReactNode; [key: string]: any }>;
export const Outlet: React.FC<{ context?: any }>;
export const Routes: React.FC<{ children?: React.ReactNode }>;
export const Route: React.FC<{ path?: string; element?: React.ReactNode; index?: boolean }>;
`;

/**
 * Registry mapping package import names to their virtual declaration file path and contents.
 */
export const PACKAGE_DECLARATIONS: Record<
  string,
  { path: string; content: string }
> = {
  'lucide-react': {
    path: '/node_modules/lucide-react/index.d.ts',
    content: LUCIDE_REACT_TYPES_CONTENT,
  },
  react: {
    path: '/node_modules/@types/react/index.d.ts',
    content: REACT_TYPES_CONTENT,
  },
  'react-dom': {
    path: '/node_modules/@types/react-dom/index.d.ts',
    content: REACT_DOM_TYPES_CONTENT,
  },
  'react-dom/client': {
    path: '/node_modules/@types/react-dom/client.d.ts',
    content: REACT_DOM_CLIENT_TYPES_CONTENT,
  },
  'canvas-confetti': {
    path: '/node_modules/canvas-confetti/index.d.ts',
    content: CANVAS_CONFETTI_TYPES_CONTENT,
  },
  'react-router': {
    path: '/node_modules/react-router/index.d.ts',
    content: REACT_ROUTER_TYPES_CONTENT,
  },
  'react-router-dom': {
    path: '/node_modules/react-router-dom/index.d.ts',
    content: REACT_ROUTER_TYPES_CONTENT,
  },
};

/**
 * Returns a dictionary of all virtual package declaration files.
 */
export function getAllPackageVirtualFiles(): Record<string, string> {
  const result: Record<string, string> = {};
  for (const pkg of Object.values(PACKAGE_DECLARATIONS)) {
    result[pkg.path] = pkg.content;
  }
  return result;
}
