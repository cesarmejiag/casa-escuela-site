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

import {
  findContentBySlug,
  findContentByType,
  getImages,
} from "../utils/utils";

export async function getStaticProps() {
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

const About = ({ data: sectionsData }) => {
  const { mobile } = useWindowSize();
  const { title, content } = sectionsData;

  const intro = findContentBySlug("la-casa-de-todos", content);
  const built = findContentBySlug("built", content);
  const team = findContentBySlug("team", content);
  const pillars = findContentBySlug("pillars", content);
  const link = findContentByType("link", content);

  return (
    <Layout pageTitle={title}>
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
          imagesSrc={getImages(intro.desktopImages)}
          mobileImagesSrc={getImages(intro.mobileImages)}
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
                <ImageSwicher imagesSrc={getImages(built.desktopImages)} />
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
                <Card
                  image={card.image}
                  title={card.title}
                  text={card.text}
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
      <Section id={pillars.slug.current} title={pillars.title}>
        <InviewElement>
          <Carrousel
            slides={pillars.pillars.map((card, index) => (
              <PillarCard
                id={index + 1}
                title={card.title}
                text={card.text}
                key={index}
              />
            ))}
            slidesPerView={1}
            spaceBetween={0}
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
