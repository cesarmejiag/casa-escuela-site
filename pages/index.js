import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ImageSwicher from "../components/ImageSwicher";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";
import InviewElement from "../components/InviewElement";

import { findContentBySlug, findContentByType } from "../utils/utils";

export async function getServerSideProps({ locale }) {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "home"][0]{
      slug,
      "title": title[$lang],
      content,
      "description": description[$lang],
      openGraphImage
    }`,
    { lang: locale }
  );

  return {
    props: {
      data,
    },
  };
}

export default function Home(){
  return(
    <div className="outer-wrapper">
      <section className="block general">
        <div className="holder">
          <div className="container-fluid">
            <div className="content">
              <div className="text">
                Comming soon...
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .block.general{
          background: #f5f3ef;
          height: 100vh;
          position: relative;
          width: 100%;
        }
        .block.general .text{
          color: #384c48;
          font-family: "RecifeDisplay-Light";
          font-size: 40px;
          letter-spacing: 0;
          left: 50%;
          line-height: 50px;
          position: absolute;
          text-align: center;
          top: 50%;
          -webkit-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
          width: 100%;
        }
        .block.general:before{
          background: url("images/logo.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          content: "";
          height: 20px;
          left: 50%;
          position: absolute;
          top: 60px;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          width: 202px;
        }
        .block.general:after {
          background: url("images/icon-ce.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          bottom: 60px;
          content: "";
          display: block;
          height: 32px;
          left: 50%;
          position: absolute;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          width: 49px;
        }
        .outer-wrapper{
          background-color: #f5f3ef;
          margin-bottom: 0px !important; 
          margin-top: 0px !important;
          position: relative;
          z-index: 1;
        }
        @media screen and (min-width: 768px){
          .outer-wrapper{
            margin-bottom: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}

/*export default function Home({ data, globalConfig }) {
  const { locale } = useRouter();
  const { description, content, openGraphImage } = data;

  const hero = findContentBySlug("hero", content);
  const whatWeDo = findContentBySlug("what-we-do", content);
  const homeTo = findContentBySlug("home-to", content);
  const link = findContentByType("link", content);

  return (
    <Layout
      pageConfig={{ description, openGraphImage }}
      globalConfig={globalConfig}
    >
      <Hero
        id={hero.slug.current}
        text={hero?.text?.[locale]}
        imagesSrc={hero.desktopImages}
        mobileImagesSrc={hero.mobileImages}
      />

      {/* What We Do Section }
      <Section
        id={whatWeDo.slug.current}
        title={whatWeDo?.title?.[locale]}
        introText={whatWeDo?.intro?.[locale]}
      >
        <InviewElement>
          <div className="section-image">
            <div className="what-we-do-image">
              <ImageSwicher
                imagesSrc={whatWeDo.desktopImages}
                mobileImagesSrc={whatWeDo.mobileImages}
              />
            </div>
          </div>
        </InviewElement>
      </Section>

      {/* Home To Section }
      <BackgroundColor
        cSrcD="./images/bckhomeD.svg"
        cSrcM="./images/bckHomeM.svg"
        cColor="#dfe3da"
        cHeight="75%"
      >
        <Section id={homeTo.slug.current} intro={homeTo?.intro?.[locale]}>
          <div className="home-to-wrapper">
            <div className="row">
              <div className="col-12 col-lg-8">
                <InviewElement>
                  <div className="home-to-image-1">
                    <ImageSwicher
                      imagesSrc={homeTo.desktopImages1}
                      mobileImagesSrc={homeTo.mobileImages1}
                      parallaxSpeed={3}
                    />
                  </div>
                </InviewElement>
                <InviewElement>
                  <div className="home-to-image-2">
                    <ImageSwicher
                      imagesSrc={homeTo.desktopImages2}
                      mobileImagesSrc={homeTo.mobileImages2}
                      parallaxSpeed={8}
                      textPosition={4}
                    />
                  </div>
                </InviewElement>
              </div>
              <div className="col-12 col-lg-4">
                <InviewElement>
                  <div className="home-to-text">
                    <BlockContent blocks={homeTo?.text?.[locale]} />
                  </div>
                </InviewElement>
              </div>
            </div>
          </div>
        </Section>
      </BackgroundColor>

      { Bottom Section }
      <BottomLink href={link.href} text={link?.text?.[locale]} />

      <style jsx>{`
        .what-we-do-image {
          margin-left: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
          margin-right: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
          padding-bottom: 78%;
          position: relative;
        }

        .home-to-wrapper {
          margin-top: 80px;
        }

        .home-to-image-1 {
          padding-bottom: 120.252%;
          position: relative;
          width: 90.207%;
        }

        .home-to-image-2 {
          left: 15%;
          margin-top: -20%;
          padding-bottom: 81.494%;
          position: relative;
          width: 85%;
        }

        .home-to-text {
          margin-top: 60px;
          max-width: 245px;
        }

        @media screen and (min-width: 768px) {
          .what-we-do-image {
            margin-left: 0;
            margin-right: 0;
            padding-bottom: 46%;
          }

          .home-to-wrapper {
            margin-top: 100px;
          }

          .home-to-text {
            max-width: 350px;
          }
        }

        @media screen and (min-width: 992px) {
          .home-to-image-1 {
            padding-bottom: 80.252%;
            width: 90.207%;
          }

          .home-to-image-2 {
            left: 45%;
            margin-top: -25%;
            padding-bottom: 83.764%;
            width: 87.63%;
          }
        }
      `}</style>
    </Layout>
  );
}
*/
