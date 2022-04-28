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
    }`
  );

  return {
    props: {
      data,
    },
  };
}

const termsConditions = ({ data }) => {
  const { title, content } = data;
  const terms = findContentBySlug("terms-conditions", content);

  return (
    <Layout pageTitle={title}>
      <Section id="terms-conditions">
        <div className="plain-text">
          <BlockContent blocks={terms.body} />
        </div>
      </Section>
    </Layout>
  );
};

export default termsConditions;
