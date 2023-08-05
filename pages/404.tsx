import Head from "next/head";
import Link from "next/link";
import Main from "../components/layout/Main";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>404 - Warszawa Mokotów - Radek Trener</title>
        <meta
          name="description"
          content="Ups! Wygląda na to, że trafiłeś na stronę 404 - nie ma strony, której szukasz. Ale nie martw się! Jesteśmy tutaj, aby Ci pomóc. Przekierujemy Cię na właściwą ścieżkę, abyś mógł kontynuować swoje odkrywanie. Zapraszamy na stronę główną, gdzie znajdziesz interesujące treści, ciekawe artykuły i wiele innych atrakcji. Nie pozwól, aby to jedno zawirowanie pokrzyżowało Twoje plany. Razem z nami znajdziesz to, czego szukasz. Dołącz do naszej społeczności i ciesz się przygodą wirtualnego świata pełnego możliwości i fascynujących treści."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#b91c1c" />
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
