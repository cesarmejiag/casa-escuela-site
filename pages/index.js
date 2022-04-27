import sanityClient from "../client";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ImageSwicher from "../components/ImageSwicher";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";
import InviewElement from "../components/InviewElement";

import { findContentBySlug, findContentByType, getImages } from "../utils/utils";

export async function getStaticProps() {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "home"][0]{
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

export default function Home({ data: sectionsData }) {
  const { content } = sectionsData;

  const hero = findContentBySlug("hero", content);
  const whatWeDo = findContentBySlug("what-we-do", content);
  const homeTo = findContentBySlug("home-to", content);
  const link = findContentByType("link", content);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        id={hero.slug.current}
        text={hero.text}
        imagesSrc={getImages(hero.desktopImages)}
        mobileImagesSrc={getImages(hero.mobileImages)}
      />

      {/* What We Do Section */}
      <Section
        id={whatWeDo.slug.current}
        title={whatWeDo.title}
        introText={whatWeDo.intro}
      >
        <InviewElement>
          <div className="section-image">
            <div className="what-we-do-image">
              <ImageSwicher
                imagesSrc={getImages(whatWeDo.desktopImages)}
                mobileImagesSrc={getImages(whatWeDo.mobileImages)}
              />
            </div>
          </div>
        </InviewElement>
      </Section>

      {/* Home To Section */}
      <BackgroundColor
        cSrcD="./images/bckhomeD.svg"
        cSrcM="./images/bckHomeM.svg"
        cColor="#dfe3da"
        cHeight="75%"
      >
        <Section id={homeTo.slug.current} intro={homeTo.intro}>
          <div className="home-to-wrapper">
            <div className="row">
              <div className="col-12 col-lg-8">
                <InviewElement>
                  <div className="home-to-image-1">
                    <ImageSwicher
                      imagesSrc={getImages(homeTo.desktopImages1)}
                      mobileImagesSrc={getImages(homeTo.mobileImages1)}
                      parallaxSpeed={3}
                    />
                  </div>
                </InviewElement>
                <InviewElement>
                  <div className="home-to-image-2">
                    <ImageSwicher
                      imagesSrc={getImages(homeTo.desktopImages2)}
                      mobileImagesSrc={getImages(homeTo.mobileImages2)}
                      parallaxSpeed={8}
                      textPosition={4}
                    />
                  </div>
                </InviewElement>
              </div>
              <div className="col-12 col-lg-4">
                <InviewElement>
                  <div
                    className="home-to-text"
                    dangerouslySetInnerHTML={{ __html: homeTo.text }}
                  ></div>
                </InviewElement>
              </div>
            </div>
          </div>
        </Section>
      </BackgroundColor>

      {/* Bottom Section */}
      <BottomLink path={link.href} text={link.text} />

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
