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
import address from "./objects/address";
import page from "./documents/page";
import siteConfig from "./documents/siteConfig";

import { translateFields } from "./fieldTranslations";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      // Any base object you've defined,
      // or document type that should not have
      // field-level validations
      siteConfig,
    ])
    // Include documents with field translation support.
    // This changes their structure, transforming
    // simple fields like 'string' into 'object'
    // with multiple string properties, one per
    // language.
    //
    // Any document definition that does
    // not set localize: true on root level, or
    // set localize: true on any field level will
    // not be changed.
    .concat(translateFields([
      card,
      hero,
      link,
      page,
      pillar,
      section,
      sectionCards,
      sectionPillars,
      sectionText,

      address,
    ])),
});
