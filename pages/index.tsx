import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/about/AboutMe";
import Hero from "../components/layout/Hero";
import Main from "../components/layout/Main";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Main>
        <AboutMe />
      </Main>
    </>
  );
};

export default Home;
