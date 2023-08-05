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
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import {
  GetPostsDocument,
  GetPostsPagesDocument,
  GetPostsPagesQuery,
  GetPostsPaginationDocument,
  GetPostsPaginationQuery,
  GetPostsPaginationQueryVariables,
  GetPostsQuery,
  useGetPostsPagesQuery,
} from "../../generated/graphql";
import Pagination from "../../components/common/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function BlogPage({
  data, postsPerPage
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
  
  const [currentPage, setCurrentPage] = useState(1);
  const postsPages = useGetPostsPagesQuery();
  const postsNumber = postsPages.data?.postsConnection.pageInfo.pageSize

  const paginate = (pageNumber: number) => {
    if (pageNumber === 1) {
      router.push("/blog");
    }
    setCurrentPage(pageNumber);
    router.push(`/blog/strona/${pageNumber}`);
  };

  return (
    <>
      <Head>
        <title>Blog - Warszawa Mokotów  - Radek Trener</title>
        <meta name="description" content="Odkryj fascynujący świat fitnessu i zdrowego stylu życia na moim blogu. Znajdziesz tu inspirujące artykuły, porady i cenne wskazówki na temat treningu, odżywiania i osiągania wymarzonej formy fizycznej. Bądź na bieżąco z najnowszymi trendami i badaniami w dziedzinie fitnessu, które pomogą Ci osiągnąć najlepsze rezultaty. Zapraszam Cię do dołączenia do społeczności, która dąży do zdrowszego i bardziej aktywnego życia. Niezależnie od Twojego poziomu zaawansowania, znajdziesz tu cenne wskazówki, które pomogą Ci pokonać swoje wyzwania i osiągnąć sukces fitness." />
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
        <Pagination
          currentPage={1}
          paginate={paginate}
          postsNumber={postsNumber}
          postsPerPage={postsPerPage}
        />
      </Main>
    </>
  );
}

export const getStaticProps = async () => {

    //! PostsPerPage + [pageId]
    
  const postsPerPage = 6

  const { data } = await apolloClient.query<
    GetPostsPaginationQuery,
    GetPostsPaginationQueryVariables


  >({
    variables: {
      first: postsPerPage,
      skip: 0,
    },
    query: GetPostsPaginationDocument,
  });

  return {
    props: {
      data,
      postsPerPage
    },
    revalidate: 60 * 15,
  };
};
