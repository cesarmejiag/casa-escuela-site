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
    }`
  );

  return {
    props: {
      data,
    },
  };
}

const PrivacyPolicy = ({ data, config }) => {
  const policy = findContentBySlug("privacy-policy", data.content);

  return (
    <Layout pageTitle={data.title} config={config}>
      <Section id="privacy-policy">
        <div className="plain-text">
          <BlockContent blocks={policy.body} />
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicy;
