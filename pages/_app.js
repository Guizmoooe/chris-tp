import Head from "next/head";
import "../styles/globals.css";
import { DeviceContextProvider } from "../lib/DeviceContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href="/favicon.png" /> */}
        <title>Chris TP</title>
      </Head>
      <DeviceContextProvider>
        <Component {...pageProps} />
      </DeviceContextProvider>
    </>
  );
};

export default MyApp;
