import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Houston Area NET Support Group</title>
        <meta
          name="description"
          content="We bring together those in the broader Houston area that are living with, affected by, and are interested in Neuroendocrine/Carcinoid Cancer"
        />
        <meta
          name="keywords"
          content="Cancer,Neuroendocrine,Carcinoid,Houston,Texas,US"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
