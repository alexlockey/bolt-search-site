// One copy deck for every concept, so Alex compares direction, not words.
// Proof is paraphrased and anonymised. Names stay out of this public repo.
// Argument of the page, one claim per section:
// 1. One recruiter, Alex Lockey, finds the commercial and technical hires growth companies depend on. -> name and his photo
// 2. A search is a method, not a database trawl.                                                   -> five stages, photographed
// 3. It has worked since 2007.                                                                     -> facts and verified placements
// 4. Clients and placed candidates say so.                                                         -> recommendations, role only
// 5. Alex is an engineer by training and runs every search himself.                                -> portrait and short bio
// 6. Tell him the role.                                                                            -> the brief sentence (live), email

export const name = 'Bolt Search';

export const hero = {
  // Two-line budget: about 32 characters.
  title: 'Hires that carry the number',
  sentence: ['We find the person', 'your plan rests on'],
  support:
    'Commercial and technical hires for growth companies, found by one recruiter who runs every search himself.',
  action: { label: 'Tell us about the role', href: '#brief' },
  second: { label: 'Ask for references', href: '/contact/?about=references' },
};

export const navLinks = [
  { href: '#method', label: 'How it works' },
  { href: '#record', label: 'Track record' },
  { href: '#alex', label: 'About' },
];

export const method = {
  heading: 'How a search runs',
  note: 'Research tools, including AI, cover a market quickly. The judgement and every conversation are Alex’s.',
  stages: [
    {
      verb: 'Brief',
      line: 'First we agree what the hire must deliver.',
      body: 'Thirty minutes on what the first year has to achieve, what has not worked before, and who the person reports to.',
      image: '/images/alex-client-table',
      alt: 'Alex Lockey taking a brief with two clients at a table',
    },
    {
      verb: 'Map',
      line: 'Then the whole market goes on one page.',
      body: 'Every company and person who has done this work before, filtered on the things that predict success in your role.',
      image: '/images/alex-whiteboard',
      alt: 'Alex Lockey working through a plan on a whiteboard',
    },
    {
      verb: 'Approach',
      line: 'Alex makes every call himself.',
      body: 'Including people who are not looking. The strongest candidates often are not.',
      image: '/images/alex-about',
      alt: 'Alex Lockey at his desk',
    },
    {
      verb: 'Shortlist',
      line: 'You meet a few, each with a written note.',
      body: 'Why they fit, what they earn, what would move them, and the risk, in plain words.',
      image: null,
      alt: '',
    },
    {
      verb: 'Close',
      line: 'He stays on until they have started.',
      body: 'Interviews, feedback, offer and notice period, then a check-in once the new hire is in the seat.',
      image: '/images/alex-headshot',
      alt: 'Alex Lockey',
    },
  ],
};

// Example shortlist note: illustrative, labelled on the page, no real person.
export const shortlistNote = {
  label: 'Example shortlist note',
  candidate: 'Candidate B, Enterprise AE',
  rows: [
    ['Now', 'Enterprise AE at a Series C data platform, London'],
    ['Why', 'Four years selling six-figure deals to UK financial services, mostly without an SE'],
    ['Earns', 'Base and OTE confirmed on the call, inside your range'],
    ['Would move for', 'First-hire scope and a say in who joins next'],
    ['Risk', 'Has not built a team yet; a former manager’s reference covers how they bring people on'],
  ],
};

export const facts = [
  { figure: '2007', label: 'Recruiting since. Bolt Search founded 2016.' },
  { figure: '50+', label: 'Placements on record by 2023.' },
  { figure: '15', label: 'Recommendations from clients and placed candidates.' },
  { figure: '1', label: 'Person runs your search, start to finish.' },
];

// Verified placements only, role plus a generalised company type. No CCO or account director claim: none on file.
export const placements: { role: string; company: string; year: string }[] = [
  { role: 'Fractional Chief Revenue Officer', company: 'Growth-stage group, around 50 staff', year: '2026' },
  { role: 'Fractional CRO and business development lead', company: 'Multi-site group', year: '2026' },
  { role: 'Standards consultant, interim', company: 'Industry standards body', year: '2026' },
  { role: 'Interim leadership appointment', company: 'National organisation', year: '2025' },
  { role: 'Head of Delivery and Performance', company: 'Large national group', year: '2024' },
  { role: 'Head of Compliance and Funding', company: 'Mid-sized provider', year: '2024' },
  { role: 'Three board members', company: 'Founder-led company, from eleven introductions', year: '2021' },
  { role: 'Freelance technical instructor', company: 'Technology training company', year: '2020' },
];

export const roles = [
  'Account executives and founding AEs',
  'Business development and account management',
  'Solutions, sales and pre-sales engineers',
  'Implementation and customer success leads',
  'Bids, proposals and estimating',
  'Commercial leadership, including fractional CROs',
];

// Paraphrased from LinkedIn recommendations (role only, Alex's choice, 11 Nov 2026).
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
    text: 'He ran our interim leadership search quickly and well, and kept us updated throughout.',
    who: 'CEO, hiring client',
  },
  {
    text: 'I wasn’t looking to move. He took my concerns to the employer, and the offer beat what I expected.',
    who: 'Head of delivery and performance, placed candidate',
  },
  {
    text: 'He worked out how my experience fitted a role I did not look an obvious fit for, and was open about the negotiation.',
    who: 'Talent development lead, placed candidate',
  },
];

export const about = {
  heading: 'Alex Lockey',
  role: 'Founder, Bolt Search',
  body: [
    'Alex has recruited since 2007 and founded Bolt Search in 2016. He runs every search himself, from the first call to the check-in after the start date.',
    'He trained as an engineer (BEng Aeronautical Engineering, University of Bristol), which helps when a hire has to hold a technical conversation with a buyer, not only a commercial one.',
  ],
  facts: [
    ['Based', 'UK, working with UK and US companies'],
    ['Since', '2007, Bolt Search since 2016'],
    ['Reach', 'alex@bolt-search.com'],
  ],
  linkedin: 'https://www.linkedin.com/in/alexlockey1/',
};

export const brief = {
  heading: 'Tell us about the role',
  lead: 'Fill in the sentence. It becomes your brief, and Alex replies personally.',
  sentence: ['We’re hiring a', 'in', 'who can', '.'],
  placeholders: { role: 'founding account executive', where: 'London', outcome: 'open the UK market in year one' },
  after: 'References from past clients and placed candidates are available on request.',
};

export const contact = {
  email: 'alex@bolt-search.com',
  linkedin: 'https://www.linkedin.com/in/alexlockey1/',
  where: 'UK-based. Working with UK and US companies.',
  reply: 'Every brief gets a personal reply from Alex.',
};
