export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse JSON body (avoids Vercel's cross-site form POST restriction)
    const body = await request.json();
    const { fields, attachments: rawAttachments } = body as {
      fields: Record<string, string>;
      attachments: { filename: string; data: string }[];
    };

    // Decode base64 attachments
    const attachments = (rawAttachments || []).map(a => ({
      filename: a.filename,
      content: Buffer.from(a.data, 'base64'),
    }));

    // Build email HTML
    const fullName = fields['Full Name'] || 'Unknown';
    const tradingType = fields['Trading Type'] || 'Not specified';

    const fieldRows = Object.entries(fields)
      .map(([key, val]) => `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;background:#f9f9f9;width:220px;vertical-align:top;">${key}</td><td style="padding:8px 12px;border:1px solid #e5e5e5;">${val}</td></tr>`)
      .join('');

    const attachmentNote = attachments.length > 0
      ? `<p style="margin-top:16px;color:#666;">${attachments.length} document(s) attached to this email.</p>`
      : '<p style="margin-top:16px;color:#999;">No documents were uploaded.</p>';

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;">
        <h2 style="color:#1E1D30;border-bottom:2px solid #3B82F6;padding-bottom:8px;">New Contractor Onboarding</h2>
        <p><strong>${fullName}</strong> has submitted their onboarding form.</p>
        <p>Trading as: <strong>${tradingType}</strong></p>
        <table style="border-collapse:collapse;width:100%;margin-top:16px;">
          ${fieldRows}
        </table>
        ${attachmentNote}
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'Bolt Search Onboarding <onboarding@resend.dev>',
      to: ['lockey.alex@gmail.com'],  // TODO: change to alex@bolt-search.com after verifying domain in Resend
      subject: `Contractor Onboarding: ${fullName}`,
      html,
      attachments: attachments.map(a => ({
        filename: a.filename,
        content: a.content,
      })),
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
    console.error('Onboarding form error:', err);
    return new Response(JSON.stringify({ success: false, error: 'server' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
