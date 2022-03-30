import Image from "next/image";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";

import data from "../data";

export default function Home() {
  const { hero, whatWeDo, homeTo } = data.home;

  return (
    <Layout>
      <Hero id="cover" text={hero.text} imageSrc={hero.imageSrc} />
      <Section id="what-we-do" title="What we do">
        <div className="what-we-do-intro">{whatWeDo.intro}</div>
        <div className="what-we-do-image">
          <Image
            src={whatWeDo.imageSrc}
            layout="responsive"
            width={1803}
            height={840}
          />
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
    </Layout>
  );
}
