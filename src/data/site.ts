// One copy deck for every concept, so Alex compares direction, not words.
// Proof items (quotes, placements) are paraphrased and anonymised. Names stay out of this repo.

export const hero = {
  title: 'Hires that carry the number.',
  lede:
    'Bolt Search finds commercial and technical people for growth companies: the sellers, solutions engineers and leaders a plan depends on. Founder-led, research-heavy, and checked until every name on the shortlist can be defended.',
  primary: { label: 'Tell us about the role', href: '/contact/' },
  secondary: { label: 'Ask for references', href: '/contact/?about=references' },
};

export const facts = [
  { figure: '2007', label: 'recruiting since, with Bolt Search founded in 2016' },
  { figure: '50+', label: 'placements on record by 2023' },
  { figure: '15', label: 'recommendations from clients and placed candidates on LinkedIn' },
  { figure: '1', label: 'person runs your search, start to finish' },
];

export const roles = [
  'Account executives and founding AEs',
  'Business development and account management',
  'Solutions, sales and pre-sales engineers',
  'Implementation and customer success leads',
  'Bids, proposals and estimating',
  'Commercial leadership, including fractional CROs',
];

export const method = {
  title: 'How a search runs',
  intro:
    'Research tooling, including AI, maps a market fast. Every judgement and every approach is still made by Alex.',
  steps: [
    {
      name: 'Brief',
      body: 'A 30-minute call on what the first year has to deliver, what has not worked before, and who the person reports to.',
    },
    {
      name: 'Map',
      body: 'Every company and person who has done this work before, filtered on the things that predict success in your role.',
    },
    {
      name: 'Shortlist',
      body: 'A small number of people we have spoken to, each with a written note: why they fit, what they earn, what would move them, and the risk.',
    },
    {
      name: 'Close',
      body: 'Interviews, feedback, offer and notice period, then a check-in at 90 days with you and the hire.',
    },
  ],
};

// Illustrative artefacts. Labelled on the page; no real client or candidate data.
export const briefArtefact = {
  label: 'EXAMPLE BRIEF',
  role: 'Founding Account Executive, UK',
  company: 'Series B software company, US headquarters',
  rows: [
    ['Year one', 'Open the UK: first ten customers and a repeatable mid-market motion'],
    ['Reports to', 'VP Sales, US, eight hours behind'],
    ['Must have', 'Sold a technical product to UK buyers, alone, from first call to contract'],
    ['Will not work', 'Big-company sellers who have always had SDRs, SEs and a brand behind them'],
  ],
};

export const mapArtefact = {
  label: 'ILLUSTRATIVE SEARCH',
  rows: [
    { stage: 'Mapped', count: 214, note: 'people across 38 comparable companies' },
    { stage: 'Matched', count: 61, note: 'on deal size, buyer and stage' },
    { stage: 'Approached', count: 27, note: 'personally, by Alex' },
    { stage: 'Spoken to', count: 12, note: 'screened against the brief' },
    { stage: 'Shortlisted', count: 4, note: 'each with a written note' },
  ],
};

export const shortlistArtefact = {
  label: 'EXAMPLE SHORTLIST NOTE',
  candidate: 'Candidate B',
  rows: [
    ['Now', 'Enterprise AE, Series C data platform, London'],
    ['Why', 'Four years selling six-figure deals to UK financial services, mostly without an SE'],
    ['Earns', 'Base and OTE confirmed on the call, inside your range'],
    ['Would move for', 'First-hire scope and a say in who comes next'],
    ['Risk', 'Has not built a team yet. Reference from a former manager covers how they bring others on'],
  ],
};

// Paraphrased from LinkedIn recommendations (role only, by Alex's choice, 11 Nov 2026).
// Source map with names: alex-operating-system/projects/async-placement-test/bolt-search-proof-sources.md
export const quotes: { text: string; who: string }[] = [
  {
    text: 'Before going to market he got to grips with the role, the organisation and where the job was heading.',
    who: 'Founder and board adviser, hiring client',
  },
  {
    text: 'He worked out the skills our board needed and introduced eleven strong people. We appointed three of them.',
    who: 'Founder, hiring client',
  },
  {
    text: 'He ran our interim leadership search quickly and well, kept us updated throughout and gave useful advice along the way.',
    who: 'CEO, hiring client',
  },
  {
    text: "I wasn't looking to move. He understood the role, took my concerns to the employer, and I ended up with an offer above what I expected.",
    who: 'Head of delivery and performance, placed candidate',
  },
  {
    text: 'He took the time to work out how my experience fitted a role I did not look an obvious fit for, and was open about the negotiation throughout.',
    who: 'Talent development lead, placed candidate',
  },
];

// Verified placements only (role and a generalised company type). No CCO or account director claim: none on file.
export const placements: { role: string; company: string; year: string }[] = [
  { role: 'Fractional Chief Revenue Officer', company: 'Growth-stage group, around 50 staff', year: '2026' },
  { role: 'Fractional CRO and business development lead', company: 'Multi-site group', year: '2026' },
  { role: 'Interim leadership appointment', company: 'National organisation', year: '2025' },
  { role: 'Standards consultant, interim', company: 'Industry standards body, extended by the client', year: '2026' },
  { role: 'Head of Delivery and Performance', company: 'Large national group', year: '2024' },
  { role: 'Head of Compliance and Funding', company: 'Mid-sized provider', year: '2024' },
  { role: 'Three board members', company: 'Founder-led company, from eleven introductions', year: '2021' },
  { role: 'Freelance technical instructor', company: 'Technology training company', year: '2020' },
];

export const about = {
  name: 'Alex Lockey',
  title: 'Founder, Bolt Search',
  body: [
    'Alex has recruited since 2007 and founded Bolt Search in 2016. He still runs every search himself, from the first call to the 90-day check-in.',
    'He trained as an engineer (BEng Aeronautical Engineering, University of Bristol), which helps when a hire has to hold a technical conversation with a buyer, not only a commercial one.',
  ],
  linkedin: 'https://www.linkedin.com/in/alexlockey1/',
};

export const closing = {
  title: 'Hiring for a role like this?',
  body: 'Send a few lines on the role and what it has to achieve. Alex reads every brief and replies personally. References from past clients and placed candidates are available on request.',
};
