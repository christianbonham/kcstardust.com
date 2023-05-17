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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
