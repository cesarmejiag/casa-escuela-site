import Layout from "../components/Layout";
import Section from "../components/Section";
import Carrousel from "../components/Carrousel";
import Card from "../components/Card";
import BottomLink from "../components/BottomLink";
import useResize from "../hooks/useResize";
import BackgroundColor from "../components/BackgroundColor";

import data from "../data";
import InviewElement from "../components/InviewElement";

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
        <div className="row">
          {cards.cards.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <InviewElement>
                <div className="happenings-card">
                  <Card {...card} key={index} type2 />
                </div>
              </InviewElement>
            </div>
          ))}
        </div>
      </Section>

      <BottomLink path="/contact" text="Happening now"></BottomLink>

      <style jsx>{`
        .happenings-card {
          margin-bottom: 45px;
        }

        @media screen and (min-width: 768px) {
          .happenings-card {
            margin-bottom: 0;
            padding: 0 20px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Happenings;
