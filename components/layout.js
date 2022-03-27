import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

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
