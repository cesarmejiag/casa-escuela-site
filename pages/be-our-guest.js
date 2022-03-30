import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";

import data from "../data";

const BeOurGuest = () => {
  const { intro, host, sayab, sayabBottom } = data.beOurGuest;

  return (
    <Layout pageTitle="Be Our Guest">
      <Section
        id={intro.id}
        title={intro.title}
        intro={intro.intro}
        imageSrc={intro.imageSrc}
      >
        <div className="be-our-guest-footerText">{intro.footerText}</div>
      </Section>

      <BottomLink path="/contact" text="Book your stay" />

      <Section id={host.id} title={host.title}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className=""></div>
          </div>
          <div className="col-12 col-md-6">
            <div className=""></div>
          </div>
        </div>
      </Section>

      <Section id={sayab.id} title={sayab.title} intro={sayab.intro}>
        <div>{sayab.footerText}</div>
      </Section>

      <Section id={sayabBottom.id} intro={sayabBottom.intro}></Section>

      <BottomLink path="/contact" text="Coming soon" />
    </Layout>
  );
};

export default BeOurGuest;
