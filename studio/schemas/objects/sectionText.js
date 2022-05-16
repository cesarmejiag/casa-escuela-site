export default {
  localize: true,
  name: "sectionText",
  title: "Section Text",
  type: "object",
  fieldsets: [
    { name: "images1", title: "Images 1" },
    { name: "images2", title: "Images 2" },
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
      name: "intro",
      title: "Intro",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      fieldset: "images1",
      localize: false,
      name: "desktopImages1",
      title: "Desktop Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      fieldset: "images1",
      localize: false,
      name: "mobileImages1",
      title: "Mobile Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      fieldset: "images2",
      localize: false,
      name: "desktopImages2",
      title: "Desktop Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      fieldset: "images2",
      localize: false,
      name: "mobileImages2",
      title: "Mobile Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
