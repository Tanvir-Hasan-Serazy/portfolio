"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SendHorizontal, Loader2 } from "lucide-react";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

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

export type ContactFormValues = z.infer<typeof contactFormSchema>;

type SubmitState = "idle" | "loading" | "success" | "error";

// ─── Shared input class ───────────────────────────────────────────────────────

const inputCn = cn(
  "font-mono text-base text-rose-100 placeholder:text-[#5a3535]",
  "bg-[#120d0d] border border-[#3a1f1f]",
  "focus-visible:ring-1 focus-visible:ring-[#8b1a1a] focus-visible:border-[#8b1a1a]",
  "rounded-md transition-colors duration-150 h-10",
);

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to send message.");

      setSubmitState("success");
      form.reset();
    } catch {
      setSubmitState("error");
    } finally {
      // Reset back to idle after 3 s so the user can try again
      setTimeout(() => setSubmitState("idle"), 3000);
    }
  }

  const isLoading = submitState === "loading";

  return (
    <div
      className={cn(
        "w-full max-w-xl lg:w-2xl rounded-md border p-8",
        "bg-[#111010] border-[#3a1f1f]",
        "shadow-[0_0_40px_rgba(139,0,0,0.08)]",
      )}
    >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
      >
        {/* Row: Name + Email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel className="uppercase tracking-widest text-secondary">
              Name
            </FieldLabel>

            <FieldContent>
              <Controller
                control={form.control}
                name="name"
                render={({ field }) => (
                  <Input
                    placeholder="John Doe"
                    autoComplete="name"
                    className={inputCn}
                    {...field}
                  />
                )}
              />
            </FieldContent>

            <FieldError errors={[form.formState.errors.name]} />
          </Field>

          <Field>
            <FieldLabel className="uppercase tracking-widest text-secondary">
              Email
            </FieldLabel>

            <FieldContent>
              <Controller
                control={form.control}
                name="email"
                render={({ field }) => (
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    className={inputCn}
                    {...field}
                  />
                )}
              />
            </FieldContent>

            <FieldError errors={[form.formState.errors.email]} />
          </Field>
        </div>

        {/* Subject */}
        <Field>
          <FieldLabel className="uppercase tracking-widest text-secondary">
            Subject
          </FieldLabel>

          <FieldContent>
            <Controller
              control={form.control}
              name="subject"
              render={({ field }) => (
                <Input
                  placeholder="Technical Inquiry"
                  className={inputCn}
                  {...field}
                />
              )}
            />
          </FieldContent>

          <FieldError errors={[form.formState.errors.subject]} />
        </Field>

        {/* Message */}
        <Field>
          <FieldLabel className="uppercase tracking-widest text-secondary">
            Message
          </FieldLabel>

          <FieldContent>
            <Controller
              control={form.control}
              name="message"
              render={({ field }) => (
                <Textarea
                  rows={6}
                  placeholder="Define project scope or collaboration details..."
                  className={cn(inputCn, "resize-none")}
                  {...field}
                />
              )}
            />
          </FieldContent>

          <FieldError errors={[form.formState.errors.message]} />
        </Field>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-auto min-w-50 gap-3 px-8 py-5",
            "font-mono text-[11px] uppercase tracking-widest",
            "bg-primary hover:bg-[#a02020] active:bg-[#6b1010]",
            "text-[#f0d0d0] border-none rounded-md",
            "transition-all duration-200",
            submitState === "success" && "bg-emerald-800 hover:bg-emerald-700",
            submitState === "error" && "bg-red-900 hover:bg-red-800",
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : submitState === "success" ? (
            "Message Sent ✓"
          ) : submitState === "error" ? (
            "Failed — Retry"
          ) : (
            <>
              Send Message
              <SendHorizontal className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
