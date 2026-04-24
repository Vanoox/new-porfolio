import { type SchemaTypeDefinition } from "sanity";
import { contact } from "./contact";
import { home } from "./home";
import { lessons } from "./lessons";
import { settings } from "@/sanity/schemaTypes/settings";
import { training } from "./training";
import { voiceActing } from "./voice-acting";
import { navigation } from "./navigation";
import { privacyPolicy } from "./privacy-policy";
import { submissions } from "./submissions";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contact, home, lessons, settings, training, voiceActing, navigation, privacyPolicy, submissions],
};
