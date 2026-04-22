import { defineField } from "sanity";
export const language = defineField({
  name: "language",
  type: "string",
  options: {
    list: [
      { title: "pl", value: "pl" },
      { title: "en", value: "en" },
      { title: "jp", value: "jp" },
    ],
  },
  readOnly: false,
  hidden: false,
  validation: (rule) => rule.required(),
});
