import type { Monaco } from '@monaco-editor/react';

/**
 * Extracts a valid React Component name in PascalCase from a file path.
 * e.g., '/src/components/HeaderNav.tsx' -> 'HeaderNav'
 * e.g., '/src/components/user-profile.tsx' -> 'UserProfile'
 */
export function getComponentNameFromPath(path: string): string {
  if (!path) return 'MyComponent';
  const cleanPath = path.replace(/\\/g, '/');
  const filename = cleanPath.split('/').pop() || 'MyComponent';
  const baseName = filename.split('.')[0] || 'MyComponent';

  // Convert kebab-case / snake_case into PascalCase
  const formatted = baseName
    .replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^[a-z]/, (c) => c.toUpperCase());

  // Return formatted name if valid identifier, else fallback
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(formatted)
    ? formatted
    : 'MyComponent';
}

interface SnippetDef {
  label: string;
  detail: string;
  documentation: string;
  getSnippet: (componentName: string) => string;
}

const SNIPPETS: SnippetDef[] = [
  // ================= React Components =================
  {
    label: 'rafce',
    detail: 'React Arrow Function Component with Export Default',
    documentation:
      'Creates a React Arrow Function Component with Default Export',
    getSnippet: (name) =>
      `import React from 'react';\n\nconst \${1:${name}} = () => {\n  return (\n    <div>\n      \${0}\n    </div>\n  );\n};\n\nexport default \${1:${name}};\n`,
  },
  {
    label: 'rfce',
    detail: 'React Function Component with Export Default',
    documentation: 'Creates a React Function Component with Default Export',
    getSnippet: (name) =>
      `import React from 'react';\n\nfunction \${1:${name}}() {\n  return (\n    <div>\n      \${0}\n    </div>\n  );\n}\n\nexport default \${1:${name}};\n`,
  },
  {
    label: 'rafc',
    detail: 'React Arrow Function Component (Named Export)',
    documentation: 'Creates a React Arrow Function Component with Named Export',
    getSnippet: (name) =>
      `import React from 'react';\n\nexport const \${1:${name}} = () => {\n  return (\n    <div>\n      \${0}\n    </div>\n  );\n};\n`,
  },
  {
    label: 'rfc',
    detail: 'React Function Component (Named Export)',
    documentation: 'Creates a React Function Component with Named Export',
    getSnippet: (name) =>
      `import React from 'react';\n\nexport function \${1:${name}}() {\n  return (\n    <div>\n      \${0}\n    </div>\n  );\n}\n`,
  },
  {
    label: 'rce',
    detail: 'React Class Component with Export Default',
    documentation: 'Creates a React Class Component with Default Export',
    getSnippet: (name) =>
      `import React, { Component } from 'react';\n\nexport class \${1:${name}} extends Component {\n  render() {\n    return (\n      <div>\n        \${0}\n      </div>\n    );\n  }\n}\n\nexport default \${1:${name}};\n`,
  },
  {
    label: 'rc',
    detail: 'React Class Component',
    documentation: 'Creates a React Class Component',
    getSnippet: (name) =>
      `import React, { Component } from 'react';\n\nexport default class \${1:${name}} extends Component {\n  render() {\n    return (\n      <div>\n        \${0}\n      </div>\n    );\n  }\n}\n`,
  },
  {
    label: 'rcc',
    detail: 'React Class Component with Constructor',
    documentation: 'Creates a React Class Component with Constructor and State',
    getSnippet: (name) =>
      `import React, { Component } from 'react';\n\nexport default class \${1:${name}} extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      \${2}\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        \${0}\n      </div>\n    );\n  }\n}\n`,
  },
  {
    label: 'rfcp',
    detail: 'React Function Component with PropTypes',
    documentation: 'Creates a React Function Component with PropTypes',
    getSnippet: (name) =>
      `import React from 'react';\nimport PropTypes from 'prop-types';\n\nfunction \${1:${name}}(props) {\n  return (\n    <div>\n      \${0}\n    </div>\n  );\n}\n\n\${1:${name}}.propTypes = {\n  \${2}\n};\n\nexport default \${1:${name}};\n`,
  },
  {
    label: 'rafcp',
    detail: 'React Arrow Function Component with PropTypes',
    documentation: 'Creates a React Arrow Function Component with PropTypes',
    getSnippet: (name) =>
      `import React from 'react';\nimport PropTypes from 'prop-types';\n\nconst \${1:${name}} = (props) => {\n  return (\n    <div>\n      \${0}\n    </div>\n  );\n};\n\n\${1:${name}}.propTypes = {\n  \${2}\n};\n\nexport default \${1:${name}};\n`,
  },

  // ================= React Native =================
  {
    label: 'rnfe',
    detail: 'React Native Functional Component with Export',
    documentation:
      'Creates a React Native Functional Component with Default Export',
    getSnippet: (name) =>
      `import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nconst \${1:${name}} = () => {\n  return (\n    <View style={styles.container}>\n      <Text>\${1:${name}}</Text>\n      \${0}\n    </View>\n  );\n};\n\nexport default \${1:${name}};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n`,
  },
  {
    label: 'rnfes',
    detail: 'React Native Functional Component with StyleSheet',
    documentation:
      'Creates a React Native Functional Component with StyleSheet & Export',
    getSnippet: (name) =>
      `import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nexport const \${1:${name}} = () => {\n  return (\n    <View style={styles.container}>\n      <Text>\${1:${name}}</Text>\n      \${0}\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n});\n`,
  },
  {
    label: 'rnc',
    detail: 'React Native Class Component',
    documentation: 'Creates a React Native Class Component with Export',
    getSnippet: (name) =>
      `import React, { Component } from 'react';\nimport { Text, View } from 'react-native';\n\nexport default class \${1:${name}} extends Component {\n  render() {\n    return (\n      <View>\n        <Text> \${1:${name}} </Text>\n        \${0}\n      </View>\n    );\n  }\n}\n`,
  },
  {
    label: 'rnstyle',
    detail: 'React Native StyleSheet.create',
    documentation: 'Creates a React Native StyleSheet definition',
    getSnippet: () =>
      `const styles = StyleSheet.create({\n  \${1:container}: {\n    \${0}\n  },\n});\n`,
  },

  // ================= React Hooks =================
  {
    label: 'useState',
    detail: 'React useState Hook',
    documentation: 'Declares a state variable and setter function',
    getSnippet: () =>
      `const [\${1:state}, set\${1/(.*)/\${1:/capitalize}/}] = useState(\${2:initialState});\${0}`,
  },
  {
    label: 'useEffect',
    detail: 'React useEffect Hook',
    documentation: 'Runs side effects in function components',
    getSnippet: () =>
      `useEffect(() => {\n  \${1}\n\n  return () => {\n    \${2}\n  };\n}, [\${3}]);\${0}`,
  },
  {
    label: 'useContext',
    detail: 'React useContext Hook',
    documentation: 'Accepts a context object and returns current context value',
    getSnippet: () => `const \${1:value} = useContext(\${2:MyContext});\${0}`,
  },
  {
    label: 'useCallback',
    detail: 'React useCallback Hook',
    documentation: 'Returns a memoized callback',
    getSnippet: () =>
      `const \${1:memoizedCallback} = useCallback(\n  (\${2:params}) => {\n    \${3}\n  },\n  [\${4:deps}],\n);\${0}`,
  },
  {
    label: 'useMemo',
    detail: 'React useMemo Hook',
    documentation: 'Returns a memoized computed value',
    getSnippet: () =>
      `const \${1:memoizedValue} = useMemo(() => \${2:computeValue}, [\${3:deps}]);\${0}`,
  },
  {
    label: 'useRef',
    detail: 'React useRef Hook',
    documentation: 'Returns a mutable ref object whose .current is initialized',
    getSnippet: () => `const \${1:refName} = useRef(\${2:null});\${0}`,
  },
  {
    label: 'useReducer',
    detail: 'React useReducer Hook',
    documentation: 'An alternative to useState for complex state logic',
    getSnippet: () =>
      `const [\${1:state}, dispatch] = useReducer(\${2:reducer}, \${3:initialState});\${0}`,
  },
  {
    label: 'useLayoutEffect',
    detail: 'React useLayoutEffect Hook',
    documentation: 'Fires synchronously after all DOM mutations',
    getSnippet: () =>
      `useLayoutEffect(() => {\n  \${1}\n\n  return () => {\n    \${2}\n  };\n}, [\${3}]);\${0}`,
  },
  {
    label: 'useId',
    detail: 'React useId Hook',
    documentation: 'Generates unique IDs for accessibility attributes',
    getSnippet: () => `const \${1:id} = useId();\${0}`,
  },
  {
    label: 'useTransition',
    detail: 'React useTransition Hook',
    documentation: 'Lets you mark updates as non-blocking transitions',
    getSnippet: () =>
      `const [\${1:isPending}, startTransition] = useTransition();\${0}`,
  },
  {
    label: 'useDeferredValue',
    detail: 'React useDeferredValue Hook',
    documentation: 'Defers updating a part of the UI',
    getSnippet: () =>
      `const deferred\${1:Value} = useDeferredValue(\${2:value});\${0}`,
  },
  {
    label: 'useImperativeHandle',
    detail: 'React useImperativeHandle Hook',
    documentation: 'Customizes the instance value exposed to parent refs',
    getSnippet: () =>
      `useImperativeHandle(\${1:ref}, () => ({\n  \${2}\n}), [\${3}]);\${0}`,
  },

  // ================= Import Snippets =================
  {
    label: 'imr',
    detail: "import React from 'react'",
    documentation: 'Imports React default module',
    getSnippet: () => `import React from 'react';\n`,
  },
  {
    label: 'imrd',
    detail: "import ReactDOM from 'react-dom'",
    documentation: 'Imports ReactDOM module',
    getSnippet: () => `import ReactDOM from 'react-dom';\n`,
  },
  {
    label: 'imrc',
    detail: "import React, { Component } from 'react'",
    documentation: 'Imports React and Component class',
    getSnippet: () => `import React, { Component } from 'react';\n`,
  },
  {
    label: 'imrs',
    detail: "import React, { useState } from 'react'",
    documentation: 'Imports React and useState hook',
    getSnippet: () => `import React, { useState } from 'react';\n`,
  },
  {
    label: 'imrse',
    detail: "import React, { useState, useEffect } from 'react'",
    documentation: 'Imports React, useState and useEffect hooks',
    getSnippet: () => `import React, { useState, useEffect } from 'react';\n`,
  },
  {
    label: 'impt',
    detail: "import PropTypes from 'prop-types'",
    documentation: 'Imports PropTypes module',
    getSnippet: () => `import PropTypes from 'prop-types';\n`,
  },
  {
    label: 'imp',
    detail: "import { ... } from '...'",
    documentation: 'Imports named members from a module',
    getSnippet: () => `import { \${2:module} } from '\${1:source}';\${0}\n`,
  },
  {
    label: 'impd',
    detail: "import ... from '...'",
    documentation: 'Imports default export from a module',
    getSnippet: () => `import \${2:name} from '\${1:source}';\${0}\n`,
  },
  {
    label: 'impa',
    detail: "import * as ... from '...'",
    documentation: 'Imports all exports into a namespace',
    getSnippet: () => `import * as \${2:name} from '\${1:source}';\${0}\n`,
  },

  // ================= Redux / Redux Toolkit =================
  {
    label: 'rxaction',
    detail: 'Redux Action Creator',
    documentation: 'Creates a Redux action creator function',
    getSnippet: () =>
      `export const \${1:actionName} = (\${2:payload}) => ({\n  type: '\${3:TYPE}',\n  payload,\n});\${0}\n`,
  },
  {
    label: 'rxreducer',
    detail: 'Redux Reducer Function',
    documentation: 'Creates a standard Redux reducer function',
    getSnippet: () =>
      `const initialState = {\n  \${1}\n};\n\nexport default (state = initialState, { type, payload }) => {\n  switch (type) {\n    case \${2:TYPE}:\n      return { ...state, ...payload };\n    default:\n      return state;\n  }\n};\n`,
  },
  {
    label: 'rxslice',
    detail: 'Redux Toolkit createSlice',
    documentation: 'Creates a Redux Toolkit slice with reducers and actions',
    getSnippet: (name) =>
      `import { createSlice, PayloadAction } from '@reduxjs/toolkit';\n\ninterface \${1:${name}}State {\n  \${2:value}: \${3:number};\n}\n\nconst initialState: \${1:${name}}State = {\n  \${2:value}: 0,\n};\n\nexport const \${4:${name.toLowerCase()}}Slice = createSlice({\n  name: '\${4:${name.toLowerCase()}}',\n  initialState,\n  reducers: {\n    \${5:increment}: (state) => {\n      state.\${2:value} += 1;\n    },\n  },\n});\n\nexport const { \${5:increment} } = \${4:${name.toLowerCase()}}Slice.actions;\nexport default \${4:${name.toLowerCase()}}Slice.reducer;\n`,
  },
  {
    label: 'useSelector',
    detail: 'Redux useSelector Hook',
    documentation: 'Extracts data from the Redux store state',
    getSnippet: () =>
      `const \${1:state} = useSelector((state: any) => state.\${2:property});\${0}`,
  },
  {
    label: 'useDispatch',
    detail: 'Redux useDispatch Hook',
    documentation: 'Returns the Redux store dispatch function',
    getSnippet: () => `const dispatch = useDispatch();\${0}`,
  },

  // ================= Console / Debugging =================
  {
    label: 'clg',
    detail: 'console.log(...)',
    documentation: 'Logs an output to the browser console',
    getSnippet: () => `console.log(\${1});\${0}`,
  },
  {
    label: 'clo',
    detail: "console.log('var:', var)",
    documentation: 'Logs labeled variable and its value to the console',
    getSnippet: () => `console.log('\${1:variable}:', \${1:variable});\${0}`,
  },
  {
    label: 'clw',
    detail: 'console.warn(...)',
    documentation: 'Logs a warning message to the console',
    getSnippet: () => `console.warn(\${1});\${0}`,
  },
  {
    label: 'cle',
    detail: 'console.error(...)',
    documentation: 'Logs an error message to the console',
    getSnippet: () => `console.error(\${1});\${0}`,
  },
  {
    label: 'clt',
    detail: 'console.table(...)',
    documentation: 'Logs data as an interactive table',
    getSnippet: () => `console.table(\${1});\${0}`,
  },
  {
    label: 'cld',
    detail: 'console.dir(...)',
    documentation:
      'Displays an interactive list of the properties of the specified object',
    getSnippet: () => `console.dir(\${1});\${0}`,
  },
];

let isRegistered = false;

/**
 * Registers ES7+ React/Redux/React-Native snippet completion providers in Monaco.
 */
export function registerReactSnippets(monaco: Monaco): () => void {
  if (isRegistered) return () => {};

  const disposers: Array<{ dispose: () => void }> = [];
  const targetLanguages = ['javascript', 'typescript', 'jsx', 'tsx'];

  for (const lang of targetLanguages) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const provider = monaco.languages.registerCompletionItemProvider(lang, {
      provideCompletionItems(model: any, position: any): any {
        const wordUntil = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: wordUntil.startColumn,
          endColumn: wordUntil.endColumn,
        };

        const componentName = getComponentNameFromPath(model.uri.path);

        const suggestions = SNIPPETS.map((snippet) => ({
          label: snippet.label,
          kind: monaco.languages.CompletionItemKind.Snippet,
          detail: snippet.detail,
          documentation: snippet.documentation,
          insertText: snippet.getSnippet(componentName),
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
          sortText: `00_${snippet.label}`,
        }));

        return {
          suggestions,
        };
      },
    });

    disposers.push(provider);
  }

  isRegistered = true;

  return () => {
    disposers.forEach((d) => d.dispose());
    isRegistered = false;
  };
}
