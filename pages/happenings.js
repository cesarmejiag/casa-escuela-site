import Layout from "../components/Layout";
import Section from "../components/Section";
import Carrousel from "../components/Carrousel";
import Card from "../components/Card";
import BottomLink from "../components/BottomLink";
import useResize from "../hooks/useResize";
import BackgroundColor from "../components/BackgroundColor";

import data from "../data";

const Happenings = () => {
  const { mobile } = useResize();
  const { intro, cards } = data.happenings;

  return (
    <Layout pageTitle="Happenings">
      <BackgroundColor cSrcD="" cSrcM="" cColor="#efebe5" cHeight="80%">
        <Section
          id={intro.id}
          title={intro.title}
          intro={intro.intro}
          imagesSrc={intro.imagesSrc}
          withMarginTop
        />
      </BackgroundColor>

      <Section id={cards.id}>
        <Carrousel
          slides={cards.cards.map((card, index) => (
            <Card {...card} key={index} type2 />
          ))}
          slidesPerView={mobile ? 1 : 3}
          spaceBetween={mobile ? 0 : 60}
        />
      </Section>

      <BottomLink path="/contact" text="Happening now"></BottomLink>
    </Layout>
  );
};

export default Happenings;
