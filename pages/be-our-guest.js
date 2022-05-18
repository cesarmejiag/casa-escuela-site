import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";

import ImageSwicher from "../components/ImageSwicher";
import InviewElement from "../components/InviewElement";

import { findContentBySlug, findContentByType } from "../utils/utils";

export async function getServerSideProps({ locale }) {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "be-our-guest"][0]{
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

const BeOurGuest = ({ data, globalConfig }) => {
  const { locale } = useRouter();
  const { title, description, content, openGraphImage } = data;

  const intro = findContentBySlug("be-our-guest", content);
  const host = findContentBySlug("host-an-event", content);
  const sayab = findContentBySlug("sayab", content);
  const sayabBottom = findContentBySlug("sayab-bottom", content);
  const link = findContentByType("link", content);

  return (
    <BackgroundColor
      cSrcD=""
      cSrcM=""
      cColor="#ecf0f8"
      cHeight="10%"
      cPosition="bottom"
    >
      <Layout
        pageConfig={{ title, description, openGraphImage }}
        globalConfig={globalConfig}
      >
        {/* Intro Section */}
        <Section
          id={intro.slug.current}
          title={intro?.title?.[locale]}
          intro={intro?.intro?.[locale]}
          imagesSrc={intro.desktopImages}
          mobileImagesSrc={intro.mobileImages}
          footer={intro?.footer?.[locale]}
          withMarginTop
        >
          <BottomLink path="/contact" text="Book your stay" paddingStyle={1} />
        </Section>

        {/* Host Section */}
        <BackgroundColor
          cSrcD="/images/bckBOGD1.svg"
          cSrcM="/images/bckBOGM1.svg"
          cColor="#b96241"
          cHeight="80%"
        >
          <Section id={host.slug.current} title={host?.title?.[locale]}>
            <div className="host-wrapper">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <InviewElement>
                    <div className="host-image">
                      <ImageSwicher
                        imagesSrc={host.desktopImages}
                        mobileImagesSrc={host.mobileImages}
                        imageCaption={host?.imageCaption?.[locale]}
                        cColor="#f5f3ef"
                      />
                    </div>
                  </InviewElement>
                </div>
                <div className="col-12 col-md-6">
                  <div className="host-body">
                    <InviewElement>
                      <div className="section-body">
                        <BlockContent blocks={host?.body?.[locale]} />
                        <br />
                        <Link href="/contact">
                          <a className="gplk-btn">Book your event</a>
                        </Link>
                      </div>
                    </InviewElement>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </BackgroundColor>

        {/* Sayab Section */}
        <BackgroundColor
          cSrcD=""
          cSrcM=""
          cColor="#ecf0f8"
          cHeight="25%"
          cPosition="bottom"
        >
          <Section
            id={sayab.slug.current}
            title={sayab?.title?.[locale]}
            intro={sayab?.intro?.[locale]}
            footer={sayab?.footer?.[locale]}
          >
            <div className="section-image">
              <InviewElement>
                <div className="sayab-image">
                  <ImageSwicher
                    imagesSrc={sayab.desktopImages}
                    mobileImagesSrc={sayab.mobileImages}
                  />
                </div>
              </InviewElement>
            </div>
          </Section>
        </BackgroundColor>

        {/* Sayab Bottom Section */}
        <BackgroundColor cSrcD="" cSrcM="" cColor="#ecf0f8" cHeight="100%">
          <Section
            id={sayabBottom.slug.current}
            intro={sayabBottom?.intro?.[locale]}
          >
            <BottomLink
              path={link.href}
              text={link?.text?.[locale]}
              paddingStyle={4}
            />
          </Section>
        </BackgroundColor>
        <style jsx>{`
          .host-wrapper {
            margin-top: 45px;
          }

          .host-image {
            margin-bottom: 60px;
            padding-bottom: 125%;
            position: relative;
          }

          .host-body {
            margin: 0 auto;
            max-width: 560px;
          }

          .sayab-footer {
            font-size: 12px;
            margin: 45px auto 0;
            max-width: 392px;
            text-align: center;
            text-transform: uppercase;
          }

          .sayab-image {
            margin-left: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
            margin-right: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
            padding-bottom: 78%;
            position: relative;
          }

          @media screen and (min-width: 768px) {
            .host-wrapper {
              margin-top: 100px;
            }

            .host-image {
              margin-bottom: 0;
              padding-bottom: 112%;
            }

            .host-body {
              margin: 0 0 0 auto;
            }

            .sayab-footer {
              margin: 50px auto 0;
            }

            .sayab-image {
              margin-left: 0;
              margin-right: 0;
              padding-bottom: 46.6%;
            }
          }
        `}</style>
      </Layout>
    </BackgroundColor>
  );
};

export default BeOurGuest;
