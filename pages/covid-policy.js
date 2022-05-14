import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/Layout";
import Section from "../components/Section";

import { findContentBySlug } from "../utils/utils";

export async function getServerSideProps() {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "covid-policy"][0]{
      slug,
      title,
      content,
      description,
      openGraphImage
    }`
  );

  return {
    props: {
      data,
    },
  };
}

const covidPolicy = ({ data, globalConfig }) => {
  const { title, description, content, openGraphImage } = data;
  const policy = findContentBySlug("covid-policy", content);

  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      <Section id="covid-policy">
        <div className="plain-text">
          <BlockContent blocks={policy.body} />
        </div>
      </Section>
    </Layout>
  );
};

export default covidPolicy;
