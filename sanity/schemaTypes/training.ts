import { defineField, defineType } from "sanity";

export const training = defineType({
  name: "training",
  title: "Training",
  type: "document",
  fields: [
    defineField({
      name: "mainTitle",
      type: "string",
    }),
    defineField({
      name: "mainDescription",
      type: "text",
    }),
    defineField({
      name: "personalTreningCard",
      type: "object",
      fields: [
        defineField({
          name: "image",
          type: "image",
        }),
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "description",
          type: "text",
        }),
        defineField({
          name: "button",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "pilatesTreningCard",
      type: "object",
      fields: [
        defineField({
          name: "image",
          type: "image",
        }),
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "description",
          type: "text",
        }),
        defineField({
          name: "button",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
  ],
});
