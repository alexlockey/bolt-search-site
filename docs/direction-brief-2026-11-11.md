# Bolt Search site: direction brief (Phase 2, 11 Nov 2026)

Input: the approved brief, `docs/reskin-brief-2026-11-11.md` v2 (showcase, no sectors, proof from recommendations and anonymised placements, references on request).

## 1. Audit
| Surface | Pages | Design lint |
|---|---|---|
| Live site (main) | Home, search, advisory, fractional, sectors, about, contact, subscribe, insights (12), knowledge base (4), two onboarding forms, two thank-you pages, 404 | **108 FAIL**, 41 WARN |
| v1 branch (rejected copy) | Home, about, contact, plus the hidden insights archive and onboarding forms | 22 FAIL (all in the untouched archive and onboarding pages), 0 on the redesigned pages |

Detector on v1: the fonts are the only finding (Inter, Plus Jakarta Sans).

Baseline for the commercial test: the GA connection in OpenSEO needs reconnecting, and Ahrefs Web Analytics is not on the current plan. **Alex needs to read the last 30 days of sessions and contact-page views in GA (property G-DH9Y7K83RM) before the merge,** or reconnect Google in Airspace so I can pull them.

## 2. References (captured live today in the built-in browser)
| Reference | Measured | Take | Leave |
|---|---|---|---|
| Paraform (the marketplace that will vet us) | Bureau Serif headlines at 50px, -1px tracking, regular weight; sans body at 14px; a pale mint ground; a photo hero; 524 words; numbers in the hero ("27-day average time to hire"); attributed quote cards | A serif and sans pairing that reads editorial rather than SaaS; specific numbers early; quotes with role and company | The email-capture hero, the logo wall and the "AI agents" pitch |
| Daversa Partners (VC-backed exec search) | #F4F4F4 ground; Sentient serif at 43px, -1.7px tracking; Neue Haas body; **364 words**; each placement told as a short story ("Shaping coding workflows") | Placements as one-line stories with the company type and what the hire did. A low word count | A logo-and-name-heavy grid (we are anonymising) |
| Riviera Partners (tech exec search) | Aileron bold at 92px; 1,575 words; a logo marquee; a full cookie wall; 5 videos | The category default, shown so we can avoid it | The logo wall, the cookie wall and the volume of copy |
| Oxide Computer | Dark oklch ground; Suisse Intl at 65px, regular weight; GT America Mono labels at 11px in capitals; figure labels like "FIG. 1"; a CLI frame in the hero | **Technical literacy through artefacts**: labelled figures, mono metadata, the work shown as working documents | A dark terminal theme throughout, which would read cold for a people business |
| Linear | #08090A ground; Inter Variable at 510 weight, 56px, -1.2px tracking; the product UI as the hero; a blank screen at load in our capture | Precision in spacing and type; the artefact as the hero image | The blank-at-load reveal; Inter |

**Split:** Daversa and Paraform set the voice and the proof model. Oxide sets how we show technical literacy: the search method as labelled artefacts. Linear sets the craft bar.

## 3. Direction in one line
**Show the working.** Bolt Search reads like a recruiter who works like an engineer: every claim is backed by an artefact you can look at (a brief, a market map, a shortlist note, a reference), set with editorial calm. No sectors. Alex visible throughout.

## 4. System, as the starting point for the three concepts
- **Type** (open licence, self-hosted via @fontsource 5.3.0, pinned):
  - Newsreader (serif) for display;
  - IBM Plex Sans for body text;
  - IBM Plex Mono for labels and figure captions.
  - None of them is on either detector's overused list. Plex has engineering heritage; Newsreader gives the editorial voice.
- **Colour:** keep the Bolt navy (#1E1D30) as the ink. Concepts A and C use a paper ground and Concept B a dark ground. One accent on buttons and live figures, chosen per concept.
- **Words:** under about 450 on the homepage.
- **Artefacts:** an anonymised shortlist note and a market-map summary, built as HTML (not images) and labelled `EXAMPLE` or `ILLUSTRATIVE` wherever the data is not real.
- **Proof:** paraphrased recommendations with role and company type; anonymised placements; "References on request" as a button that opens the form with the subject pre-filled.
- **Motion:** CSS only, one scroll-driven reveal at most, inside `@supports`, with a still version under reduced motion. No content waits on JS.
- **JS budget:** under about 5 kB beyond GA and Ahrefs.

## 5. Tool verdicts for this brief
| Tool | Verdict | Reason |
|---|---|---|
| @fontsource Newsreader, IBM Plex Sans, IBM Plex Mono 5.3.0 (OFL) | Use, pinned, `npm install --ignore-scripts` | Self-hosted fonts are a technical default; all three are open licence |
| Taste-skill lint, Impeccable 4.7.1 detector | Use, run from the alexlockey-com-v3 kit (not installed here; the per-repo kit is a separate job) | The quality gates |
| GSAP, Lenis, OGL, Rive, Spline | Skip | No scrubbed scenes or WebGL needed; this site's craft is type and artefacts |
| Paper (canvas MCP) | Skip this round | Not connected in this session; three coded concepts on a preview are quicker to review |
| 21st.dev | Skip | React and Tailwind; this is an Astro site with plain CSS |

## 6. The three concepts for Phase 3 (previewed with a switcher)
- **A. The Dossier.** Light paper ground; Newsreader display. The homepage reads like a well-set search report: the track record as a ledger, an anonymised shortlist note as the hero artefact, recommendations as margin quotes. Calm and senior.
- **B. The Instrument** (the bigger move). Dark ground, Plex Sans and Mono. A search is shown as an instrument panel: brief, then mapped, approached, spoken to, shortlisted, with counts from an illustrative search, then placed and still there at 12 months. It reads technical. The risk is that it reads cold.
- **C. The Partner.** Warm and editorial, in the Paraform register. A large serif statement, then Alex's portrait large, recommendations first, very few words, the method shown second. People-led trust.

All three use the same copy deck. That way you compare the direction, not the words.

**STOP:** Alex approves the direction and the tools, or changes them, before the concepts are built.
