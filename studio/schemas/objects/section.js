export default {
  localize: true,
  name: "section",
  title: "Section",
  type: "object",
  fieldsets: [
    {
      name: "bottomLink",
      title: "Bottom Link",
    },
  ],
  fields: [
    {
      localize: false,
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLenght: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title should be catchy, descriptive and not too long",
    },
    {
      name: "intro",
      title: "Intro",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      localize: false,
      name: "desktopImages",
      title: "Desktop Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      localize: false,
      name: "mobileImages",
      title: "Mobile Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "imageCaption",
      title: "Image Caption",
      type: "string",
    },
    {
      name: "footer",
      title: "Footer",
      type: "string",
    },
    {
      localize: false,
      name: "linkHref",
      title: "Link Url",
      type: "url",
      fieldset: "bottomLink",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
      fieldset: "bottomLink",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
