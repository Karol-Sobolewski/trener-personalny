import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import Layout from "../components/layout/Layout";
import Loading from "../components/common/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </Suspense>
    </Layout>
  );
}

export default MyApp;
