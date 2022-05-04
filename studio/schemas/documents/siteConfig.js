export default {
  name: "site-config",
  type: "document",
  title: "Site configuration",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: ["create", /* "delete", */ "update", "publish"],
  fields: [
    {
      name: "file",
      title: "File",
      type: "file",
    },
    {
      name: "url",
      title: "Shop URL",
      type: "url",
    },
  ],
};
