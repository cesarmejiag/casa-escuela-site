export default {
  localize: true,
  name: "section",
  title: "Section",
  type: "object",
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
