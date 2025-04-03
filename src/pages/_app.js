import "@/styles/globals.css";
import "aos/dist/aos.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
