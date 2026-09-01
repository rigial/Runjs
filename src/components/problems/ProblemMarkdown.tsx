import React, { memo, useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ProblemMarkdownProps {
  content: string;
  className?: string;
}

function parseInlineFormatting(text: string): React.ReactNode[] {
  // Regex matches `inline code` or **bold** or *italic*
  const tokens = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);

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

function CodeBlockItem({ code, lang }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="my-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden shadow-2xs">
      <div className="flex items-center justify-between px-3 py-1.5 bg-[var(--bg-app)]/70 border-b border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] font-mono">
        <span className="uppercase font-semibold tracking-wider">
          {lang || 'Code'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-500" />
              <span className="text-emerald-500">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-3 font-mono text-xs text-[var(--text-primary)] overflow-x-auto leading-relaxed select-text whitespace-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ProblemMarkdown({ content, className = '' }: ProblemMarkdownProps) {
  if (!content) return null;

  // Split into sections by code fence: ```...```
  const parts = content.split(/(```[\s\S]*?```)/g);

  return (
    <div
      className={`space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] ${className}`}
    >
      {parts.map((part, partIndex) => {
        if (part.startsWith('```') && part.endsWith('```')) {
          // It's a fenced code block
          const lines = part
            .slice(3, -3)
            .replace(/^\r?\n/, '')
            .replace(/\r?\n$/, '')
            .split('\n');
          let lang = '';
          let codeLines = lines;
          if (
            lines.length > 0 &&
            lines[0].trim() &&
            !lines[0].includes(' ') &&
            !lines[0].includes('=') &&
            !lines[0].includes(':') &&
            !lines[0].includes('≡')
          ) {
            lang = lines[0].trim();
            codeLines = lines.slice(1);
          }
          const code = codeLines.join('\n');
          return <CodeBlockItem key={partIndex} code={code} lang={lang} />;
        }

        // Regular markdown text: parse lines
        const lines = part.split(/\r?\n/);
        const elements: React.ReactNode[] = [];
        let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;

        function flushList(keyPrefix: string) {
          if (!currentList) return;
          const { type, items } = currentList;
          currentList = null;
          if (type === 'ul') {
            elements.push(
              <ul
                key={`${keyPrefix}-ul`}
                className="my-2 space-y-1.5 pl-5 list-disc text-xs sm:text-sm text-[var(--text-secondary)]"
              >
                {items.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {parseInlineFormatting(item)}
                  </li>
                ))}
              </ul>
            );
          } else {
            elements.push(
              <ol
                key={`${keyPrefix}-ol`}
                className="my-2 space-y-1.5 pl-5 list-decimal text-xs sm:text-sm text-[var(--text-secondary)]"
              >
                {items.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {parseInlineFormatting(item)}
                  </li>
                ))}
              </ol>
            );
          }
        }

        lines.forEach((rawLine, lineIdx) => {
          const line = rawLine.trim();

          if (!line) {
            flushList(`line-${partIndex}-${lineIdx}`);
            return;
          }

          // Unordered list item: * item or - item
          if (/^[-*]\s+/.test(line)) {
            const itemText = line.replace(/^[-*]\s+/, '');
            if (!currentList || currentList.type !== 'ul') {
              flushList(`line-${partIndex}-${lineIdx}`);
              currentList = { type: 'ul', items: [itemText] };
            } else {
              currentList.items.push(itemText);
            }
            return;
          }

          // Ordered list item: 1. item
          if (/^\d+\.\s+/.test(line)) {
            const itemText = line.replace(/^\d+\.\s+/, '');
            if (!currentList || currentList.type !== 'ol') {
              flushList(`line-${partIndex}-${lineIdx}`);
              currentList = { type: 'ol', items: [itemText] };
            } else {
              currentList.items.push(itemText);
            }
            return;
          }

          // Not a list item: flush any pending list
          flushList(`line-${partIndex}-${lineIdx}`);

          // Headings
          if (line.startsWith('#### ')) {
            elements.push(
              <h5
                key={lineIdx}
                className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mt-3 mb-1"
              >
                {parseInlineFormatting(line.slice(5))}
              </h5>
            );
            return;
          }
          if (line.startsWith('### ')) {
            elements.push(
              <h4
                key={lineIdx}
                className="text-xs sm:text-sm font-bold text-amber-500 uppercase tracking-wider mt-4 mb-1.5"
              >
                {parseInlineFormatting(line.slice(4))}
              </h4>
            );
            return;
          }
          if (line.startsWith('## ')) {
            elements.push(
              <h3
                key={lineIdx}
                className="text-sm sm:text-base font-bold text-[var(--text-primary)] mt-5 mb-2 pb-1 border-b border-[var(--border-subtle)]"
              >
                {parseInlineFormatting(line.slice(3))}
              </h3>
            );
            return;
          }
          if (line.startsWith('# ')) {
            elements.push(
              <h2
                key={lineIdx}
                className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-5 mb-2"
              >
                {parseInlineFormatting(line.slice(2))}
              </h2>
            );
            return;
          }

          // Regular paragraph
          elements.push(
            <p key={lineIdx} className="my-1.5 leading-relaxed">
              {parseInlineFormatting(line)}
            </p>
          );
        });

        flushList(`part-${partIndex}-end`);

        return <React.Fragment key={partIndex}>{elements}</React.Fragment>;
      })}
    </div>
  );
}

export default memo(ProblemMarkdown);
