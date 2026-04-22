import { defineField, defineType } from "sanity";
import { language } from "./language";

export const contact = defineType({
  name: "contact",
  title: "Contact",
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
      name: "emailTitle",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    language,
  ],
});
