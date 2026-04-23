import { defineField, defineType } from "sanity";
import { language } from "./fields/language";

export const lessons = defineType({
  name: "lessons",
  title: "Lessons",
  type: "document",
  fields: [
    defineField({
      name: "leftSide",
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
      ],
    }),
    defineField({
      name: "rightSide",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "description",
          type: "text",
        }),
        defineField({
          name: "englishCard",
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "description",
              type: "text",
            }),
          ],
        }),
        defineField({
          name: "japaneseCard",
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "description",
              type: "text",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "contactCard",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "description",
          type: "text",
        }),
        defineField({
          name: "nameButton",
          type: "string",
        }),
      ],
    }),

    language,
  ],
  preview: {
    prepare() {
      return {
        title: "Lessons Page",
      };
    },
  },
});
