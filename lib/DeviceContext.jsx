import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const DeviceContext = createContext(true);

export function DeviceContextProvider({ children }) {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  return (
    <DeviceContext.Provider value={isDesktopOrLaptop}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDeviceContext() {
  return useContext(DeviceContext);
}

// import { useEffect, useState, createContext, useContext } from "react";

// const DeviceContext = createContext({});

// export function DeviceContextProvider({ children }) {
//   // This is the exact same logic that we previously had in our hook

//   const [width, setWidth] = useState(window.innerWidth);
//   // const [height, setHeight] = useState(window.innerHeight);

//   const handleWindowResize = () => {
//     setWidth(window.innerWidth);
//     // setHeight(window.innerHeight);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);
//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);

//   /* Now we are dealing with a context instead of a Hook, so instead
//      of returning the width and height we store the values in the
//      value of the Provider */
//   return (
//     <DeviceContext.Provider value={width >= "1224px" ? true : false}>
//       {children}
//     </DeviceContext.Provider>
//   );
// }

// export function useDeviceContext() {
//   return useContext(DeviceContext);
// }
