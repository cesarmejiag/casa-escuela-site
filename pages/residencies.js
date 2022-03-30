import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";

import data from "../data";

const Residensies = () => {
  const { intro, exhibition, footer } = data.residencies;

  return (
    <Layout>
      <Section
        id={intro.id}
        title={intro.title}
        intro={intro.intro}
        imageSrc={intro.imageSrc}
      >
        <div>{intro.footerText}</div>
        <BottomLink path="/contact" text="Current artist in residence" />
      </Section>

      <Section id={exhibition.id} title={exhibition.title}>
        <div className="row">
          <div className="col-12 col-md-6"></div>
          <div className="col-12 col-md-6">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: exhibition.text }}
            ></div>
            <BottomLink path="/contact" text="Current exhibitions (PDF)" />
          </div>
        </div>
      </Section>

      <Section id={footer.id} imageSrc={footer.imageSrc}></Section>

      <BottomLink
        path="/contact"
        text="Contact us to visit our exhibition space"
      />
    </Layout>
  );
};

export default Residensies;
