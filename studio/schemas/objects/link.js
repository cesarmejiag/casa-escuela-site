export default {
  localize: true,
  name: "link",
  title: "URL",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    {
      localize: false,
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
