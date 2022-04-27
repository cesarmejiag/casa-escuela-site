export default {
  name: "section",
  title: "Section",
  type: "object",
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
      type: "text",
    },
    {
      name: "desktopImages",
      title: "Desktop Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "mobileImages",
      title: "Mobile Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "footer",
      title: "Footer",
      type: "string",
    },
  ],
};
