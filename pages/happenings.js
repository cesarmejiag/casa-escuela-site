import sanityClient from "../client";

import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Card from "../components/Card";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";
import InviewElement from "../components/InviewElement";

import { findContentBySlug, findContentByType } from "../utils/utils";

export async function getServerSideProps({ locale }) {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "happenings"][0]{
      slug,
      "title": title[$lang],
      content,
      "description": description[$lang],
      openGraphImage
    }`,
    { lang: locale }
  );

  return {
    props: {
      data,
    },
  };
}

const Happenings = ({ data, globalConfig }) => {
  const { locale } = useRouter();
  const { title, description, content, openGraphImage } = data;

  const intro = findContentBySlug("happenings", content);
  const cards = findContentBySlug("cards", content);
  const link = findContentByType("link", content);

  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      {/* Happenings */}
      <BackgroundColor cSrcD="" cSrcM="" cColor="#efebe5" cHeight="80%">
        <Section
          id={intro.slug.current}
          title={intro.title[locale]}
          intro={intro.intro[locale]}
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
                  <Card
                    image={card.image}
                    title={card.title[locale]}
                    text={card.text[locale]}
                    key={index}
                    type2
                  />
                </div>
              </InviewElement>
            </div>
          ))}
        </div>
      </Section>

      <BottomLink
        path={link.href}
        text={link.text[locale]}
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
