export default {
  name: "sectionText",
  title: "Section Text",
  type: "object",
  fieldsets: [
    { name: "images1", title: "Images 1" },
    { name: "images2", title: "Images 2" },
  ],
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
      name: "desktopImages1",
      title: "Desktop Images",
      type: "array",
      fieldset: "images1",
      of: [{ type: "image" }],
    },
    {
      name: "mobileImages1",
      title: "Mobile Images",
      type: "array",
      fieldset: "images1",
      of: [{ type: "image" }],
    },
    {
      name: "desktopImages2",
      title: "Desktop Images",
      type: "array",
      fieldset: "images2",
      of: [{ type: "image" }],
    },
    {
      name: "mobileImages2",
      title: "Mobile Images",
      type: "array",
      fieldset: "images2",
      of: [{ type: "image" }],
    },
  ],
};
