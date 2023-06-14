import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head />
      <body className="bg-gray-100 dark:bg-slate-800 flex flex-col min-h-screen dark:text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
