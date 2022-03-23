import Layout from "../components/Layout";
import Section from "../components/Section";
import Card from "../components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data";
import "swiper/css";

const About = () => {
  const { team } = data.about;
  const { cards } = team;

  return (
    <Layout>
      <Section id="la-casa-de-todos" title="La casa de todos">
        <div></div>
      </Section>

      <Section id="team" title="Team">
        <Swiper slidesPerView={3}>
          {cards.map((card) => (
            <SwiperSlide>
              <Card {...card}></Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </Layout>
  );
};

export default About;
