import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Main from "../../components/layout/Main";
import WhoAmI from "../../components/about/WhoAmI";
import WhyMe from "../../components/about/WhyMe";
import ContactForm from "../../components/ContactForm";
import BlogCard from "../../components/common/BlogCard";
import { useQuery, gql } from "@apollo/client";
import Loading from "../../components/common/Loading";
import { apolloClient } from "../../graphql/apolloClient";
import { InferGetStaticPropsType } from "next";
import { GetPostsDocument, GetPostsQuery } from "../../generated/graphql";

export default function BlogPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!data || !data.posts) return <Loading />;

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="flex flex-wrap justify-center mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-16 ">
          {data.posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <div className="inline-flex items-center justify-center gap-3">
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
        </div>
      </Main>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetPostsQuery>({
    query: GetPostsDocument,
  });

  return {
    props: {
      data,
    },
    revalidate: 15,
  };
};
