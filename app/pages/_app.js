import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import "../styles.css";
import MainLayout from "../Layout/MainLayout";

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href="/favicon.png" /> */}
        <title>Chris TP</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <ReactQueryDevtools position="bottom-right" containerElement="div" />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
