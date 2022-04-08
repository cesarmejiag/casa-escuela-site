import Image from "next/image";

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
        <div className="row">
          <div className="col-6">
            <div className="home-to-image-1">
              <Image
                src={homeTo.imageSrc1}
                layout="responsive"
                width={1050}
                height={935}
              />
            </div>
            <div className="home-to-image-2">
              <Image
                src={homeTo.imageSrc1}
                layout="responsive"
                width={1020}
                height={975}
              />
            </div>
          </div>
          <div className="col-6">
            <div
              className="home-to-text"
              dangerouslySetInnerHTML={{ __html: homeTo.text }}
            ></div>
          </div>
        </div>
      </Section>
      <BottomLink path="/contact" text="Book your stay" />

      <style jsx>{`
        .what-we-do-image {
          padding-bottom: 46%;
          position: relative;
        }
      `}</style>
    </Layout>
  );
}
