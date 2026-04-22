import { defineField, defineType } from "sanity";
import { language } from "./language";

export const voiceActing = defineType({
  name: "voiceActing",
  title: "Voice Acting",
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
      name: "audioSection",
      type: "object",
      fields: [
        defineField({
          name: "titleAudioSection",
          type: "string",
        }),
        defineField({
          name: "audioFiles",
          type: "array",
          of: [
            {
              type: "object",
              name: "audio",
              fields: [
                defineField({
                  name: "audioName",
                  type: "string",
                }),
                defineField({
                  name: "file",
                  type: "file",
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "videoSection",
      type: "object",
      fields: [
        defineField({
          name: "titleVideoSection",
          type: "string",
        }),
        defineField({
          name: "viewYTButton",
          type: "string",
        }),
        defineField({
          name: "videoBackup",
          type: "array",
          of: [
            defineField({
              name: "video",
              type: "url",
            }),
          ],
        }),
      ],
    }),
    language,
  ],
});
