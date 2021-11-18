import React from "react";
import { createContext, useContext } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const DeviceContext = createContext();

// Hook for using media queries for conditional rendering
// Usage example:
// let isPageWide = useMediaQuery('(min-width: 800px)')

export function DeviceContextProvider({ children }) {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1025px)");

  return (
    <DeviceContext.Provider value={isDesktopOrLaptop}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDeviceContext() {
  return useContext(DeviceContext);
}
