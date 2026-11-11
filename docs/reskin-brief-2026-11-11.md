# Bolt Search site: brief (Phase 1, v2, 11 Nov 2026)

Process: site-build, full. v1 (one concept, two sectors on the homepage) was rejected on 11 Nov because naming the sectors narrowed the firm and read oddly side by side. This v2 replaces it.

Reason to change: the site is what people check after hearing from Bolt Search during the 30-day async placement test. That means prospects receiving cold emails from alex@bolt-search.com, recruiter marketplaces vetting Alex (Paraform first), candidates being approached, and referees. The current live site sells education-sector executive search, board advisory and fractional leadership, which none of them should see.

## 1. Goals, ranked (the higher one wins a conflict)
1. **Trust in under a minute.** A sceptical visitor who knows nothing about us, a founder or a Paraform reviewer, comes away thinking: a seasoned, technically literate recruiter who does this properly, and I could check his references.
2. **Optionality.** The site names no sectors or lanes. Any commercial or technical brief, in any market we test next, should look at home here. Lanes live in the emails, not on the site.
3. **One clear next step.** A short form or email to start a conversation, plus a way to ask for references.

## 2. Commercial test
- **Number:** visitors to `/contact/` who go on to send a form or email, during the 30-day test. Second number: Paraform approval, yes or no.
- **Measured by:** the GA `generate_lead` event, plus a count of replies that mention the site.
- **Baseline (taken before merge):** GA sessions and contact-page views for the last 30 days on www.bolt-search.com, and form enquiries in that period. To pull before launch.

## 3. The buyer
A founder, CEO, CRO or head of talent at a growth company (roughly 20 to 300 staff, often VC-backed, UK or US) hiring someone who carries a number or wins the technical sale. Second readers: marketplace reviewers and candidates.

## 4. What every page must prove
- **Outcome:** a hire that works, and that stays.
- **Number:** 10+ years; placement levels (CRO, CCO, account director, BD); any cleared figures (placements, retention).
- **Mechanism:** how a search runs, shown in enough detail that a technical reader can tell it is rigorous (brief, mapped market, calibrated shortlist, references taken on candidates).
- **Where the human sits:** Alex runs every search and makes every approach. Research tooling, including AI, sits behind him and gets a mention, never the headline.

## 5. What can be shown
- **Named:** Alex Lockey; his photo; his engineering degree; LinkedIn.
- **Unnamed:** past placements by role and company type (for example "CRO, PE-backed training group").
- **Never, unless Alex clears each one:** client names or logos, candidate names, fee levels.
- **Decided 11 Nov:** testimonials paraphrased from LinkedIn recommendations and from material on file (inbox, Mac files), anonymised where needed; "references on request" shown; anonymised placements listed by role and company type.

## 6. Out of bounds
No em dashes. No exclamation marks in headlines. Nothing on the alex-brand-voice banned list. No sectors or lanes on the site. No "AI recruiter" framing. No fee numbers. No offices that do not exist. Never say "we track thousands of companies" or any other unsourced figure.

## 7. Technical limits
Astro static plus the existing Vercel contact function. GA, Ahrefs, robots.txt, the sitemap and the OG image are kept. Mobile-first, with no overflow from 320 to 1024px. Fonts self-hosted where we change them. About 70 kB of JS at most, and no content gated on JS. Design lint at 0 FAIL, and a clean detector run.

## 8. Size of move
**Decided 11 Nov: showcase.** Technical literacy is shown through craft: a visible search method, sharp typography, real artefacts (anonymised shortlist note, brief template), not through decoration.

## 9. Approvals
- Alex approved this brief on 11 Nov (positioning as written, showcase, proof sources above).
- Then the direction and references (Phase 2).
- Then picks one of three concepts (Phase 3).
- Then reviews and merges the build PR (Phase 4). Nothing goes to production without his yes.

## North-star check
This site proves Bolt Search's competence as a recruiter. It does not teach. It sits outside the alexlockey.com MTP message map, and stays on brand voice.

## Decisions already made (11 Nov) that carry over
- The form routes via Resend to alex@boltjobs.com, with reply-to set to the enquirer.
- Service pages are gone, with 301s to the home page.
- Insights are kept as a hidden, noindex archive. The onboarding forms are kept, unlinked.
- The footer reads "UK-based. Working with UK and US companies."

## Estimate (revised)
- **Build effort:** 3 to 4 sessions, about 5 to 8h, with the rounds this process expects (three concepts and at least one revision).
- **Calendar:** concepts within a day of direction approval; live once Alex picks and merges. Waits: Alex's review rounds, plus testimonial and referee permissions if wanted.
- **Tail:** 1 to 2h of copy after the first replies; under 30 minutes a month.
