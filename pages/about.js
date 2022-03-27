import Layout from "../components/Layout";
import Section from "../components/Section";
import Carrousel from "../components/carrousel";
import Card from "../components/card";
import useResize from "../hooks/useResize";

import data from "../data";

const About = () => {
  const { mobile } = useResize();
  const { team } = data.about;
  const { cards } = team;

  return (
    <Layout>
      <Section id="la-casa-de-todos" title="La casa de todos">
        <div></div>
      </Section>

      <Section id="team" title="Team">
        <Carrousel
          slides={cards.map((card) => (
            <Card {...card} />
          ))}
          slidesPerView={mobile ? 1 : 3}
          spaceBetween={mobile ? 0 : 50}
        />
      </Section>
    </Layout>
  );
};

export default About;
