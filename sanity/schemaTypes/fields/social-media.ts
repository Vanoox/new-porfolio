import { defineField } from "sanity";

export const socialMedia = defineField({
  name: "social-media",
  type: "object",
  fields: [
    defineField({
      name: "url",
      type: "string",
    }),
    defineField({
      name: "handle",
      type: "string",
    }),
  ],
});
