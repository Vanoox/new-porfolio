import { defineField, defineType } from "sanity";

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
      name: "contactard",
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

    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
  ],
});
