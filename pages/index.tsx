import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/about/AboutMe";
import Hero from "../components/layout/Hero";
import Main from "../components/layout/Main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Radosław Senski trener personalny - Warszawa - Radek Trener</title>
        <meta
          name="description"
          content="Osiągnij swoje cele treningowe z Radkiem Senskim - Trenerem Personalnym. Indywidualne podejście, profesjonalne wsparcie i motywacja. Zdobądź wymarzoną formę!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Main>
        <AboutMe />
      </Main>
    </>
  );
};

export default Home;
