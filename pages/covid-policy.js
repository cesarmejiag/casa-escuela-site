import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Section from "../components/Section";

import { findContentBySlug } from "../utils/utils";

export async function getServerSideProps({ locale }) {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "covid-policy"][0]{
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

const CovidPolicy = ({ data, globalConfig }) => {
  const { locale } = useRouter();
  const { title, description, content, openGraphImage } = data;
  const policy = findContentBySlug("covid-policy", content);

  const body = policy.body ? policy.body[locale] : "";

  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      <Section id="covid-policy">
        <div className="plain-text">
          {body && <BlockContent blocks={body} />}
        </div>
      </Section>
    </Layout>
  );
};

export default CovidPolicy;
