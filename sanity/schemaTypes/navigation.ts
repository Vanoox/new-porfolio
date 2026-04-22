import { defineField, defineType } from "sanity";
import { language } from "./fields/language";
export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      type: "object",
      name: "navigations",
      fields: [
        defineField({
          type: "string",
          name: "home",
          title: "Home",
        }),
        defineField({
          type: "string",
          name: "voiceActing",
          title: "Voice Acting",
        }),
        defineField({
          type: "string",
          name: "lessons",
          title: "Lessons",
        }),
        defineField({
          type: "string",
          name: "training",
          title: "Training",
        }),
        defineField({
          type: "string",
          name: "contact",
          title: "Contact",
        }),
      ],
    }),
    defineField({
      type: "string",
      name: "languageSwitcher",
      title: "Languages Switcher",
    }),
    language,
  ],
  preview: {
    prepare() {
      return {
        title: "Navigation Settings",
      };
    },
  },
});
