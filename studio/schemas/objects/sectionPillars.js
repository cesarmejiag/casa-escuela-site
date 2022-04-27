export default {
    name: "sectionPillars",
    title: "Section Pillars",
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
        name: "pillars",
        title: "Pillars",
        type: "array",
        of: [{ type: "pillar" }],
      },
    ],
  };
  