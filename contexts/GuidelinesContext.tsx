import { createContext, useContext, useState } from 'react';

export type BreadcrumbHeader = 'h2' | 'h4';

interface GuidelineHeader {
  text: string;
  type: BreadcrumbHeader;
}

interface GuidelinesContextValue {
  headers: Array<GuidelineHeader>;
  pushHeader: (headerType: BreadcrumbHeader, headerText: string) => void;
}
const GuidelinesContext = createContext<GuidelinesContextValue>({
  headers: [],
  pushHeader: () => {},
});

export function GuidelinesContextProvider({ children }) {
  const [headers, setHeaders] = useState<Array<GuidelineHeader>>([]);
  const pushHeader = (headerType: BreadcrumbHeader, headerText: string) =>
    setHeaders(oldHeaders => [
      ...oldHeaders,
      { text: headerText, type: headerType },
    ]);

  return (
    <GuidelinesContext.Provider
      value={{
        headers,
        pushHeader,
      }}
    >
      {children}
    </GuidelinesContext.Provider>
  );
}

export function useGuidelinesContext() {
  return useContext(GuidelinesContext);
}
