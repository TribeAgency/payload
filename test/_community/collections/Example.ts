
import type { CollectionConfig } from '../../../src/collections/config/types';

export const Example: CollectionConfig = {
  slug: "examples",
  fields: [
    {
      name: "direct",
      type: "text",
      required: true,
    },
    {
      type: "group",
      name: "group",
      fields: [
        {
          name: "inAGroup",
          type: "text",
          required: true,
        },
      ],
      required: true
    },
    {
      name: "array",
      type: "array",
      fields: [
        {
          name: "nested",
          type: "text",
          required: true,
        },
      ],
      required: true,
    },
  ],
};

export default Example;
