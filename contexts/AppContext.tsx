import { createContext, useContext } from 'react';

// TODO: TS type
const AppContext = createContext<any>({});

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
