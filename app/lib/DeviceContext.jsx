import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const DeviceContext = createContext();

export function DeviceContextWrapper({ children }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  return (
    <DeviceContext.Provider value={isDesktopOrLaptop}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDeviceContext() {
  return useContext(DeviceContext);
}
