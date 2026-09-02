import { ComponentType, lazy, LazyExoticComponent } from 'react';

/**
 * Retries a dynamic import on network failure or deployment chunk invalidation.
 *
 * @param componentImport Function returning the dynamic import Promise.
 * @param retriesLeft Number of retries remaining.
 * @param interval Delay before the next retry in milliseconds.
 */
async function retryImport<T>(
  componentImport: () => Promise<T>,
  retriesLeft = 2,
  interval = 800
): Promise<T> {
  try {
    return await componentImport();
  } catch (error: unknown) {
    if (retriesLeft <= 0) {
      const isChunkLoadError =
        error instanceof Error &&
        (error.name === 'ChunkLoadError' ||
          error.message.includes(
            'Failed to fetch dynamically imported module'
          ) ||
          error.message.includes('Importing a module script failed') ||
          error.message.includes('error loading dynamically imported module'));

      const storageKey = 'runjs_chunk_reload';
      const lastReload = sessionStorage.getItem(storageKey);
      const now = Date.now();

      // If a chunk load failed after an app update, refresh once to fetch fresh HTML assets
      if (
        isChunkLoadError &&
        (!lastReload || now - parseInt(lastReload, 10) > 10000)
      ) {
        sessionStorage.setItem(storageKey, String(now));
        window.location.reload();
        return new Promise<T>(() => {});
      }

      throw error;
    }

    await new Promise((resolve) => setTimeout(resolve, interval));
    return retryImport(componentImport, retriesLeft - 1, interval * 1.5);
  }
}

/**
 * Creates a React lazy component with automated retry logic for chunk loading failures.
 */
/* eslint-disable  @typescript-eslint/no-explicit-any */
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
): LazyExoticComponent<T> {
  return lazy(() => retryImport(componentImport));
}
