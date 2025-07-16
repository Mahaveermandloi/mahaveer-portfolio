import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A passionate full-stack developer with a keen eye for detail and a drive to build secure, scalable, and user-centric web applications. Currently interning at KPMG in the Cyber Strategy & Governance team."
        />
        <meta
          name="keywords"
          content="frontend developer, react, next.js, portfolio, web development"
        />
        <meta name="author" content="Mahaveer Mandloi" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mahaveer Mandloi" />
        <meta
          property="og:description"
          content="A passionate full-stack developer with a keen eye for detail and a drive to build secure, scalable, and user-centric web applications. Currently interning at KPMG in the Cyber Strategy & Governance team."
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
