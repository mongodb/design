import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useDynamicRefs, usePrevious } from '@leafygreen-ui/hooks';

export type BreadcrumbHeader = 'h2' | 'h4';

interface GuidelineHeader {
  text: string;
  type: BreadcrumbHeader;
}

interface GuidelinesContextValue {
  headers: Array<GuidelineHeader>;
  pushHeader: (headerType: BreadcrumbHeader, headerText: string) => void;
  activeHeaderIndex: number;
  componentName?: string;
  getHeaderRef: (
    key?: string | undefined,
  ) => React.RefObject<unknown> | undefined;
}
const GuidelinesContext = createContext<GuidelinesContextValue>({
  headers: [],
  pushHeader: () => {},
  activeHeaderIndex: 0,
  componentName: '',
  getHeaderRef: () => undefined,
});

/**
 * https://codesandbox.io/s/highlight-menu-item-on-scroll-x0gzn?file=/src/ScrollHighlightNabbar/ScrollHighlightNabbar.js:127-1523
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
const nearestScrolledRefIndex = (
  currentPosition,
  headers,
  startIndex,
  endIndex,
  getHeaderRef,
  componentName,
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        getHeaderRef(`${componentName}-${headers[startIndex].text}`)?.current
          .offsetTop - currentPosition,
      ) <
      Math.abs(
        getHeaderRef(`${componentName}-${headers[endIndex].text}`)?.current
          .offsetTop - currentPosition,
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    const nextNearest = ~~((startIndex + endIndex) / 2);
    const a = Math.abs(
      getHeaderRef(`${componentName}-${headers[nextNearest].text}`)?.current
        .offsetTop - currentPosition,
    );
    const b = Math.abs(
      getHeaderRef(`${componentName}-${headers[nextNearest + 1].text}`)?.current
        .offsetTop - currentPosition,
    );

    if (a < b) {
      return nearestScrolledRefIndex(
        currentPosition,
        headers,
        startIndex,
        nextNearest,
        getHeaderRef,
        componentName,
      );
    } else {
      return nearestScrolledRefIndex(
        currentPosition,
        headers,
        nextNearest,
        endIndex,
        getHeaderRef,
        componentName,
      );
    }
  }
};

export function GuidelinesContextProvider({ children, componentName }) {
  const router = useRouter();
  const [headers, setHeaders] = useState<Array<GuidelineHeader>>([]);
  const pushHeader = (headerType: BreadcrumbHeader, headerText: string) =>
    setHeaders(oldHeaders => [
      ...oldHeaders,
      { text: headerText, type: headerType },
    ]);
  const getHeaderRef = useDynamicRefs({
    prefix: `${componentName}-guideline-header`,
  });
  const [activeHeaderIndex, setActiveHeaderIndex] = useState(0);

  useEffect(() => {
    if (headers.length > 0) {
      const scrollContainer = document.querySelector('#scroll-container');

      if (scrollContainer) {
        const handleScroll = e => {
          const index = nearestScrolledRefIndex(
            scrollContainer.scrollTop,
            headers,
            0,
            headers.length - 1,
            getHeaderRef,
            componentName,
          );
          setActiveHeaderIndex(index - 1);
        };
        scrollContainer.addEventListener('scroll', handleScroll);
        return () => {
          scrollContainer.removeEventListener('scroll', handleScroll);
        };
      }
    }
  }, [headers]);

  useEffect(() => {
    const startHandler = () => {
      setHeaders([]);
    };
    router.events.on('routeChangeStart', startHandler);
    return () => {
      router.events.off('routeChangeStart', startHandler);
    };
  }, []);

  return (
    <GuidelinesContext.Provider
      value={{
        headers,
        pushHeader,
        componentName,
        getHeaderRef,
        activeHeaderIndex,
      }}
    >
      {children}
    </GuidelinesContext.Provider>
  );
}

export function useGuidelinesContext() {
  return useContext(GuidelinesContext);
}
