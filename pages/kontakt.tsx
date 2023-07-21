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
        <title>Kontakt - Warszawa - Radek Trener</title>
        <meta name="description" content="Kontakt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#b91c1c" />
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
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
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
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </dd>
                </a>

                <a
                  href="https://www.instagram.com/radek.senski/"
                  target="_blank"
                  rel="nofollow noreferrer"
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
                      className="w-8 h-8"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </dd>
                </a>
              </dl>
            </div>
          </div>
        </section>
        <section className="text-gray-900 text-center rounded-lg dark:shadow-none md:mx-16 mb-16 pt-16 pb-8 shadow-sm hover:shadow-md px-4 py-8 mx-4 bg-white dark:bg-inherit  dark:border-slate-400">
          <div className="max-w-screen-xl px-4 flex justify-center align-middle mb-16">
            <div className="max-w-3xl w-full">
              <dl>
                <a
                  href="https://maps.app.goo.gl/SbazARXSfZMtg9Hn7"
                  target="_blank"
                  title="Sprawdź na mapie"
                  className="flex flex-col justify-center align-middle"
                >
                  <dt className="order-last text-lg font-medium text-gray-500 pt-4">
                    Wawelska 5 <br /> 02-034 Warszawa
                  </dt>

                  <dd className="text-4xl font-extrabold text-red-700 dark:text-red-200 md:text-5xl flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 shrink-0 text-red-700 dark:text-red-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </dd>
                </a>
              </dl>
            </div>
          </div>
          <div className="max-w-screen-xl px-4 flex justify-center align-middle mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9778.320829310831!2d20.9925103!3d52.2146758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdce4a930207%3A0x1ed62dc649e93369!2sRadek%20Senski%20-%20Trener!5e0!3m2!1spl!2spl!4v1689926750806!5m2!1spl!2spl"
              width="600"
              height="450"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <ContactForm />
      </Main>
    </>
  );
}
