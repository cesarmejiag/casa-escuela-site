export default {
  localize: true,
  name: "address",
  title: "Address",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
