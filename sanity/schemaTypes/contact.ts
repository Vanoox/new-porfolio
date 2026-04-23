import { defineField, defineType } from "sanity";
import { language } from "./fields/language";

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
      type: "object",
      name: "contactForm",
      fields: [
        defineField({
          name: "formTitle",
          type: "string",
        }),
        defineField({
          type: "object",
          name: "nameField",
          fields: [
            defineField({
              name: "name",
              type: "string",
            }),
            defineField({
              name: "namePlaceholder",
              type: "string",
            }),
          ],
        }),
        defineField({
          type: "object",
          name: "emailField",
          fields: [
            defineField({
              name: "email",
              type: "string",
            }),
            defineField({
              name: "emailPlaceholder",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "topicField",
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "topicContent",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            }),
          ],
        }),
        defineField({
          type: "object",
          name: "messageField",
          fields: [
            defineField({
              name: "message",
              type: "string",
            }),
            defineField({
              name: "messagePlaceholder",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "submitButton",
          type: "string",
        }),
        defineField({
          name: "policyInforamation",
          type: "object",
          fields: [
            defineField({
              name: "policyText",
              type: "string",
            }),
            defineField({
              name: "linkButton",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "confirmationMessage",
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
          name: "sendingMessage",
          type: "string",
        }),
      ],
    }),
    language,
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Page",
      };
    },
  },
});
