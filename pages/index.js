import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ImageSwicher from "../components/ImageSwicher";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";
import { useInView } from 'react-hook-inview'

import data from "../data";

export default function Home() {
  const { hero, whatWeDo, homeTo } = data.home;

  const [ref, isVisible] = useInView({
    threshold: 1,
  })
  const [ref1, isVisible1] = useInView({
    threshold: 0,
  })


  return (
    <Layout>
      {/* Hero Section */}
      <Hero id={hero.id} text={hero.text} imagesSrc={hero.imagesSrc} />

      {/* What We Do Section */}
      <Section id={whatWeDo.id} title={whatWeDo.title} introText={whatWeDo.intro}>
        <div  className={"section-image "}>
          <div ref={ref1} className={`what-we-do-image ${isVisible1 ? "inview" : "hidden"}`}>
            <ImageSwicher imagesSrc={whatWeDo.imagesSrc} />
          </div>
        </div>
      </Section>

      {/* Home To Section */}
      <Section id={homeTo.id} intro={homeTo.intro}>
        <BackgroundColor cSrc="" cColor="#dfe3da" cHeight="75%" />
        <div className="home-to-wrapper">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="home-to-image-1">
                <ImageSwicher
                  imagesSrc={[homeTo.imageSrc1, homeTo.imageSrc1]}
                  parallaxSpeed={3}
                />
              </div>
              <div className="home-to-image-2">
                <ImageSwicher
                  imagesSrc={[homeTo.imageSrc2, homeTo.imageSrc2]}
                  parallaxSpeed={8}
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

      {/* Bottom Section */}
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
