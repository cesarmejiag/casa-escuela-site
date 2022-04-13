import Image from "next/image";

import Layout from "./../components/Layout";
import Section from "../components/Section";
import Carrousel from "../components/Carrousel";
import Card from "../components/Card";
import BottomLink from "../components/BottomLink";
import PillarCard from "../components/PillarCard";
import useResize from "../hooks/useResize";
import BackgroundColor from "../components/BackgroundColor";

import data from "../data";
import ImageSwicher from "../components/ImageSwicher";

const About = () => {
  const { mobile } = useResize();
  const { intro, built, team, pillars } = data.about;

  return (
    <Layout pageTitle="About">
      {/* La Casa de Todos Section */}
      <Section
        id={intro.id}
        title={intro.title}
        intro={intro.intro}
        imagesSrc={intro.imagesSrc}
        withMarginTop
      />

      {/* Built Section */}
      <BackgroundColor cSrcD="./images/bckAboutD.svg" cSrcM="./images/bckAboutM.svg" cColor="#ecf0f8" cHeight="40%">
        <Section id={built.id} intro={built.intro}>
          <div className="section-image">
            <div className="built-image">
              <ImageSwicher imagesSrc={built.imagesSrc} />
            </div>
          </div>
          <div className="section-footer">{built.footerText}</div>
        </Section>
      </BackgroundColor>

      {/* Team Section */}
      <Section id={team.id} title={team.title}>
        <div className="team-wrapper">
          <Carrousel
            slides={team.cards.map((card, index) => (
              <Card {...card} key={index} />
            ))}
            slidesPerView={mobile ? 1 : 3}
            spaceBetween={mobile ? 0 : 100}
          />
        </div>
      </Section>

      {/* Pillars Section */}
      <Section id={pillars.id} title={pillars.title}>
        <Carrousel
          slides={pillars.cards.map((card, index) => (
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
      </Section>

      {/* Bottom Link Section */}
      <BottomLink path="/contact" text="Contact us"></BottomLink>

      <style jsx>{`
        .team-wrapper {
          margin-top: 55px;
        }

        .built-image {
          padding-bottom: 66%;
          position: relative;
        }

        @media screen and (min-width: 768px) {
          .team-wrapper {
            margin-top: 100px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default About;
