import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/Layout";
import Section from "../components/Section";

import { findContentBySlug } from "../utils/utils";

export async function getServerSideProps() {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "terms-conditions"][0]{
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

const termsConditions = ({ data, globalConfig }) => {
  const { title, description, content, openGraphImage } = data;
  const terms = findContentBySlug("terms-conditions", content);

  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      <Section id="terms-conditions">
        <div className="plain-text">
          <BlockContent blocks={terms.body} />
        </div>
      </Section>
    </Layout>
  );
};

export default termsConditions;
