import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/Layout";
import Section from "../components/Section";

import { findContentBySlug } from "../utils/utils";

export async function getServerSideProps() {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "privacy-policy"][0]{
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

const PrivacyPolicy = ({ data, globalConfig }) => {
  const { title, description, content, openGraphImage } = data;
  const policy = findContentBySlug("privacy-policy", content);

  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      <Section id="privacy-policy">
        <div className="plain-text">
          <BlockContent blocks={policy.body} />
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicy;
