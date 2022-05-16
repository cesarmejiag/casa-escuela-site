export default {
  localize: true,
  name: "sectionCards",
  title: "Section Cards",
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
      description: "Title should be catchy, descriptive and not too long",
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      localize: false,
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "card" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
