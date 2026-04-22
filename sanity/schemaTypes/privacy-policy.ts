import { defineField, defineType } from "sanity";
import { language } from "./fields/language";

export const privacyPolicy = defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  fields: [
    defineField({
      name: "mainTitle",
      type: "string",
    }),
    defineField({
      name: "policyContent",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "confirmedButton",
      type: "string",
    }),
    language,
  ],
});
