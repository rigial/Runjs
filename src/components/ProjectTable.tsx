import { Fragment, memo, useRef, useState } from 'react';
import { IProjectTable, ModalRef, UserCodeBase } from '../utils/interface';
import { Link } from 'react-router';
import { saveJSTSFile } from '../utils/commonFunction';
import { deleteCode, updateCode } from '../db/operations';
import CreatePlayground from './CreatePlayground';
import {
  Star,
  Download,
  Edit3,
  Trash2,
  RotateCcw,
  Plus,
  Play,
  Clock,
  Tag as TagIcon,
  FolderOpen,
} from 'lucide-react';

function ProjectTable({
  data,
  bin,
  createPlayground,
  dbcall,
  tagSuggestions,
}: IProjectTable) {
  const dialogRef = useRef<ModalRef>(null);
  const [renameData, setRenameData] = useState<UserCodeBase>();

  async function handleDownload(val: UserCodeBase) {
    if (val.language === 'react' && val.files) {
      try {
        const JSZip = (await import('jszip')).default;
        const zip = new JSZip();
        for (const [filePath, content] of Object.entries(val.files)) {
          const relPath = filePath.startsWith('/')
            ? filePath.slice(1)
            : filePath;
          zip.file(relPath, content);
        }
        const blob = await zip.generateAsync({ type: 'blob' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${val.fileName || 'react-project'}.zip`;
        link.click();
        URL.revokeObjectURL(link.href);
      } catch (e) {
        console.error('Failed to download React zip:', e);
      }
    } else if (val.language === 'js' || val.language === 'ts') {
      saveJSTSFile(val.code, val.fileName, val.language);
    }
  }

  async function handleFavorite(val: UserCodeBase) {
    const updatePayload: UserCodeBase = {
      ...val,
      star: val.star === 1 ? 0 : 1,
    };
    try {
      await updateCode(val.id, updatePayload);
      await dbcall();
    } catch (error) {
      console.log('Error', error);
    }
  }

  async function handleDelete(val: UserCodeBase) {
    const updatePayload: UserCodeBase = {
      ...val,
      isDelete: !val.isDelete,
    };
    try {
      await updateCode(val.id, updatePayload);
      await dbcall();
    } catch (error) {
      console.log('Error', error);
    }
  }

  async function handleConfirmDelete(id: string) {
    if (
      window.confirm(
        'Are you sure you want to delete this playground permanently?'
      )
    ) {
      try {
        await deleteCode(id);
        await dbcall();
      } catch (error) {
        console.log('Error', error);
      }
    }
  }

  const getLanguageBadge = (lang: string) => {
    switch (lang) {
      case 'react':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 w-fit shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            React + Vite
          </span>
        );
      case 'js':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 w-fit shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            JavaScript
          </span>
        );
      case 'ts':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 w-fit shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            TypeScript
          </span>
        );
      case 'html':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 w-fit shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            HTML
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-500/10 text-gray-600 dark:text-gray-400 border border-gray-500/20 w-fit shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
            {lang.toUpperCase()}
          </span>
        );
    }
  };

  if (data.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-12 text-center my-6">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-surface-hover)] text-[var(--text-muted)]">
          <FolderOpen className="h-6 w-6" />
        </div>
        <h3 className="mt-3 text-sm font-semibold text-[var(--text-primary)]">
          {bin ? 'Trash is empty' : 'No playgrounds found'}
        </h3>
        <p className="mt-1 text-xs text-[var(--text-secondary)]">
          {bin
            ? 'Deleted playgrounds will appear here before permanent removal.'
            : 'Get started by creating a new JavaScript or TypeScript playground.'}
        </p>
        <div className="mt-5">
          {bin ? (
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
            >
              Back to Dashboard
            </Link>
          ) : (
            <button
              type="button"
              onClick={createPlayground}
              className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-2 text-xs font-semibold text-black hover:bg-amber-600 transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Create Playground</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] my-6 shadow-xs transition-colors">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[var(--border-default)] text-left text-xs">
            <thead className="bg-[var(--bg-surface-muted)] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Playground
                </th>
                <th scope="col" className="px-4 py-3 hidden sm:table-cell">
                  Language
                </th>
                <th scope="col" className="px-4 py-3 hidden md:table-cell">
                  Tag
                </th>
                <th scope="col" className="px-4 py-3 hidden lg:table-cell">
                  Modified
                </th>
                <th scope="col" className="px-4 py-3 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-primary)]">
              {data.map((val) => {
                const targetUrl = `/${val.language}/${val.id}`;
                const formattedDate = new Date(
                  val.lastModifiedAt
                ).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                });

                return (
                  <tr
                    key={val.id}
                    className="hover:bg-[var(--bg-surface-hover)] transition-colors group"
                  >
                    {/* Playground Name / Link */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {!bin && (
                          <button
                            type="button"
                            onClick={() => handleFavorite(val)}
                            title={val.star === 1 ? 'Unstar' : 'Star'}
                            aria-label="Star playground"
                            className="text-[var(--text-muted)] hover:text-amber-500 transition-colors focus:outline-none"
                          >
                            <Star
                              className={`w-4 h-4 ${
                                val.star === 1
                                  ? 'fill-amber-500 text-amber-500'
                                  : 'text-[var(--text-muted)]'
                              }`}
                            />
                          </button>
                        )}
                        <div>
                          {bin ? (
                            <div className="font-medium text-[var(--text-secondary)] flex items-center gap-1.5 cursor-not-allowed select-none">
                              <span>{val.fileName}</span>
                              <span className="text-[var(--text-muted)] text-[11px]">
                                .{val.language}
                              </span>
                            </div>
                          ) : (
                            <Link
                              to={targetUrl}
                              className="font-medium text-[var(--text-primary)] hover:text-amber-500 hover:underline flex items-center gap-1.5"
                            >
                              <span>{val.fileName}</span>
                              <span className="text-[var(--text-muted)] text-[11px]">
                                .{val.language}
                              </span>
                            </Link>
                          )}
                          <div className="sm:hidden mt-0.5 flex items-center gap-2">
                            {getLanguageBadge(val.language)}
                            {val.tag && (
                              <span className="text-[10px] text-[var(--text-muted)]">
                                #{val.tag}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Language */}
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {getLanguageBadge(val.language)}
                    </td>

                    {/* Tag */}
                    <td className="px-4 py-3 hidden md:table-cell">
                      {val.tag ? (
                        <span className="inline-flex items-center gap-1 text-xs text-[var(--text-secondary)] bg-[var(--bg-surface-hover)] px-2 py-0.5 rounded border border-[var(--border-subtle)]">
                          <TagIcon className="w-3 h-3 opacity-60" />
                          <span>{val.tag}</span>
                        </span>
                      ) : (
                        <span className="text-[var(--text-muted)] italic text-[11px]">
                          None
                        </span>
                      )}
                    </td>

                    {/* Last Modified */}
                    <td className="px-4 py-3 hidden lg:table-cell text-[var(--text-secondary)]">
                      <div className="flex items-center gap-1.5 text-xs">
                        <Clock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        <span>{formattedDate}</span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {!bin ? (
                          <Fragment>
                            {/* Run Link */}
                            <Link
                              to={targetUrl}
                              title="Open Editor"
                              className="p-1.5 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-active)] transition-colors"
                            >
                              <Play className="w-4 h-4 fill-current" />
                            </Link>

                            {/* Download */}
                            <button
                              type="button"
                              onClick={() => handleDownload(val)}
                              title="Download File"
                              aria-label="Download File"
                              className="p-1.5 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-active)] transition-colors"
                            >
                              <Download className="w-4 h-4" />
                            </button>

                            {/* Rename */}
                            <button
                              type="button"
                              onClick={() => {
                                setRenameData(val);
                                dialogRef?.current?.open();
                              }}
                              title="Rename / Edit Tag"
                              aria-label="Rename"
                              className="p-1.5 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-active)] transition-colors"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>

                            {/* Move to Bin */}
                            <button
                              type="button"
                              onClick={() => handleDelete(val)}
                              title="Move to Bin"
                              aria-label="Move to Bin"
                              className="p-1.5 rounded-md text-[var(--text-secondary)] hover:text-red-500 hover:bg-red-500/10 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </Fragment>
                        ) : (
                          <Fragment>
                            {/* Restore */}
                            <button
                              type="button"
                              onClick={() => handleDelete(val)}
                              title="Restore Playground"
                              aria-label="Restore"
                              className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-surface-hover)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-active)] transition-colors border border-[var(--border-default)]"
                            >
                              <RotateCcw className="w-3.5 h-3.5 text-emerald-500" />
                              <span>Restore</span>
                            </button>

                            {/* Permanent Delete */}
                            <button
                              type="button"
                              onClick={() => handleConfirmDelete(val.id)}
                              title="Delete Forever"
                              aria-label="Delete Forever"
                              className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-colors border border-red-500/20"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Delete</span>
                            </button>
                          </Fragment>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <CreatePlayground
        dbcall={dbcall}
        renameData={renameData}
        edit={true}
        ref={dialogRef}
        tagSuggestions={tagSuggestions}
      />
    </Fragment>
  );
}

export default memo(ProjectTable);
