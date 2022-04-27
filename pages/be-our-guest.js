import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";

import ImageSwicher from "../components/ImageSwicher";
import InviewElement from "../components/InviewElement";

import {
  findContentBySlug,
  findContentByType,
  getImages,
} from "../utils/utils";

export async function getServerSideProps() {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "be-our-guest"][0]{
      slug,
      title,
      content,
    }`
  );

  return {
    props: {
      data,
    },
  };
}

const BeOurGuest = ({ data: sectionsData }) => {
  const { title, content } = sectionsData;

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
      <Layout pageTitle={title}>
        {/* Intro Section */}
        <Section
          id={intro.slug.current}
          title={intro.title}
          intro={intro.intro}
          imagesSrc={getImages(intro.desktopImages)}
          mobileImagesSrc={getImages(intro.mobileImages)}
          footer={intro.footer}
          withMarginTop
        >
          <BottomLink path="/contact" text="Book your stay" paddingStyle={1} />
        </Section>

        {/* Host Section */}
        <BackgroundColor
          cSrcD="./images/bckBOGD1.svg"
          cSrcM="./images/bckBOGM1.svg"
          cColor="#b96241"
          cHeight="80%"
        >
          <Section id={host.slug.current} title={host.title}>
            <div className="host-wrapper">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <InviewElement>
                    <div className="host-image">
                      <ImageSwicher
                        imagesSrc={getImages(host.desktopImages)}
                        mobileImagesSrc={getImages(host.mobileImages)}
                        imageDescription="Terraza Mérida"
                        cColor="#f5f3ef"
                      />
                    </div>
                  </InviewElement>
                </div>
                <div className="col-12 col-md-6">
                  <div className="host-body">
                    <InviewElement>
                      <div className="section-body">
                        <BlockContent blocks={host.body} />
                        <br />
                        <Link href="/contact">
                          <a className="gplk-btn">
                            Contact us to learn more about booking
                            <br />
                            Casa Escuela to host your next event.
                          </a>
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
            title={sayab.title}
            intro={sayab.intro}
            footer={sayab.footer}
          >
            <div className="section-image">
              <InviewElement>
                <div className="sayab-image">
                  <ImageSwicher
                    imagesSrc={getImages(sayab.desktopImages)}
                    mobileImagesSrc={getImages(sayab.mobileImages)}
                  />
                </div>
              </InviewElement>
            </div>
          </Section>
        </BackgroundColor>

        {/* Sayab Bottom Section */}
        <BackgroundColor cSrcD="" cSrcM="" cColor="#ecf0f8" cHeight="100%">
          <Section id={sayabBottom.slug.current} intro={sayabBottom.intro}>
            <BottomLink path={link.href} text={link.text} paddingStyle={4} />
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
