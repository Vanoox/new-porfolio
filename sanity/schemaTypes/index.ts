import { type SchemaTypeDefinition } from "sanity";
import { settings } from "./settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings],
};
