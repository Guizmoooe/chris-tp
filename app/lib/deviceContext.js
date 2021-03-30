import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  return (
    <AppContext.Provider value={isDesktopOrLaptop}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
