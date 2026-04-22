import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "mainImage",
      type: "image",
    }),
    defineField({
      name: "mainTitle",
      type: "string",
    }),
    defineField({
      name: "mainDescription",
      type: "text",
    }),
    defineField({
      name: "cardsHome",
      type: "array",
      of: [
        {
          type: "object",
          name: "card",
          fields: [
            defineField({
              name: "cardTitile",
              type: "string",
            }),
            defineField({
              name: "cardDescription",
              type: "text",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: false,
    }),
  ],
});
