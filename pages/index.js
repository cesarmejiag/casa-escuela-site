import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ImageSwicher from "../components/ImageSwicher";
import BottomLink from "../components/BottomLink";

import data from "../data";

export default function Home() {
  const { hero, whatWeDo, homeTo } = data.home;

  return (
    <Layout>
      <Hero id="cover" text={hero.text} imagesSrc={hero.imagesSrc} />
      <Section id="what-we-do" title="What we do">
        <div className="section-intro">{whatWeDo.intro}</div>
        <div className="section-image">
          <div className="what-we-do-image">
            <ImageSwicher imagesSrc={whatWeDo.imagesSrc} />
          </div>
        </div>
      </Section>
      <Section id="home-to" intro={homeTo.intro}>
        <div className="home-to-wrapper">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="home-to-image-1">
                <ImageSwicher
                  imagesSrc={[homeTo.imageSrc1, homeTo.imageSrc1]}
                />
              </div>
              <div className="home-to-image-2">
                <ImageSwicher
                  imagesSrc={[homeTo.imageSrc2, homeTo.imageSrc2]}
                />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div
                className="home-to-text"
                dangerouslySetInnerHTML={{ __html: homeTo.text }}
              ></div>
            </div>
          </div>
        </div>
      </Section>
      <BottomLink path="/contact" text="Book your stay" />

      <style jsx>{`
        .what-we-do-image {
          padding-bottom: 46%;
          position: relative;
        }

        .home-to-wrapper {
          margin-top: 80px;
        }

        .home-to-image-1 {
          padding-bottom: 80.252%;
          position: relative;
          width: 90.207%;
        }

        .home-to-image-2 {
          left: 15%;
          margin-top: -12%;
          padding-bottom: 80.494%;
          position: relative;
          width: 85%;
        }

        .home-to-text {
          margin-top: 60px;
          max-width: 350px;
        }

        @media screen and (min-width: 768px) {
          .home-to-wrapper {
            margin-top: 100px;
          }
        }

        @media screen and (min-width: 992px) {
          .home-to-image-1 {
            padding-bottom: 80.252%;
            width: 90.207%;
          }
  
          .home-to-image-2 {
            left: 45%;
            margin-top: -25%;
            padding-bottom: 83.764%;
            width: 87.63%;
          }
        }
      `}</style>
    </Layout>
  );
}
