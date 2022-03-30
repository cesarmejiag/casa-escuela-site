import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pageTitle }) => {
  const siteTitle = "Casa Escuela";
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="outer-wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
