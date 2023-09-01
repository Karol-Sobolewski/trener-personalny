import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/about/AboutMe";
import GoogleAnalytics from "../components/GAnalytics";
import Hero from "../components/layout/Hero";
import Main from "../components/layout/Main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Radosław Senski trener personalny - Warszawa Centrum - Radek Trener</title>
        <meta
          name="description"
          content="Osiągnij swoje cele treningowe z Radkiem Senskim - Trenerem Personalnym. Indywidualne podejście, profesjonalne wsparcie i motywacja. Zdobądź wymarzoną formę!"
        
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#b91c1c" />
        <meta name="google-site-verification" content="f-TWWsF5HInN9w5oAA-fKaQt02khacMeFtkBZFaB0ZM" />

      </Head>
      <Hero />
      <Main>
        <AboutMe />
      </Main>
    </>
  );
};

export default Home;
