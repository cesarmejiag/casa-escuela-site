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
    `*[_type == "page" && slug.current == "residencies"][0]{
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

const Residensies = ({ data, globalConfig }) => {
  const { locale } = useRouter();
  const { title, description, content, openGraphImage } = data;

  const intro = findContentBySlug("residencies", content);
  const exhibition = findContentBySlug("exhibition-space", content);
  const footer = findContentBySlug("footer", content);
  const link = findContentByType("link", content);

  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      {/* Residencies */}
      <BackgroundColor cSrcD="" cSrcM="" cColor="#dfe3da" cHeight="55%">
        <Section
          id={intro.slug.current}
          title={intro?.title?.[locale]}
          intro={intro?.intro?.[locale]}
          imagesSrc={intro.desktopImages}
          mobileImagesSrc={intro.mobileImages}
          imageCaption={intro?.imageCaption?.[locale]}
          footer={intro?.footer?.[locale]}
          withMarginTop
        >
          <BottomLink
            path="https://www.instagram.com/casa.escuela/"
            text="Current artist in residence"
            target="_blank"
            paddingStyle={3}
          />
        </Section>
      </BackgroundColor>
      {/* Exhibition Space */}
      <Section id={exhibition.slug.current} title={exhibition?.title?.[locale]}>
        <div className="exhibition-wrapper">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <InviewElement>
                <div className="exhibition-image">
                  <ImageSwicher imagesSrc={exhibition.desktopImages} />
                </div>
              </InviewElement>
            </div>
            <div className="col-12 col-md-6">
              <div className="exhibition-body">
                <InviewElement>
                  <div className="section-body">
                    <BlockContent blocks={exhibition?.body?.[locale]} />
                    <br />
                    <Link href="/files/exhibitions.pdf">
                      <a className="gplk-btn">Current exhibitions</a>
                    </Link>
                  </div>
                </InviewElement>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Footer */}
      <Section id={footer.slug.current}>
        <InviewElement>
          <div className="footer-image">
            <ImageSwicher
              imagesSrc={footer.desktopImages}
              mobileImagesSrc={footer.mobileImages}
            />
          </div>
        </InviewElement>
      </Section>
      <BottomLink path={link.href} text={link?.text?.[locale]} />
      <style jsx>{`
        .exhibition-wrapper {
          margin-top: 80px;
        }

        .exhibition-image {
          margin-bottom: 80px;
          padding-bottom: 110.4%;
          position: relative;
        }

        .exhibition-body {
          margin: 0 auto;
          max-width: 430px;
        }

        .footer-image {
          margin-left: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
          margin-right: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
          padding-bottom: 78.321%;
          position: relative;
        }

        @media screen and (min-width: 768px) {
          .exhibition-wrapper {
            margin-top: 140px;
          }

          .exhibition-image {
            margin-bottom: 0;
          }

          .footer-image {
            margin-left: 0;
            margin-right: 0;
            padding-bottom: 48%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Residensies;
