import sanityClient from "../client";

import { useRouter } from "next/router";

import Layout from "./../components/Layout";
import Section from "../components/Section";
import Carrousel from "../components/Carrousel";
import Card from "../components/Card";
import BottomLink from "../components/BottomLink";
import PillarCard from "../components/PillarCard";
import BackgroundColor from "../components/BackgroundColor";
import ImageSwicher from "../components/ImageSwicher";
import InviewElement from "../components/InviewElement";
import useWindowSize from "../hooks/useWindowSize";

import { findContentBySlug, findContentByType } from "../utils/utils";

export async function getServerSideProps({ locale }) {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "about"][0]{
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

const About = ({ data, globalConfig }) => {
  const { locale } = useRouter();
  const { mobile } = useWindowSize();
  const { title, description, content, openGraphImage } = data;

  const intro = findContentBySlug("la-casa-de-todos", content);
  const built = findContentBySlug("built", content);
  const team = findContentBySlug("team", content);
  const pillars = findContentBySlug("pillars", content);
  const link = findContentByType("link", content);

  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      {/* La Casa de Todos Section */}
      <BackgroundColor
        cSrcD="/images/bckAboutD.svg"
        cColor="#ecf0f8"
        cHeight="40%"
        cPosition="bottom"
      >
        <Section
          id={intro.slug.current}
          title={intro?.title?.[locale]}
          intro={intro?.intro?.[locale]}
          imagesSrc={intro.desktopImages}
          mobileImagesSrc={intro.mobileImages}
          withMarginTop
        />
      </BackgroundColor>

      {/* Built Section */}
      <BackgroundColor
        cSrcD="/images/bckAboutD.svg"
        cSrcM="/images/bckHomeM.svg"
        cColor="#ecf0f8"
        cHeight="40%"
        cHeight2="50%"
      >
        <Section id={built.slug.current} intro={built?.intro?.[locale]}>
          <div className="section-image">
            <InviewElement>
              <div className="built-image">
                <ImageSwicher imagesSrc={built.desktopImages} />
              </div>
            </InviewElement>
          </div>
          <div className="section-footer">{built?.footer?.[locale]}</div>
        </Section>
      </BackgroundColor>

      {/* Team Section */}
      <Section id={team.slug.current} title={team?.title?.[locale]}>
        <div className="team-wrapper">
          <InviewElement>
            <Carrousel
              slides={team.cards.map((card, index) => (
                <Card
                  image={card.image}
                  title={card?.title?.[locale]}
                  text={card?.text?.[locale]}
                  key={index}
                />
              ))}
              slidesPerView={mobile ? 1 : 3}
              spaceBetween={mobile ? 0 : 100}
            />
          </InviewElement>
        </div>
      </Section>

      {/* Pillars Section */}
      <Section id={pillars.slug.current} title={pillars?.title?.[locale]}>
        <InviewElement>
          <Carrousel
            slides={pillars.pillars.map((card, index) => (
              <PillarCard
                id={index + 1}
                title={card?.title?.[locale]}
                text={card?.text?.[locale]}
                key={index}
              />
            ))}
            slidesPerView={1}
            spaceBetween={0}
            type={2}
          />
        </InviewElement>
      </Section>

      {/* Bottom Link Section */}
      <BottomLink path={link.href} text={link?.text?.[locale]}></BottomLink>

      <style jsx>{`
        .team-wrapper {
          margin-top: 55px;
        }

        .built-image {
          margin-left: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
          margin-right: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
          padding-bottom: 66%;
          position: relative;
        }

        @media screen and (min-width: 768px) {
          .team-wrapper {
            margin-top: 100px;
          }

          .built-image {
            margin-left: 0;
            margin-right: 0;
          }
        }
      `}</style>
    </Layout>
  );
};

export default About;
