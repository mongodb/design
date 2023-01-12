import { createContext, useContext } from 'react';
import { ComponentFields, ContentPageGroup } from 'utils/types';

interface AppContextValue {
  components: Array<ComponentFields>;
  contentPageGroups: Array<ContentPageGroup>;
}
const AppContext = createContext<AppContextValue>({
  components: [],
  contentPageGroups: [],
});

export function AppContextProvider({
  components,
  contentPageGroups,
  children,
}) {
  return (
    <AppContext.Provider
      value={{
        components,
        contentPageGroups,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
