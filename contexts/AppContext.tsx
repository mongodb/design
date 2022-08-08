import { createContext, useContext } from 'react';

const AppContext = createContext<any>({});

export function AppContextProvider({ components, contentPageSections, children }) {

  return (
    <AppContext.Provider value={{
      components,
      contentPageSections
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}