export default {
  name: "hero",
  title: "Hero",
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
      name: "text",
      title: "Text",
      type: "string",
      description: "Title should be catchy, descriptive and not too long",
    },
  ],
};
