import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import "../styles.css";
import MainLayout from "../Layout/MainLayout";
import { AppWrapper } from "../lib/deviceContext";

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href="/favicon.png" /> */}
        <title>Chris TP</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <AppWrapper>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AppWrapper>
        <ReactQueryDevtools position="bottom-right" containerElement="div" />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
