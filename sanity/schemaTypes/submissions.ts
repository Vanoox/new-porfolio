import { defineField, defineType } from "sanity";

export const submissions = defineType({
  name: "submissions",
  title: "Submissions",
  type: "document",
  fields: [
    defineField({
      name: "date",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "email",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "topic",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "message",
      type: "text",
      readOnly: true,
    }),
  ],
});
