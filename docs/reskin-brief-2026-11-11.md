# Bolt Search reskin: brief and concept (11 Nov 2026)

Process: site-build, light shape (one session, one concept, no research round). Reason to change: the site is the page prospects check behind cold emails from the 30-day async placement test. The current site sells education-sector executive search, board advisory and fractional leadership, which no longer matches the outreach.

## Brief
1. **Goals, ranked** (higher wins a conflict)
   1. Credible landing page for a cold-email prospect who clicks through in under a minute.
   2. Turn interest into a brief: one clear contact form.
   3. Stay generic enough for future lanes without a rebuild.
2. **Commercial test:** contact form submissions and replies that reference the site, during the 30-day test. Baseline: 0 form enquiries tied to the test (new lanes, new audience). GA pageviews on `/` and `/contact/` before merge are the traffic baseline.
3. **Buyer:** founder, CEO, CRO or head of sales at a growth company (roughly 20 to 300 staff) making a commercial or technical hire it cannot afford to get wrong.
4. **Every page proves:** the hiring problem (outcome), 10+ years and the level of past placements (number), how a search runs (mechanism), and that Alex runs every search himself (where the human sits). AI-assisted sourcing appears once, as a supporting line.
5. **Shown:** role types placed (CRO, CCO, account director, BD). **Never:** client names or logos (the old homepage list of six is removed) unless Alex clears each one.
6. **Out of bounds:** no em dashes, no exclamation marks, alex-brand-voice banned list, no fee numbers, no "AI recruiter" framing, no claims of offices that are not real.
7. **Technical:** Astro static plus one Vercel function; existing GA and Ahrefs tags, robots.txt, sitemap and OG image kept; no new dependencies; JS only for the menu and the form.
8. **Size of move:** smallest that works.
9. **Approvals:** Alex approves form routing and what happens to old pages (below), then the preview, then merges.

## Concept: "Hires that carry the number"
- One idea: the hires growth companies cannot afford to get wrong are the ones that carry revenue or win the technical sale. Bolt Search finds those people.
- Pages: Home, About, Contact. Everything else redirects (see decisions).
- Home: headline on the hiring problem; two "current focus" cards (on-site power and data centre infrastructure; first UK and EMEA hires for US startups); the roles we fill; how a search runs in four steps; credibility strip (10+ years, CRO, CCO, account director and BD placements); contact call to action.
- Look: keep the navy and blue brand and the logo, strip the gradient orbs, parallax, scroll bar and counter animations. Plain type, generous white space, one accent colour.
- Words per screen: under 80.

## Estimate (build-estimate rules)
- **Build effort:** about 2 sessions, 3 to 5h (microsite row, 3 pages plus a form change on an existing Vercel function).
- **Calendar:** preview today; live after Alex answers the two decisions and approves the preview.
- **Tail:** 1 to 2h of copy changes after first replies; under 30 min a month upkeep.
