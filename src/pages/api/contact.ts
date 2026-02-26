export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body as {
      name: string;
      email: string;
      company?: string;
      subject: string;
      message: string;
    };

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ success: false, error: 'missing_fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;">
        <h2 style="color:#1E1D30;border-bottom:2px solid #3B82F6;padding-bottom:8px;">New Contact Form Enquiry</h2>
        <table style="border-collapse:collapse;width:100%;margin-top:16px;">
          <tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;background:#f9f9f9;width:140px;">Name</td><td style="padding:8px 12px;border:1px solid #e5e5e5;">${name}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;background:#f9f9f9;">Email</td><td style="padding:8px 12px;border:1px solid #e5e5e5;"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;background:#f9f9f9;">Company</td><td style="padding:8px 12px;border:1px solid #e5e5e5;">${company}</td></tr>` : ''}
          <tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;background:#f9f9f9;">Subject</td><td style="padding:8px 12px;border:1px solid #e5e5e5;">${subject}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;background:#f9f9f9;">Message</td><td style="padding:8px 12px;border:1px solid #e5e5e5;white-space:pre-wrap;">${message}</td></tr>
        </table>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'Bolt Search Contact <contact@bolt-search.com>',
      to: ['alex@bolt-search.com'],
      replyTo: email,
      subject: `Contact Enquiry: ${subject} — ${name}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ success: false, error: 'send' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ success: false, error: 'server' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
