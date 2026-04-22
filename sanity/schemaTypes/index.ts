import { type SchemaTypeDefinition } from "sanity";
import { home } from "./home";
import { voiceActing } from "./voice-acting";
import { lessons } from "./lessons";
import { training } from "./training";
import { contact } from "./contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, voiceActing, lessons, training, contact],
};
