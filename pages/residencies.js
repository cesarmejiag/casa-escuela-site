import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";

import data from "../data";
import ImageSwicher from "../components/ImageSwicher";

const Residensies = () => {
  const { intro, exhibition, footer } = data.residencies;

  return (
    <Layout pageTitle="Residencies">
      <Section
        id={intro.id}
        title={intro.title}
        intro={intro.intro}
        imagesSrc={intro.imagesSrc}
        footer={intro.footerText}
      >
        <BottomLink path="/contact" text="Current artist in residence" />
      </Section>

      <Section id={exhibition.id} title={exhibition.title}>
        <div className="exhibition-wrapper">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="exhibition-image">
                <ImageSwicher imagesSrc={exhibition.imagesSrc} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="exhibition-body">
                <div
                  className="section-body"
                  dangerouslySetInnerHTML={{ __html: exhibition.text }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id={footer.id} imagesSrc={footer.imagesSrc}></Section>

      <BottomLink
        path="/contact"
        text="Contact us to visit our exhibition space"
      />

      <style jsx>{`
        .exhibition-wrapper {
          margin-top: 80px;
        }

        .exhibition-image {
          padding-bottom: 110.4%;
          position: relative;
        }

        .exhibition-body {
          margin: 0 auto;
          max-width: 430px;
        }

        @media screen and (min-width: 768px) {
          .exhibition-wrapper {
            margin-top: 140px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Residensies;
