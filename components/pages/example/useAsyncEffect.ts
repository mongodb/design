import { DependencyList, useEffect } from 'react';

/**
 * A `useEffect` wrapper that calls an async function,
 * and ensures that the calling component is still mounted
 * before triggering any effects.
 *
 * TODO: Move this hook to @leafygreen-ui/hooks
 */
export function useAsyncEffect<T>(
  asyncFn: () => Promise<T>,
  functions?: {
    then?: (data: T) => void;
    catch?: (err: any) => void;
    finally?: () => void;
    cleanup?: () => void;
  },
  condition = true,
  depsArr?: DependencyList,
) {
  const deps: DependencyList = depsArr ?? [];

  useEffect(() => {
    // initially this is mounted
    let isMounted = true;

    if (condition) {
      asyncFn()
        // By checking for `isMounted`, we avoid performing state updates on an unmounted component
        .then(data => {
          if (isMounted) {
            functions?.then?.(data);
          }
        })
        .catch(err => {
          if (isMounted) {
            functions?.catch?.(err);
          }
        })
        .finally(() => {
          if (isMounted) {
            functions?.finally?.();
          }
        });
    }

    return () => {
      // on cleanup, set `isMounted` to false
      isMounted = false;
      functions?.cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
}
