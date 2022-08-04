import { createContext, useContext } from 'react';

const AppContext = createContext({});

export function AppContextProvider({ components, children }) {

  return (
    <AppContext.Provider value={{
      components
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}