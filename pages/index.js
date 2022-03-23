import Layout from "../components/layout";
import Hero from "../components/hero";
import Section from "../components/section";
import data from "../data";

export default function Home() {
  const { hero } = data.home;

  return (
    <Layout>
      <Hero id="cover" text={hero.text} imageSrc={hero.imageSrc} />
      <Section id="what-we-do" title="What we do" />
    </Layout>
  );
}
