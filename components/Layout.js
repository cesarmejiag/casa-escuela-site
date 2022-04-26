import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "../components/Preloader";

const getSessionItem = (key) => typeof sessionStorage !== 'undefined' && sessionStorage.getItem(key);
const setSessionItem = (key, value) => typeof sessionStorage !== 'undefined' && sessionStorage.setItem(key, value);

const Layout = ({ children, pageTitle }) => {
  const siteTitle = "Casa Escuela - Welcome Home";
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const [preloaderState, setPreloaderState] = useState({
    loading: true,
    inDOM: true,
  });

  const router = useRouter();
  const { inDOM, loading } = preloaderState;
  const preloaderShown = getSessionItem("preloader-shown");

  // This is a fucking bad idea!
  useEffect(() => {
    setTimeout(() => {
      setPreloaderState({ ...preloaderState, loading: false });
      setTimeout(() => {
        setPreloaderState({ ...preloaderState, inDOM: false });
        setSessionItem("preloader-shown", true);
      }, 600);
    }, 1500);
  }, []);

  return (
    <>
      {inDOM && router.asPath === "/" && !preloaderShown && false &&  (
        <Preloader loading={loading} />
      )}
      <ParallaxProvider>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/favicons/apple-icon-114x114.png"
          />
        </Head>
        <Header />
        <div className="outer-wrapper">{children}</div>
        <Footer />
      </ParallaxProvider>
    </>
  );
};

export default Layout;
