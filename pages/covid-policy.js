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
    }`
  );

  return {
    props: {
      data,
    },
  };
}

const covidPolicy = ({ data }) => {
  const { title, content } = data;
  const policy = findContentBySlug("covid-policy", content);

  return (
    <Layout pageTitle={title}>
      <Section id="covid-policy">
        <div className="plain-text">
          <BlockContent blocks={policy.body} />
        </div>
      </Section>
    </Layout>
  );
};

export default covidPolicy;
