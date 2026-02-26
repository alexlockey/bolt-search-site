export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { fields, attachments: rawAttachments } = body as {
      fields: Record<string, string>;
      attachments: { filename: string; data: string }[];
    };

    const attachments = (rawAttachments || []).map(a => ({
      filename: a.filename,
      content: Buffer.from(a.data, 'base64'),
    }));

    const companyName = fields['Full Legal Entity Name'] || 'Unknown Company';

    // Separate company-level fields from placement fields
    const companyFields: Record<string, string> = {};
    const placements: Record<string, Record<string, string>> = {};

    for (const [key, val] of Object.entries(fields)) {
      const match = key.match(/^P(\d+)\s(.+)$/);
      if (match) {
        const pNum = match[1];
        const fieldName = match[2];
        if (!placements[pNum]) placements[pNum] = {};
        placements[pNum][fieldName] = val;
      } else {
        companyFields[key] = val;
      }
    }

    // Build email HTML
    const companyRows = Object.entries(companyFields)
      .map(([key, val]) => `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;background:#f9f9f9;width:240px;vertical-align:top;">${key}</td><td style="padding:8px 12px;border:1px solid #e5e5e5;">${val}</td></tr>`)
      .join('');

    let placementHtml = '';
    const placementNums = Object.keys(placements).sort((a, b) => Number(a) - Number(b));

    for (const num of placementNums) {
      const p = placements[num];
      const contractorName = p['Contractor Name'] || 'Unknown';
      const rows = Object.entries(p)
        .map(([key, val]) => `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;background:#f9f9f9;width:240px;vertical-align:top;">${key}</td><td style="padding:8px 12px;border:1px solid #e5e5e5;">${val}</td></tr>`)
        .join('');

      placementHtml += `
        <h3 style="color:#1E1D30;margin-top:24px;padding-top:16px;border-top:2px solid #3B82F6;">Placement ${num}: ${contractorName}</h3>
        <table style="border-collapse:collapse;width:100%;margin-top:8px;">${rows}</table>
      `;
    }

    const attachmentNote = attachments.length > 0
      ? `<p style="margin-top:16px;color:#666;">${attachments.length} document(s) attached to this email.</p>`
      : '';

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:700px;">
        <h2 style="color:#1E1D30;border-bottom:2px solid #3B82F6;padding-bottom:8px;">New Client Onboarding</h2>
        <p><strong>${companyName}</strong> has submitted their client onboarding form with <strong>${placementNums.length}</strong> placement(s).</p>

        <h3 style="color:#1E1D30;margin-top:24px;">Company Details</h3>
        <table style="border-collapse:collapse;width:100%;margin-top:8px;">${companyRows}</table>

        ${placementHtml}
        ${attachmentNote}
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'Bolt Search Client Onboarding <onboarding@bolt-search.com>',
      to: ['alex@bolt-search.com'],
      subject: `Client Onboarding: ${companyName} (${placementNums.length} placement${placementNums.length > 1 ? 's' : ''})`,
      html,
      attachments: attachments.map(a => ({ filename: a.filename, content: a.content })),
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
    console.error('Client onboarding error:', err);
    return new Response(JSON.stringify({ success: false, error: 'server' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
