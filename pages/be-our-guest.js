import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";

import data from "../data";
import ImageSwicher from "../components/ImageSwicher";

const BeOurGuest = () => {
  const { intro, host, sayab, sayabBottom } = data.beOurGuest;

  return (
    <Layout pageTitle="Be Our Guest">
      {/* Intro Section */}
      <Section
        id={intro.id}
        title={intro.title}
        intro={intro.intro}
        imagesSrc={intro.imagesSrc}
        footer={intro.footerText}
        withMarginTop
      />

      {/* Bottom Link Section */}
      <BottomLink path="/contact" text="Book your stay" />

      {/* Host Section */}
      <Section id={host.id} title={host.title}>
        <BackgroundColor cSrc="" cColor="#b96241" cHeight="80%" />
        <div className="host-wrapper">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="host-image">
                <ImageSwicher imagesSrc={host.imagesSrc} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="host-body">
                <div
                  className="section-body"
                  dangerouslySetInnerHTML={{ __html: host.text }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sayab Section */}
      <Section id={sayab.id} title={sayab.title} intro={sayab.intro}>
        <div className="sayab-footer">{sayab.footerText}</div>
        <div className="section-image">
          <div className="sayab-image">
            <ImageSwicher imagesSrc={sayab.imagesSrc} />
          </div>
        </div>
      </Section>

      {/* Sayab Bottom Section */}
      <Section id={sayabBottom.id} intro={sayabBottom.intro}></Section>

      {/* Bottom Link Section */}
      <BottomLink path="/contact" text="Coming soon" />

      <style jsx>{`
        .host-wrapper {
          margin-top: 45px;
        }

        .host-image {
          margin-bottom: 90px;
          padding-bottom: 112%;
          position: relative;
        }

        .host-body {
          margin: 0 auto;
          max-width: 560px;
        }

        .sayab-footer {
          font-size: 12px;
          margin: 45px auto 0;
          max-width: 392px;
          text-align: center;
          text-transform: uppercase;
        }

        .sayab-image {
          padding-bottom: 46.6%;
          position: relative;
        }

        @media screen and (min-width: 768px) {
          .host-wrapper {
            margin-top: 100px;
          }

          .host-image {
            margin-bottom: 0;
          }

          .host-body {
            margin: 0 0 0 auto;
          }

          .sayab-footer {
            margin: 50px auto 0;
          }
        }
      `}</style>
    </Layout>
  );
};

export default BeOurGuest;
