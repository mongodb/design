'use client';

import { PropsWithChildren, createContext, useContext } from 'react';
import { ComponentFields } from '@/client/contentStack/types';

interface ContentStackContextValue {
  components: Array<ComponentFields>;
}

const ContentStackContext = createContext<ContentStackContextValue>({
  components: [],
});

export function ContentStackContextProvider({
  components,
  children,
}: PropsWithChildren<ContentStackContextValue>) {
  return (
    <ContentStackContext.Provider
      value={{
        components,
      }}
    >
      {children}
    </ContentStackContext.Provider>
  );
}

export function useContentStackContext() {
  return useContext(ContentStackContext);
}
