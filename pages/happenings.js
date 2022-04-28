import sanityClient from "../client";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Card from "../components/Card";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";
import InviewElement from "../components/InviewElement";

import { findContentBySlug, findContentByType } from "../utils/utils";

export async function getServerSideProps() {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "happenings"][0]{
      slug,
      title,
      content,
    }`
  );

  return {
    props: {
      data,
    },
  };
}

const Happenings = ({ data: sectionsData }) => {
  const { title, content } = sectionsData;

  const intro = findContentBySlug("happenings", content);
  const cards = findContentBySlug("cards", content);
  const link = findContentByType("link", content);

  return (
    <Layout pageTitle={title}>
      {/* Happenings */}
      <BackgroundColor cSrcD="" cSrcM="" cColor="#efebe5" cHeight="80%">
        <Section
          id={intro.slug.current}
          title={intro.title}
          intro={intro.intro}
          imagesSrc={intro.desktopImages}
          mobileImagesSrc={intro.mobileImages}
          imageDescription="Luz Vega - Taller de Cerámica"
          withMarginTop
        />
      </BackgroundColor>

      {/* Cards */}
      <Section id={cards.slug.current}>
        <div className="row">
          {cards.cards.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <InviewElement>
                <div className="happenings-card">
                  <Card {...card} key={index} type2 />
                </div>
              </InviewElement>
            </div>
          ))}
        </div>
      </Section>

      <BottomLink
        path={link.href}
        text={link.text}
        target="_blank"
      ></BottomLink>

      <style jsx>{`
        .happenings-card {
          margin-bottom: 45px;
        }

        @media screen and (min-width: 768px) {
          .happenings-card {
            margin-bottom: 0;
            padding: 0 20px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Happenings;
