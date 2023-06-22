import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import Hero from "../components/layout/Hero";
import Main from "../components/layout/Main";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Main>Strona Główna</Main>
    </>
  );
};

export default Home;
