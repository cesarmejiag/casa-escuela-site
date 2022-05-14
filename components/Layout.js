import { ParallaxProvider } from "react-scroll-parallax";

import Script from "next/script";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pageTitle, config }) => {
  const siteTitle = "Casa Escuela - Welcome Home";
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  return (
    <>
      <ParallaxProvider>
        <Head>
          <title>{title}</title>

          <meta name="description" content="page-description" />
          <meta name="keywords" content="page-keywords" />
          <meta name="author" content="Goplek" />
          <meta name="robots" content="INDEX, FOLLOW, ARCHIVE" />

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

          {/* Schema properties */}
          <meta itemProp="name" content="page-title" />
          <meta itemProp="description" content="page-description" />
          <meta itemProp="url" content="page-url" />
          <meta itemProp="image" content="image-url" />

          {/* Open Graph properties */}
          <meta property="fb:app_id" content="app-id" />
          <meta property="og:site_name" content="name" />
          <meta property="og:title" content="page-title" />
          <meta property="og:description" content="page-description" />
          <meta property="og:url" content="page-url" />
          <meta property="og:image" content="image-url" />
          <meta property="og:type" content="website" />

          {/* Twitter integration */}
          <meta name="twitter:title" content="page-title" />
          <meta name="twitter:url" content="page-url" />
          <meta name="twitter:image" content="image-url" />
          <meta name="twitter:card" content="summary" />
        </Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-Q7ZW24952M`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Q7ZW24952M', {
                  page_path: window.location.pathname
                });
            `,
          }}
        />
        <Header shopUrl={config.url} />
        <div className="outer-wrapper">{children}</div>
        <Footer />
      </ParallaxProvider>
    </>
  );
};

export default Layout;
