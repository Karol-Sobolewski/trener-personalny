import Head from "next/head";
import Link from "next/link";
import Main from "../components/layout/Main";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="404" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="grid h-screen px-4 bg-white place-content-center">
          <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">404</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uh-oh!
            </p>

            <p className="mt-4 text-gray-500">Brak strony</p>

            <Link
              href="/"
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white dark:text-gray-900 bg-red-700 rounded hover:bg-red-700/75 dark:bg-red-200 focus:outline-none focus:ring"
            >
              Wróć na stronę główną
            </Link>
          </div>
        </div>
      </Main>
    </>
  );
}
