import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";

import data from "../data";
import ImageSwicher from "../components/ImageSwicher";
import InviewElement from "../components/InviewElement";

const BeOurGuest = () => {
  const { intro, host, sayab, sayabBottom } = data.beOurGuest;

  return (
    <BackgroundColor
      cSrcD=""
      cSrcM=""
      cColor="#ecf0f8"
      cHeight="10%"
      cPosition="bottom"
    >
      <Layout pageTitle="Be Our Guest">
        {/* Intro Section */}
        <Section
          id={intro.id}
          title={intro.title}
          intro={intro.intro}
          imagesSrc={intro.imagesSrc}
          footer={intro.footerText}
          withMarginTop
        >
          <BottomLink path="/contact" text="Book your stay" paddingStyle={1} />
        </Section>

        {/* Host Section */}
        <BackgroundColor
          cSrcD="./images/bckBOGD1.svg"
          cSrcM="./images/bckBOGM1.svg"
          cColor="#b96241"
          cHeight="80%"
        >
          <Section id={host.id} title={host.title}>
            <div className="host-wrapper">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <InviewElement>
                    <div className="host-image">
                      <ImageSwicher
                        imagesSrc={host.imagesSrc}
                        cColor="#f5f3ef"
                      />
                    </div>
                  </InviewElement>
                </div>
                <div className="col-12 col-md-6">
                  <div className="host-body">
                    <InviewElement>
                      <div
                        className="section-body"
                        dangerouslySetInnerHTML={{ __html: host.text }}
                      ></div>
                    </InviewElement>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </BackgroundColor>

        {/* Sayab Section */}
        <BackgroundColor
          cSrcD=""
          cSrcM=""
          cColor="#ecf0f8"
          cHeight="25%"
          cPosition="bottom"
        >
          <Section id={sayab.id} title={sayab.title} intro={sayab.intro}>
            <InviewElement>
              <div className="sayab-footer">{sayab.footerText}</div>
            </InviewElement>
            <div className="section-image">
              <InviewElement>
                <div className="sayab-image">
                  <ImageSwicher imagesSrc={sayab.imagesSrc} />
                </div>
              </InviewElement>
            </div>
          </Section>
        </BackgroundColor>

        {/* Sayab Bottom Section */}
        <BackgroundColor cSrcD="" cSrcM="" cColor="#ecf0f8" cHeight="100%">
          <Section id={sayabBottom.id} intro={sayabBottom.intro}>
            <BottomLink path="/contact" text="Coming soon" paddingStyle={4} />
          </Section>
        </BackgroundColor>
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
    </BackgroundColor>
  );
};

export default BeOurGuest;
