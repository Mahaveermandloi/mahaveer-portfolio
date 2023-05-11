import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="As a developer with a keen eye for detail and a thirst for knowledge, I am dedicated to creating high-quality, user-friendly websites and applications on the web."
        />
        <meta
          name="keywords"
          content="frontend developer, react, next.js, portfolio, web development"
        />
        <meta name="author" content="Nigar Safarova" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nigar Safarova" />
        <meta
          property="og:description"
          content="As a developer with a keen eye for detail and a thirst for knowledge, I am dedicated to creating high-quality, user-friendly websites and applications on the web."
        />
        <meta property="og:image" content="/images/nigar.jpg" />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
