// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Import object and document schemas
import hero from "./objects/hero";
import section from "./objects/section";
import sectionText from "./objects/sectionText";
import sectionCards from "./objects/sectionCards";
import sectionPillars from "./objects/sectionPillars";
import card from "./objects/card";
import pillar from "./objects/pillar";
import link from "./objects/link";
import page from "./documents/page";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    hero,
    section,
    sectionText,
    sectionCards,
    sectionPillars,
    card,
    pillar,
    link,
    page,
  ]),
});
