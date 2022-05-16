import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Section from "../components/Section";

import { findContentBySlug } from "../utils/utils";

export async function getServerSideProps({ locale }) {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "terms-conditions"][0]{
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

const termsConditions = ({ data, globalConfig }) => {
  const { locale } = useRouter();
  const { title, description, content, openGraphImage } = data;
  const terms = findContentBySlug("terms-conditions", content);

  const body = terms.body ? terms.body[locale] : "";

  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      <Section id="terms-conditions">
        <div className="plain-text">
          {body && <BlockContent blocks={body} />}
        </div>
      </Section>
    </Layout>
  );
};

export default termsConditions;
