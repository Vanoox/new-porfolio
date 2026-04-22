import { defineField, defineType } from "sanity";
import { socialMedia } from "@/sanity/schemaTypes/fields/social-media";

export const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "contactEmail",
      type: "string",
    }),
    defineField({
      type: "object",
      name: "socials",
      fields: [
        defineField({
          ...socialMedia,
          name: "instagram",
        }),
        defineField({
          ...socialMedia,
          name: "tiktok",
        }),
        defineField({
          ...socialMedia,
          name: "youtube",
        }),
        defineField({
          ...socialMedia,
          name: "twitch",
        }),
        defineField({
          ...socialMedia,
          name: "x",
          title: "X / Twitter",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
