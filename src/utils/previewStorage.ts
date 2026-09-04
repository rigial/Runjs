const PREVIEW_KEY_PREFIX = 'runjs_html_live_doc_';
const PREVIEW_RECENCY_KEY = 'runjs_html_live_preview_recency';
const MAX_PREVIEW_DOCS = 3;

/**
 * Saves a compiled HTML live preview document to localStorage, ensuring
 * that dead timestamp keys are cleaned up and old preview documents are pruned
 * to avoid exceeding localStorage quota limits.
 */
export function saveLivePreviewDoc(
  targetId: string,
  compiledDoc: string
): void {
  const currentKey = `${PREVIEW_KEY_PREFIX}${targetId}`;

  try {
    // 1. Cleanup any legacy dead keys ending with '_time'
    cleanupDeadTimestampKeys();

    // 2. Prune old preview documents to avoid unbounded accumulation
    pruneOldPreviewDocs(targetId);

    // 3. Save the compiled preview document
    localStorage.setItem(currentKey, compiledDoc);
    markPreviewAsRecent(currentKey);
  } catch (error) {
    // If quota exceeded, aggressively prune all other preview docs and retry once
    console.warn(
      '[PreviewStorage] Failed to save live preview doc, pruning cache...',
      error
    );
    try {
      pruneAllPreviewDocsExcept(targetId);
      localStorage.setItem(currentKey, compiledDoc);
      markPreviewAsRecent(currentKey);
    } catch (retryErr) {
      console.error(
        '[PreviewStorage] Critical: Unable to persist preview doc to localStorage',
        retryErr
      );
    }
  }
}

/**
 * Retrieves the compiled live preview document for the specified target.
 */
export function getLivePreviewDoc(targetId: string): string {
  try {
    return localStorage.getItem(`${PREVIEW_KEY_PREFIX}${targetId}`) || '';
  } catch {
    return '';
  }
}

/**
 * Cleans up a live preview document from localStorage.
 */
export function cleanupLivePreviewDoc(targetId: string): void {
  try {
    const previewKey = `${PREVIEW_KEY_PREFIX}${targetId}`;
    localStorage.removeItem(previewKey);
    localStorage.removeItem(`${PREVIEW_KEY_PREFIX}${targetId}_time`);
    removePreviewRecency(previewKey);
  } catch {
    // ignore
  }
}

/**
 * Removes legacy '_time' timestamp keys that were previously written but never read.
 */
function cleanupDeadTimestampKeys(): void {
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(PREVIEW_KEY_PREFIX) && key.endsWith('_time')) {
        keysToRemove.push(key);
      }
    }
    for (const key of keysToRemove) {
      localStorage.removeItem(key);
    }
  } catch {
    // ignore
  }
}

/**
 * Keeps at most MAX_PREVIEW_DOCS project previews, removing older ones.
 * Always retains 'scratch' preview if it exists.
 */
function pruneOldPreviewDocs(currentTargetId: string): void {
  try {
    const docKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (
        key &&
        key.startsWith(PREVIEW_KEY_PREFIX) &&
        !key.endsWith('_time') &&
        key !== `${PREVIEW_KEY_PREFIX}scratch` &&
        key !== `${PREVIEW_KEY_PREFIX}${currentTargetId}`
      ) {
        docKeys.push(key);
      }
    }

    const recency = getPreviewRecency();
    docKeys.sort(
      (first, second) => (recency[first] ?? 0) - (recency[second] ?? 0)
    );

    // If we have more keys than allowed, remove the least recently updated ones.
    while (docKeys.length >= MAX_PREVIEW_DOCS) {
      const keyToRemove = docKeys.shift();
      if (keyToRemove) {
        localStorage.removeItem(keyToRemove);
        delete recency[keyToRemove];
      }
    }
    savePreviewRecency(recency);
  } catch {
    // ignore
  }
}

/**
 * Prunes all preview documents except the specified one to recover storage quota.
 */
function pruneAllPreviewDocsExcept(targetId: string): void {
  try {
    const keysToRemove: string[] = [];
    const keepKey = `${PREVIEW_KEY_PREFIX}${targetId}`;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(PREVIEW_KEY_PREFIX) && key !== keepKey) {
        keysToRemove.push(key);
      }
    }
    for (const key of keysToRemove) {
      localStorage.removeItem(key);
    }
    savePreviewRecency({});
  } catch {
    // ignore
  }
}

function getPreviewRecency(): Record<string, number> {
  try {
    const value = localStorage.getItem(PREVIEW_RECENCY_KEY);
    if (!value) return {};
    const parsed: unknown = JSON.parse(value);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed))
      return {};

    return Object.fromEntries(
      Object.entries(parsed).filter(
        ([key, timestamp]) =>
          key.startsWith(PREVIEW_KEY_PREFIX) &&
          typeof timestamp === 'number' &&
          Number.isFinite(timestamp)
      )
    );
  } catch {
    return {};
  }
}

function savePreviewRecency(recency: Record<string, number>): void {
  try {
    localStorage.setItem(PREVIEW_RECENCY_KEY, JSON.stringify(recency));
  } catch {
    // Preview documents remain usable even when recency cannot be persisted.
  }
}

function markPreviewAsRecent(previewKey: string): void {
  const recency = getPreviewRecency();
  recency[previewKey] = Date.now();
  savePreviewRecency(recency);
}

function removePreviewRecency(previewKey: string): void {
  const recency = getPreviewRecency();
  delete recency[previewKey];
  savePreviewRecency(recency);
}
