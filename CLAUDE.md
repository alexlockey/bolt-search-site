# bolt-search-site

## Front-end work runs through site-build
All front-end work on this repo follows the house site-build process (`alex-operating-system/.claude/skills/site-build/SKILL.md`): goals first, research, concepts, then build on a preview with the quality gates. Alex merges; nothing goes to production without his yes.

Gates before asking to merge:
- Design lint, 0 FAIL on every changed file: `node <alexlockey-com-v3>/tools/taste-skill/scripts/lint.mjs <files>`
- Impeccable detector on the built HTML: `IMPECCABLE_NO_TELEMETRY=1 <alexlockey-com-v3>/.claude/skills/impeccable/scripts/impeccable detect .vercel/output/static/**/index.html`
- `npm run build` passes; no horizontal overflow from 320 to 1024px; nothing gated on JS.

## Design method
Concepts and redesigns follow the taste-skill run in full (`<alexlockey-com-v3>/tools/taste-skill/SKILL.md`): inventory, argument, `draw.mjs` directions, the idea sentence, one live thing, real pictures (four or more), `inspect.mjs` at 0 FAIL, a written critique, then the motion layer. Its house rules apply without exception (no monospace, eyebrows, index numbers, hairlines, shadows, gradients or card grids). No brand overrides are documented.

## Content rules
- No em dashes. No sectors or lanes named on the site (11 Nov 2026 brief).
- This repo is public: never commit client or candidate names. Proof sources with names live in `alex-operating-system/projects/async-placement-test/bolt-search-proof-sources.md`.
- Only verified track-record claims (see that file). No CCO or account director placement is on record.
