import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Main from "../components/layout/Main";
import WhoAmI from "../components/about/WhoAmI";
import WhyMe from "../components/about/WhyMe";
import ContactForm from "../components/ContactForm";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>O mnie</title>
        <meta name="description" content="O mnie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="mx-auto max-w-screen-xl pt-12 md:pt-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
            O mnie
          </h1>
        </div>
        <WhoAmI />
        <WhyMe />
        <ContactForm />
      </Main>
    </>
  );
}
