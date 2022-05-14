import { ParallaxProvider } from "react-scroll-parallax";

import Script from "next/script";
import { useRouter } from "next/router";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import { getImages } from "../utils/utils";

const Layout = ({ children, pageConfig, globalConfig }) => {
  const {
    title: pTitle,
    description: pDescription,
    openGraphImage: pImage,
  } = pageConfig;
  const { title: sTitle, url: sUrl } = globalConfig;
  const router = useRouter();
  const title = pTitle ? `${pTitle} | ${sTitle}` : sTitle;
  const url = `${sUrl}${router.asPath}`;
  const image = getImages(pImage);

  return (
    <>
      <ParallaxProvider>
        <Head>
          <title>{title}</title>

          <meta name="description" content={pDescription} />
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
          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={pDescription} />
          <meta itemProp="url" content={url} />
          <meta itemProp="image" content={image} />

          {/* Open Graph properties */}
          <meta property="og:site_name" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={pDescription} />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={image} />
          <meta property="og:type" content="website" />

          {/* Twitter integration */}
          <meta name="twitter:title" content={title} />
          <meta name="twitter:url" content={url} />
          <meta name="twitter:image" content={image} />
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
        <Header />
        <div className="outer-wrapper">{children}</div>
        <Footer />
      </ParallaxProvider>
    </>
  );
};

export default Layout;
