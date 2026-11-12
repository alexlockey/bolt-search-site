export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { guardRequest } from '../../lib/form-guard';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Enquiries land in Alex's main mailbox; replies go straight to the enquirer.
const TO = 'alex@boltjobs.com';
const FROM = 'Bolt Search website <contact@bolt-search.com>';

const LIMITS = { name: 120, email: 200, company: 160, role: 160, message: 5000 } as const;
type Field = keyof typeof LIMITS;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const guard = guardRequest(request, body);
    if (!guard.ok) return guard.response;

    const v = {} as Record<Field, string>;
    for (const key of Object.keys(LIMITS) as Field[]) {
      const raw = typeof body[key] === 'string' ? (body[key] as string).trim() : '';
      if (!raw || raw.length > LIMITS[key]) return json({ success: false, error: 'invalid_fields' }, 400);
      v[key] = raw;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) return json({ success: false, error: 'invalid_email' }, 400);

    const row = (label: string, value: string) =>
      `<tr><td style="padding:8px 12px;font-weight:600;background:#f6f6f3;width:140px;vertical-align:top;">${label}</td><td style="padding:8px 12px;white-space:pre-wrap;">${value}</td></tr>`;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;color:#121220;">
        <h2 style="margin:0 0 12px;">New brief from bolt-search.com</h2>
        <table style="border-collapse:collapse;width:100%;">
          ${row('Name', escape(v.name))}
          ${row('Email', `<a href="mailto:${escape(v.email)}">${escape(v.email)}</a>`)}
          ${row('Company', escape(v.company))}
          ${row('Role to hire', escape(v.role))}
          ${row('Message', escape(v.message))}
        </table>
        <p style="color:#5e5f6e;font-size:13px;margin-top:16px;">Reply to this email to answer ${escape(v.name)} directly.</p>
      </div>`;

    const text = `New brief from bolt-search.com\n\nName: ${v.name}\nEmail: ${v.email}\nCompany: ${v.company}\nRole to hire: ${v.role}\n\n${v.message}\n`;

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: v.email,
      subject: oneLine(`Website brief: ${v.role}, ${v.company} (${v.name})`).slice(0, 200),
      html,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      return json({ success: false, error: 'send' }, 502);
    }

    return json({ success: true }, 200);
  } catch (err) {
    console.error('Contact form error:', err);
    return json({ success: false, error: 'server' }, 500);
  }
};
