import Layout from "./../components/Layout";
import Section from "../components/Section";
import Carrousel from "../components/Carrousel";
import Card from "../components/Card";
import BottomLink from "../components/BottomLink";
import PillarCard from "../components/PillarCard";
import useResize from "../hooks/useResize";

import data from "../data";

const About = () => {
  const { mobile } = useResize();
  const { intro, built, team, pillars } = data.about;

  return (
    <Layout pageTitle="About">
      <Section
        id={intro.id}
        title={intro.title}
        intro={intro.intro}
        imageSrc={intro.imageSrc}
      >
        <div></div>
      </Section>

      <Section id="about" intro={built.intro} imageSrc={built.imageSrc}>
        <div className="about-footerText">{built.footerText}</div>
      </Section>

      <Section id="team" title="Team">
        <Carrousel
          slides={team.cards.map((card, index) => (
            <Card {...card} key={index} />
          ))}
          slidesPerView={mobile ? 1 : 3}
          spaceBetween={mobile ? 0 : 50}
        />
      </Section>

      <Section id="pillars" title="Pillars">
        <Carrousel
          slides={pillars.cards.map((card, index) => (
            <PillarCard id={index + 1} title={card.title} text={card.text} key={index} />
          ))}
          slidesPerView={1}
          spaceBetween={0}
        />
      </Section>

      <BottomLink path="/contact" text="Contact us"></BottomLink>
    </Layout>
  );
};

export default About;
