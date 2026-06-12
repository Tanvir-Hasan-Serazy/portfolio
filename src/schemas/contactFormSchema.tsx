import { z } from "zod";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(64, { message: "Name must be at most 64 characters." }),

  email: z.string().email({ message: "Enter a valid email address." }),

  subject: z
    .string()
    .min(4, { message: "Subject must be at least 4 characters." })
    .max(100, { message: "Subject must be at most 100 characters." }),

  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters." })
    .max(2000, { message: "Message must be at most 2000 characters." }),
});
