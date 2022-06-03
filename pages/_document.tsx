/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Open+Sans"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Raleway"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css2?family=Courgette&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css2?family=Kalam&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
