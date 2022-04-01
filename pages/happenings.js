import Layout from "../components/Layout";
import Section from "../components/Section";
import Carrousel from "../components/Carrousel";
import Card from "../components/Card";
import BottomLink from "../components/BottomLink";
import useResize from "../hooks/useResize";

import data from "../data";

const Happenings = () => {
  const { mobile } = useResize();
  const { intro, cards } = data.happenings;

  return (
    <Layout pageTitle="Happenings">
      <Section
        id={intro.id}
        title={intro.title}
        intro={intro.intro}
        imageSrc={intro.imageSrc}
      />

      <Section>
        <Carrousel
          slides={cards.map((card, index) => (
            <Card {...card} key={index} />
          ))}
          slidesPerView={mobile ? 1 : 3}
          spaceBetween={mobile ? 0 : 50}
        />
      </Section>

      <BottomLink path="/contact" text="Happening now"></BottomLink>
    </Layout>
  );
};

export default Happenings;
