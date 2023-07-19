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
import { GetPostsDocument, GetPostsPagesDocument, GetPostsPagesQuery, GetPostsPaginationDocument, GetPostsPaginationQuery, GetPostsPaginationQueryVariables, GetPostsQuery } from "../../../generated/graphql";
import Pagination from "../../../components/common/Paginations";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BlogPage({
  data,
  page,
  pageSize,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!data || !data.posts) return <Loading />;
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(page);
  const pageNumberLimit = 5;
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [paginationPages, setPaginationPages] = useState(pageSize);

  const paginate = (pageNumber: number) => {
    if (pageNumber === 1) {
      router.push("/blog");
    }
    setCurrentPage(pageNumber);
    if (pageNumber < pageNumberLimit - 2) {
      setMaxPageLimit(pageNumberLimit);
    } else {
      setMaxPageLimit(pageNumber + 2);
    }
    setMinPageLimit(pageNumber - 3);
    router.push(`${pageNumber}`);
  };

  return (
    <>
      <Head>
        <title>Blog - Warszawa - Radek Trener</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        {/* <div className="inline-flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Poprzednia Strona</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <p className="text-xs text-gray-900">
            1<span className="mx-0.25">/</span>5
          </p>

          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Następna Strona</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div> */}
        <Pagination
            currentPage={page}
            paginate={paginate}
            totalPages={paginationPages}
            minPageLimit={minPageLimit}
            maxPageLimit={maxPageLimit}
          />
      </Main>
    </>
  );
}

export const getStaticPaths = async () => {
    return {
      paths: Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
          console.log(`i`, i)
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
        first: 1,
        skip: page - 1,
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
      },
    };
  };
