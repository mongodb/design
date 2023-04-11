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
  thenFn: (data: T) => void,
  catchFn: (err: any) => void,
  finallyFn: () => void,
  depsArr?: DependencyList,
) {
  const deps: DependencyList = depsArr ?? []

  useEffect(() => {
    let isMounted = true;

    asyncFn()
    // By checking for `isMounted`, we avoid performing state updates on an unmounted component
    .then((data) => {
      if (isMounted) {
        thenFn(data)
      }
    })
    .catch((err) => {
      if (isMounted) {
        catchFn(err)
      }
    })
    .finally(() => {
      if (isMounted) {
        finallyFn()
      }
    }
    )

    return () => {
      isMounted = false
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps])
}