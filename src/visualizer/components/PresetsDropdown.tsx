import { memo, useState, useRef, useEffect } from 'react';
import { BookOpen, ChevronDown, Sparkles } from 'lucide-react';
import { VISUALIZER_PRESETS } from '../engine/presets';
import { VisualizerPreset } from '../engine/types';

interface PresetsDropdownProps {
  currentPresetId: string | null;
  onSelectPreset: (preset: VisualizerPreset) => void;
}

function PresetsDropdown({
  currentPresetId,
  onSelectPreset,
}: PresetsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () =>
      document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  const activePreset = VISUALIZER_PRESETS.find((p) => p.id === currentPresetId);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <BookOpen className="w-3.5 h-3.5 text-amber-500" />
        <span className="hidden sm:inline font-semibold text-[var(--text-primary)]">
          {activePreset
            ? activePreset.title
            : currentPresetId === null
              ? 'Custom Code'
              : 'Choose Example'}
        </span>
        <span className="sm:hidden font-semibold">Examples</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 sm:right-0 sm:left-auto top-full mt-1.5 w-80 sm:w-96 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95">
          <div className="flex items-center justify-between px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Event Loop Examples</span>
            </div>
            <span>{VISUALIZER_PRESETS.length} presets</span>
          </div>

          <div className="max-h-80 overflow-y-auto space-y-1 p-1">
            {VISUALIZER_PRESETS.map((preset) => {
              const isSelected = preset.id === currentPresetId;

              let categoryClass =
                'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
              if (preset.category === 'Promises') {
                categoryClass =
                  'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
              } else if (preset.category === 'Timers') {
                categoryClass =
                  'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
              } else if (preset.category === 'Advanced') {
                categoryClass =
                  'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
              }

              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => {
                    onSelectPreset(preset);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                    isSelected
                      ? 'bg-amber-500/10 border border-amber-500/30 text-[var(--text-primary)]'
                      : 'hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                      {preset.title}
                    </span>
                    <span
                      className={`px-1.5 py-0.2 text-[9px] font-bold uppercase rounded border shrink-0 ${categoryClass}`}
                    >
                      {preset.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] line-clamp-1 leading-snug">
                    {preset.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(PresetsDropdown);
