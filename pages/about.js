import sanityClient from "../client";

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

export async function getServerSideProps() {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "about"][0]{
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

const About = ({ data, config }) => {
  const { mobile } = useWindowSize();

  const intro = findContentBySlug("la-casa-de-todos", data.content);
  const built = findContentBySlug("built", data.content);
  const team = findContentBySlug("team", data.content);
  const pillars = findContentBySlug("pillars", data.content);
  const link = findContentByType("link", data.content);

  return (
    <Layout pageTitle={data.title} config={config}>
      {/* La Casa de Todos Section */}
      <BackgroundColor
        cSrcD="./images/bckAboutD.svg"
        cSrcM="./images/bckHomeM.svg"
        cColor="#ecf0f8"
        cHeight="40%"
        cPosition="bottom"
      >
        <Section
          id={intro.slug.current}
          title={intro.title}
          intro={intro.intro}
          imagesSrc={intro.desktopImages}
          mobileImagesSrc={intro.mobileImages}
          withMarginTop
        />
      </BackgroundColor>

      {/* Built Section */}
      <BackgroundColor
        cSrcD="./images/bckAboutD.svg"
        cSrcM="./images/bckHomeM.svg"
        cColor="#ecf0f8"
        cHeight="40%"
      >
        <Section id={built.slug.current} intro={built.intro}>
          <div className="section-image">
            <InviewElement>
              <div className="built-image">
                <ImageSwicher imagesSrc={built.desktopImages} />
              </div>
            </InviewElement>
          </div>
          <div className="section-footer">{built.footer}</div>
        </Section>
      </BackgroundColor>

      {/* Team Section */}
      <Section id={team.slug.current} title={team.title}>
        <div className="team-wrapper">
          <InviewElement>
            <Carrousel
              slides={team.cards.map((card, index) => (
                <Card {...card} key={index} />
              ))}
              slidesPerView={mobile ? 1 : 3}
              spaceBetween={mobile ? 0 : 100}
            />
          </InviewElement>
        </div>
      </Section>

      {/* Pillars Section */}
      <Section id={pillars.slug.current} title={pillars.title}>
        <InviewElement>
          <Carrousel
            slides={pillars.pillars.map((card, index) => (
              <PillarCard {...card} id={index + 1} key={index} />
            ))}
            slidesPerView={1}
            spaceBetween={0}
            type={2}
          />
        </InviewElement>
      </Section>

      {/* Bottom Link Section */}
      <BottomLink path={link.href} text={link.text}></BottomLink>

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
