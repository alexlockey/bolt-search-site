/**
 * Shared bot guard for the public form endpoints.
 *
 * Added Aug 2026 after alexlockey.com was used for subscription bombing:
 * an unprotected POST endpoint that sends email is found by scanners within
 * days and abused at volume. These endpoints mail Alex rather than the
 * submitted address, so the risk is inbox flooding and Resend sender
 * reputation rather than third-party bombing, but the fix is the same.
 *
 * Two layers, both invisible to real users:
 *  1. Honeypot. Every form carries a hidden "website" field. Humans never
 *     fill it; bots that autofill every input do. Filled means silently
 *     accepted and dropped, so the bot sees success and does not retry.
 *  2. Origin/Referer. Browser fetch always sends an Origin. Scripted POSTs
 *     usually send neither, or a foreign one.
 */

const ALLOWED = ['bolt-search.com', 'localhost'];

const fromSite = (value: string) => ALLOWED.some((host) => value.includes(host));

export type GuardResult = { ok: true } | { ok: false; response: Response };

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export function guardRequest(request: Request, body: Record<string, unknown>): GuardResult {
  // 1. Honeypot: pretend it worked, send nothing. The contact form posts flat
  // fields; the onboarding forms nest everything under `fields`, so check both.
  const nested = (body.fields as Record<string, unknown> | undefined) || {};
  if (body.website || nested.website) {
    return { ok: false, response: json({ success: true }, 200) };
  }

  // 2. Origin check.
  const origin = request.headers.get('origin') || '';
  const referer = request.headers.get('referer') || '';
  if ((origin && !fromSite(origin)) || (!origin && !fromSite(referer))) {
    return { ok: false, response: json({ success: false, error: 'rejected' }, 403) };
  }

  return { ok: true };
}

/** Hidden field markup. Keep the name in sync with guardRequest above. */
export const HONEYPOT_HTML =
  '<input type="text" name="website" class="hp-trap" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;border:0;padding:0" />';
