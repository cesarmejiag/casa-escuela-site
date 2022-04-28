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

const PrivacyPolicy = ({ data }) => {
  const { title, content } = data;
  const policy = findContentBySlug("privacy-policy", content);

  return (
    <Layout pageTitle={title}>
      <Section id="privacy-policy">
        <div className="plain-text">
          <BlockContent blocks={policy.body} />
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicy;
