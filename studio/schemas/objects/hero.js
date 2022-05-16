export default {
  localize: true,
  name: "hero",
  title: "Hero",
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
      name: "text",
      title: "Text",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
