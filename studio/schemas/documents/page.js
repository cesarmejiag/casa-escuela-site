export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
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
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [
        { type: "hero" },
        { type: "section" },
        { type: "sectionText" },
        { type: "sectionCards" },
        { type: "sectionPillars" },
        { type: "link" },
        { type: "address" },
      ],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
