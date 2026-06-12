// app/api/contact/route.ts
// ─────────────────────────────────────────────────────────────────────────────
// Install: npm install resend
// Add to .env.local:  RESEND_API_KEY=re_xxxxxxxxxxxx
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/schemas/contactFormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

// The address that receives the contact emails
const TO_EMAIL = "thserazy@gmail.com";

// The "from" address must be a verified domain in your Resend account.
// During development you can use: onboarding@resend.dev  (sends only to your own account)
const FROM_ADDRESS = "onboarding@resend.dev";

export async function POST(req: Request) {
  // ── 1. Parse body ──────────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // ── 2. Validate with Zod ───────────────────────────────────────────────────
  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const { name, email, subject, message } = parsed.data;

  // ── 3. Send via Resend ─────────────────────────────────────────────────────
  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [TO_EMAIL],
    replyTo: email,
    subject: `[Contact] ${subject}`,

    // Plain-text fallback
    text: `
New contact form submission
───────────────────────────
Name:    ${name}
Email:   ${email}
Subject: ${subject}

${message}
    `.trim(),

    // Optional HTML body — remove if you prefer text-only
    html: `
      <table style="font-family:monospace;font-size:14px;color:#1a1a1a;max-width:600px">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Subject</strong></td><td>${subject}</td></tr>
      </table>
      <hr/>
      <p style="font-family:monospace;white-space:pre-wrap">${message}</p>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
}
