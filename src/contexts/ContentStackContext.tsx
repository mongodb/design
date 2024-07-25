"use client";

import { PropsWithChildren, createContext, useContext } from 'react';
import { ComponentFields, ContentPageGroup } from '@/utils/ContentStack/types';

interface ContentStackContextValue {
  components: Array<ComponentFields>;
  contentPageGroups: Array<ContentPageGroup>;
};

const ContentStackContext = createContext<ContentStackContextValue>({
  components: [],
  contentPageGroups: [],
});

export function ContentStackContextProvider({
  components,
  contentPageGroups,
  children,
}: PropsWithChildren<ContentStackContextValue>) {
  return (
    <ContentStackContext.Provider
      value={{
        components,
        contentPageGroups,
      }}
    >
      {children}
    </ContentStackContext.Provider>
  );
};

export function useContentStackContext() {
  return useContext(ContentStackContext);
};
