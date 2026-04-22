import { defineField, defineType } from "sanity";
import { language } from "./language";

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
      validation: (Rule) => Rule.length(3).error("You can only have 3 cards"),
    }),
    language,
  ],
});
