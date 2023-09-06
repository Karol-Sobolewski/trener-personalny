import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Main from "../../../components/layout/Main";
import WhoAmI from "../../../components/about/WhoAmI";
import WhyMe from "../../../components/about/WhyMe";
import ContactForm from "../../../components/ContactForm";
import BlogCard from "../../../components/common/BlogCard";
import { useQuery, gql } from "@apollo/client";
import Loading from "../../../components/common/Loading";
import { apolloClient } from "../../../graphql/apolloClient";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { GetPostsDocument, GetPostsPagesDocument, GetPostsPagesQuery, GetPostsPaginationDocument, GetPostsPaginationQuery, GetPostsPaginationQueryVariables, GetPostsQuery, useGetPostsPagesQuery } from "../../../generated/graphql";
import Pagination from "../../../components/common/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function BlogPage({
  data,
  page,
  pageSize,
  postsPerPage
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
 

  useEffect(() => {
    if (!data || !data.posts) {
      router.push("/404");
    }
  }, []);

  if (!data || !data.posts) {
    return null;
  } 
  

  const [currentPage, setCurrentPage] = useState(page);

  const postsPages = useGetPostsPagesQuery();
  const postsNumber = postsPages.data?.postsConnection.pageInfo.pageSize

  const paginate = (pageNumber: number) => {
    if (pageNumber === 1) {
      router.push("/blog");
    }

    setCurrentPage(pageNumber);
    router.push(`${pageNumber}`);
  };

  return (
    <>
      <Head>
        <title>Blog - Warszawa Centrum  - Radek Trener</title>
        <meta name="description" content={'Odwiedź drugą' + page + 'mojego bloga i kontynuuj swoją inspirującą podróż ku zdrowszemu życiu. Znajdziesz tu bogactwo ciekawych treści, zaawansowanych porad i eksperckich wskazówek, które pomogą Ci w osiągnięciu doskonałej kondycji fizycznej i mentalnej. Odkryj różnorodne treningi, plany żywieniowe, a także unikalne wyzwania, które pobudzą Twoją motywację i przyniosą wymierne rezultaty. Bądź na bieżąco z najnowszymi osiągnięciami w świecie fitnessu i zainspiruj się sukcesami innych osób, które już zmieniły swoje życie na lepsze.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#b91c1c" />
      </Head>
      <Main>
        <div className="mx-auto max-w-screen-xl pt-12 md:pt-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
            Blog
          </h1>
        </div>
        <div className="flex flex-wrap justify-center mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-16 ">
          {data.posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <Pagination
            currentPage={page}
            paginate={paginate}
            postsNumber={postsNumber}
            postsPerPage={postsPerPage}
          />
      </Main>
    </>
  );
}

export const getStaticPaths = async () => {
    return {
      paths: Array.from({ length: 3 }, (_, i) => i + 1).map((i) => {
          return {
          params: {
            pageId: i.toString(),
          },
        };
      }),
      fallback: true,
    };
  };
  
  export type InferGetStaticPathsType<T> = T extends () => Promise<{
    paths: Array<{ params: infer R }>;
  }>
    ? R
    : never;
  
  export const getStaticProps = async ({
    params,
  }: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {


    const page = Number(params?.pageId) || 1;

    //! PostsPerPage + index

    const postsPerPage = 6

    if (!params?.pageId) {
      return {
        props: {},
        notFound: true,

      };
    }

   


    const { data } = await apolloClient.query<
      GetPostsPaginationQuery,
      GetPostsPaginationQueryVariables
    >({
      variables: {
        first: postsPerPage,
        skip: postsPerPage * (page - 1),
      },
      query: GetPostsPaginationDocument,
    });
  
    const postsConnection = await apolloClient.query<GetPostsPagesQuery>({
      query: GetPostsPagesDocument,
    });
  
    const pageSize = postsConnection.data.postsConnection.pageInfo.pageSize;
    return {
      props: {
        data,
        page: page,
        pageSize: pageSize,
        postsPerPage,
      },
      revalidate:  60 * 15
    };
  };
