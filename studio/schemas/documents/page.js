export default {
  // This property says we should have all fields localized,
  // except any field that explicitly says localize: false
  localize: true,
  name: "page",
  title: "Page",
  type: "document",
  fieldsets: [
    {
      name: "metadata",
      title: "SEO & metadata",
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
    },
    {
      localize: false,
      name: "content",
      title: "Page sections",
      type: "array",
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
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
      localize: false,
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
