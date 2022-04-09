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
        </Head>
        <Header />
        <div className="outer-wrapper">{children}</div>
        <Footer />
      </ParallaxProvider>
    </>
  );
};

export default Layout;
