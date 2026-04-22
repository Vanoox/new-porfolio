import { defineField, defineType } from "sanity";
import { language } from "./fields/language";

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

    language,
  ],
  preview: {
    prepare() {
      return {
        title: "Training Page",
      };
    },
  },
});
