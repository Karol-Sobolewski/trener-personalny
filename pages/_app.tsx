import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import Layout from "../components/layout/Layout";
import Loading from "../components/common/Loading";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { apolloClient } from "../graphql/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loading />}>
            <Component {...pageProps} />
          </Suspense>
        </QueryClientProvider>
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
