"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/schemas/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoaderOne } from "../ui/loader";

type SubmitState = "idle" | "loading" | "success" | "error";

// Shared input class

const inputCn = cn(
  "font-mono text-base text-rose-100 placeholder:text-sm md:placeholder-text-base placeholder:text-[#5a3535]",
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
      setTimeout(() => {
        setSubmitState("idle");
      }, 3000);
    } catch {
      setSubmitState("error");
    } finally {
      // Reset back to idle after 3 s so the user can try again
      setTimeout(() => setSubmitState("idle"), 5000);
    }
  }

  const isLoading = submitState === "loading";

  return (
    <div
      className={cn(
        "w-full md:max-w-xl lg:w-2xl rounded-md border p-8",
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
                  className={cn(
                    inputCn,
                    "w-full resize-none wrap-break-words overflow-wrap-anywhere",
                  )}
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
            "w-auto min-w-50 gap-3 px-8  py-6",
            "uppercase tracking-widest text-sm font-medium lg:text-base",
            "bg-primary hover:bg-[#a02020] active:bg-[#6b1010]",
            "text-[#f0d0d0] border-none rounded-md",
            "transition-all duration-200",
            submitState === "success" && "bg-emerald-800 hover:bg-emerald-700",
            submitState === "error" && "bg-red-900 hover:bg-red-800",
          )}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              {/* <Loader2 className="h-4 w-4 animate-spin" /> */}
              <div className="mb-3">
                <LoaderOne />
              </div>
              Sending...
            </div>
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
