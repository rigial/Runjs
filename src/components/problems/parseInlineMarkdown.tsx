import React from 'react';

export function parseInlineFormatting(text: string): React.ReactNode[] {
  if (!text) return [];

  // Regex matches `inline code`, ***bold italic***, **bold**, or *italic*
  const tokens = text.split(
    /(`[^`]+`|\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g
  );

  return tokens.map((token, index) => {
    if (token.startsWith('`') && token.endsWith('`') && token.length >= 2) {
      const code = token.slice(1, -1);
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 mx-0.5 rounded bg-[var(--bg-surface)] text-amber-600 dark:text-amber-400 font-mono text-[11px] sm:text-xs border border-[var(--border-default)] shadow-2xs font-medium"
        >
          {code}
        </code>
      );
    }
    if (token.startsWith('***') && token.endsWith('***') && token.length >= 6) {
      const boldItalicText = token.slice(3, -3);
      return (
        <strong
          key={index}
          className="font-bold italic text-[var(--text-primary)]"
        >
          {boldItalicText}
        </strong>
      );
    }
    if (token.startsWith('**') && token.endsWith('**') && token.length >= 4) {
      const boldText = token.slice(2, -2);
      return (
        <strong
          key={index}
          className="font-semibold text-[var(--text-primary)]"
        >
          {boldText}
        </strong>
      );
    }
    if (token.startsWith('*') && token.endsWith('*') && token.length >= 2) {
      const italicText = token.slice(1, -1);
      return (
        <em key={index} className="italic text-[var(--text-primary)]">
          {italicText}
        </em>
      );
    }
    return token;
  });
}
