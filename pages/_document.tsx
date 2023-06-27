import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
// import nightwind from "nightwind/helper";
const nightwind = require("nightwind/helper");

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
      <body className="bg-gray-100 flex flex-col min-h-screen antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
