import { defineField, defineType } from "sanity";
import { socialMedia } from "@/sanity/schemaTypes/fields/social-media";
import { de } from "zod/locales";

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
    defineField({
      name: "webstieName",
      type: "string",
    }),
    defineField({
      name: "websiteFavicon",
      type: "image",
    }),
    defineField({
      name: "cssVariables",
      title: "Color styles",
      description: `Set your website's graphic styles using CSS variables.\n1. Go to https://tweakcn.com/editor/theme\n2. Set the colors, then generate the code using the “Code” button\n3. Paste :root and .dark into the editor`,
      type: "text",
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
