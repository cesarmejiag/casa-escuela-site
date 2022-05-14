export default {
  name: "site-config",
  type: "document",
  title: "Site configuration",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
    },
    {
      name: "file",
      title: "File",
      type: "file",
    },
    {
      name: "shopUrl",
      title: "Shop URL",
      type: "url",
      description: "Shop URL",
    },
  ],
};
