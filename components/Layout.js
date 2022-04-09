import { ParallaxProvider } from "react-scroll-parallax";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pageTitle }) => {
  const siteTitle = "Casa Escuela";
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  return (
    <>
      <ParallaxProvider>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        </Head>
        <Header />
        <div className="outer-wrapper">{children}</div>
        <Footer />
      </ParallaxProvider>
    </>
  );
};

export default Layout;
