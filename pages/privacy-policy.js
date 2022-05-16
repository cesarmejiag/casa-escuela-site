import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/Layout";
import Section from "../components/Section";
import { useRouter } from "next/router";

import { findContentBySlug } from "../utils/utils";

export async function getServerSideProps({ locale }) {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "privacy-policy"][0]{
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

const PrivacyPolicy = ({ data, globalConfig }) => {
  const { locale } = useRouter();
  const { title, description, content, openGraphImage } = data;
  const policy = findContentBySlug("privacy-policy", content);
  
  const body = policy.body ? policy.body[locale] : '';
  
  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      <Section id="privacy-policy">
        <div className="plain-text">
          {body && <BlockContent blocks={body} />}
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicy;
