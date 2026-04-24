"use server";

import z from "zod";

export type CreateSubmissionsResult = {
  success: boolean;
  message: string;
};

const submissionSchema = z.object({
  name: z.string().max(256),
  email: z.email().max(256),
  topic: z.string().max(256),
  message: z.string().max(4096),
});
export async function createSubmissions(formData: FormData): Promise<CreateSubmissionsResult> {
  const name = formData.get("name");
  const email = formData.get("email");
  const topic = formData.get("topic");
  const message = formData.get("message");

  const result = submissionSchema.safeParse({ name, email, topic, message });
  console.log(result);
  if (!result.success) {
    return {
      success: false,
      message: "dupa",
    };
  } else {
    return {
      success: true,
      message: "gówno",
    };
  }

  console.log(name, email, topic, message);
  // Mutate data
  // Revalidate cache
}
