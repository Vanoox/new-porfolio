import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId, sanityApiToken } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: sanityApiToken,
  // Set to false if statically generating pages, using ISR or tag-based revalidation
});
