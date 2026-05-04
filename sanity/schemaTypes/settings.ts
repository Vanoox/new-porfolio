import { defineField, defineType } from "sanity";
import { socialMedia } from "@/sanity/schemaTypes/fields/social-media";
import React from "react";

const e = React.createElement;
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
      description: e(
        "span",
        { style: { display: "block", marginTop: "0.5em" } },
        "Set your website's graphic styles using CSS variables.",
        e(
          "ol",
          { style: { marginTop: "0.5em", paddingLeft: "1.5em", lineHeight: "1.6" } },
          e(
            "li",
            null,
            "Go to ",
            e(
              "a",
              {
                href: "https://tweakcn.com/editor/theme",
                target: "_blank",
                rel: "noopener noreferrer",
                style: { textDecoration: "underline", color: "#2276fc" },
              },
              "https://tweakcn.com/editor/theme",
            ),
          ),
          e("li", null, "Set the colors, then generate the code using the “Code” button"),
          e(
            "li",
            null,
            "Paste ",
            e(
              "code",
              {
                style: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#e2e8f0",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.1)",
                },
              },
              ":root",
            ),
            " and ",
            e(
              "code",
              {
                style: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#e2e8f0",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.1)",
                },
              },
              ".dark",
            ),
            " into the editor",
          ),
        ),
      ),
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
