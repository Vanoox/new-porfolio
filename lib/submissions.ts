"use server";

import { client } from "@/sanity/lib/client";
import z from "zod";

export type CreateSubmissionsResult = {
  success: boolean;
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
  if (!result.success) {
    return {
      success: false,
    };
  }
  try {
    await client.create({
      _type: "submissions",
      name: result.data.name,
      email: result.data.email,
      topic: result.data.topic,
      message: result.data.message,
      date: new Date().toISOString(),
    });
    return {
      success: true,
    };
  } catch (error) {
    console.error("Error creating submission:", error);
    return {
      success: false,
    };
  }
}
