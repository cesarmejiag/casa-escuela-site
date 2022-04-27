import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export const findContentBySlug = (slug, sanityContents) => {
  return sanityContents.find((content) => content.slug.current === slug);
};

export const findContentByType = (type, sanityContents) => {
  return sanityContents.find((content) => content._type === type);
};

export const getImages = (sources) => {
  return sources.map((source) => builder.image(source).url());
};
