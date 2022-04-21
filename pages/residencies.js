import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";

import data from "../data";
import ImageSwicher from "../components/ImageSwicher";
import InviewElement from "../components/InviewElement";

const Residensies = () => {
  const { intro, exhibition, footer } = data.residencies;

  return (
    <Layout pageTitle="Residencies">
      <BackgroundColor cSrcD="" cSrcM="" cColor="#dfe3da" cHeight="55%">
        <Section
          id={intro.id}
          title={intro.title}
          intro={intro.intro}
          imagesSrc={intro.imagesSrc}
          mobileImagesSrc={intro.mobileImagesSrc}
          footer={intro.footerText}
          withMarginTop
        >
          <BottomLink
            path="https://www.instagram.com/casa.escuela/"
            text="Current artist in residence"
            target="_blank"
            paddingStyle={3}
          />
        </Section>
      </BackgroundColor>

      <Section id={exhibition.id} title={exhibition.title}>
        <div className="exhibition-wrapper">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <InviewElement>
                <div className="exhibition-image">
                  <ImageSwicher imagesSrc={exhibition.imagesSrc} />
                </div>
              </InviewElement>
            </div>
            <div className="col-12 col-md-6">
              <div className="exhibition-body">
                <InviewElement>
                  <div
                    className="section-body"
                    dangerouslySetInnerHTML={{ __html: exhibition.text }}
                  ></div>
                </InviewElement>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id={footer.id}>
        <InviewElement>
          <div className="footer-image">
            <ImageSwicher
              imagesSrc={footer.imagesSrc}
              mobileImagesSrc={footer.mobileImagesSrc}
            />
          </div>
        </InviewElement>
      </Section>

      <BottomLink
        path="/contact"
        text="Contact us to visit our exhibition space"
      />

      <style jsx>{`
        .exhibition-wrapper {
          margin-top: 80px;
        }

        .exhibition-image {
          margin-bottom: 80px;
          padding-bottom: 110.4%;
          position: relative;
        }

        .exhibition-body {
          margin: 0 auto;
          max-width: 430px;
        }

        .footer-image {
          margin-left: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
          margin-right: calc((var(--bs-gutter-x, 0.75rem) + 16px) * -1);
          padding-bottom: 78.321%;
          position: relative;
        }

        @media screen and (min-width: 768px) {
          .exhibition-wrapper {
            margin-top: 140px;
          }

          .exhibition-image {
            margin-bottom: 0;
          }

          .footer-image {
            margin-left: 0;
            margin-right: 0;
            padding-bottom: 48%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Residensies;
