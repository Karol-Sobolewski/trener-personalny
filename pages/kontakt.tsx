import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Main from "../components/layout/Main";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <meta name="description" content="Kontakt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-16 ">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
                Skontaktuj się ze&nbsp;mną
              </h1>

              <p className="mt-4 text-gray-500 sm:text-xl">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum labore provident impedit esse recusandae facere
                libero harum sequi. */}
              </p>
            </div>

            <div className="mt-8 md:mt-12">
              <dl className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <a
                  href="tel:669958538"
                  title="Zadzwoń do mnie"
                  className="flex flex-col justify-center align-middle rounded-lg border border-gray-100 dark:border-slate-400 shadow-sm hover:shadow-md duration-300 cursor-pointer px-4 py-8 text-center bg-white dark:bg-inherit"
                >
                  <dt className="order-last text-lg font-medium text-gray-500 pt-4">
                    669958538
                  </dt>

                  <dd className="text-4xl font-extrabold text-red-700 dark:text-red-200 md:text-5xl flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dd>
                </a>

                <a
                  href="mailto:kontakt@radeksenski.pl"
                  title="Napisz email"
                  className="flex flex-col justify-center align-middle rounded-lg border border-gray-100 dark:border-slate-400  shadow-sm hover:shadow-md duration-300 cursor-pointer px-4 py-8 text-center bg-white dark:bg-inherit"
                >
                  <dt className="order-last text-lg font-medium text-gray-500 pt-4">
                    kontakt@radeksenski.pl
                  </dt>

                  <dd className="text-4xl font-extrabold text-red-700 dark:text-red-200 md:text-5xl flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </dd>
                </a>

                <a
                  href="https://www.instagram.com/radek.senski/"
                  target="_blank"
                  title="Instagram"
                  className="flex flex-col justify-center align-middle rounded-lg border border-gray-100 dark:border-slate-400  shadow-sm hover:shadow-md duration-300 cursor-pointer px-4 py-8 text-center bg-white dark:bg-inherit"
                >
                  <dt className="order-last text-lg font-medium text-gray-500 pt-4">
                    Radek Senski
                  </dt>

                  <dd className="text-4xl font-extrabold text-red-700 dark:text-red-200 md:text-5xl flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-10 h-10"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </dd>
                </a>
              </dl>
            </div>
          </div>
        </section>
        <ContactForm />
      </Main>
    </>
  );
}
