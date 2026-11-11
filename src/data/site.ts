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
  support: 'Commercial and technical hires for growth companies. One recruiter runs every search, start to finish.',
  action: { label: 'Tell us about the role', href: '/#brief' },
  second: { label: 'Ask for references', href: '/contact/?about=references' },
};

export const navLinks = [
  { href: '/#method', label: 'How it works' },
  { href: '/#record', label: 'Track record' },
  { href: '/about/', label: 'About' },
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

// The narrowing: an illustrative search, shown as a Visualize Value diagram.
export const narrowing = {
  heading: 'Every search narrows to one person',
  lead: 'It starts with the whole market.',
  rest: 'Research tools, including AI, map it fast. The judgement and every call are Alex’s.',
  caption: 'An illustrative search. The numbers change with every role; the shape does not.',
  stages: [
    { name: 'Mapped', count: 214, note: 'people at comparable companies' },
    { name: 'Matched', count: 61, note: 'on deal size, buyer and stage' },
    { name: 'Approached', count: 27, note: 'by Alex, most not looking' },
    { name: 'Spoken to', count: 12, note: 'against the brief' },
    { name: 'Shortlisted', count: 4, note: 'each with a written note' },
    { name: 'Hired', count: 1, note: 'the person the plan rests on' },
  ],
};

// The method as a slip: what happens, and who does it.
export const slip = {
  title: 'Search for a founding AE, UK',
  lead: 'One person runs every stage. You know what happens next, and who is doing it.',
  groups: [
    { group: 'Brief', rows: [['What the first year must deliver', '30 minutes'], ['What has not worked before', 'with you'], ['Who the hire reports to', 'with you']] },
    { group: 'Map', rows: [['Companies that have done this work', 'researched'], ['People filtered on what predicts success', 'researched']] },
    { group: 'Approach', rows: [['Every call, including people not looking', 'Alex']] },
    { group: 'Shortlist', rows: [['A few people, each with a written note', 'in writing']] },
    { group: 'Close', rows: [['Interviews, feedback and offer', 'Alex'], ['Notice period and start date', 'Alex'], ['A check-in once they have started', 'Alex']] },
  ],
  total: ['You hold', 'a hire who is in the seat'],
};

export const notePitch = {
  heading: 'A briefing on every name',
  lead: 'You never get a CV and a phone call.',
  rest: 'Every name arrives with a full briefing. Pick one.',
  others: [
    { id: 'Candidate A', line: 'Mid-market AE, payments scale-up, Manchester', state: 'Interviewing' },
    { id: 'Candidate C', line: 'Founding AE, seed-stage analytics company, remote UK', state: 'Interviewing' },
    { id: 'Candidate D', line: 'Account executive, US software firm, London office', state: 'Second look' },
  ],
};

// Verified placements, as one running sentence on the homepage.
export const placedRoles = [
  'a fractional Chief Revenue Officer',
  'a fractional CRO and business development lead',
  'a head of delivery and performance',
  'a head of compliance and funding',
  'three board members',
];

export const principles = [
  { lead: 'Few searches at once.', rest: 'Each role gets real attention, not a database search and a pile of CVs.' },
  { lead: 'Straight answers.', rest: 'If a candidate is not right, you hear it. If the market cannot give you what the brief asks for, you hear that in week one, not week six.' },
  { lead: 'Discretion.', rest: 'Replacement hires and market entries are often confidential, so they run quietly.' },
];

// Example documents for the About principles and the Contact page. Illustrative, labelled on the page.
export const searchStages = ['Brief', 'Map', 'Approach', 'Shortlist', 'Close'];
export const openSearches = [
  { role: 'Founding AE, UK', stage: 3, week: 'Week 4' },
  { role: 'Solutions engineer, EMEA', stage: 2, week: 'Week 2' },
  { role: 'Head of sales, UK', stage: 0, week: 'Week 1' },
];

export const straightUpdate = {
  title: 'Update · Head of sales, UK',
  meta: [['From', 'Alex Lockey'], ['Week', 'One']],
  body: 'The range in the brief sits about a fifth under what the people who fit are earning. Two ways forward:',
  options: ['Widen the range to match the market', 'Open the brief to people a step earlier in their careers'],
  close: 'My view is the second. Happy to talk it through.',
};

export const confidentialSearch = [
  ['Client name', 'Withheld until the second call'],
  ['Role advertised', 'No'],
  ['Approaches', 'By phone, one to one'],
  ['Candidate names', 'Shared with their consent only'],
  ['Shortlist', 'Sent to one named contact'],
];

export const nextSteps = [
  ['Now', 'Your brief reaches Alex'],
  ['Next', 'A personal reply, with any questions'],
  ['Then', 'A 30-minute call on what the hire must deliver'],
  ['After that', 'The market map and the first approaches'],
  ['Later', 'A shortlist, each name with a written note'],
];

export const exampleReply = {
  title: 'Re: Founding AE, UK',
  meta: [['From', 'Alex Lockey'], ['To', 'You'], ['Subject', 'Re: Founding AE, UK']],
  body: 'Thanks for this. Two questions before we talk: who will this person sell alongside in the first six months, and what has the US team tried in the UK so far? Could you do thirty minutes this week?',
  from: 'Alex',
};

// A full example shortlist: four briefings for one illustrative search. No real people.
// Must-haves come from the example brief: sold a technical product to UK buyers, alone, first call to contract;
// mid-market deal sizes; comfortable reporting to a US VP eight hours behind.
export type Briefing = {
  id: string;
  title: string;
  status: string;
  summary: string;
  glance: [string, string][];
  fit: { need: string; evidence: string; level: 'meets' | 'partly' }[];
  record: string[];
  move: string;
  risks: { risk: string; test: string }[];
  references: string;
  view: string;
};

export const briefingSearch = {
  title: 'Shortlist · Founding AE, UK',
  tag: 'Example search, no real candidates',
  brief: 'Founding Account Executive, UK. Year one: the first ten UK customers and a repeatable mid-market motion. Reports to the VP Sales in the US.',
};

export const briefings: Briefing[] = [
  {
    id: 'Candidate B',
    title: 'Enterprise AE, Series C data platform',
    status: 'Recommended',
    summary: 'Four years selling six-figure deals to UK financial services, mostly without a sales engineer. The closest match to the brief on this list.',
    glance: [
      ['Now', 'Enterprise AE, Series C data platform, London'],
      ['Notice', 'One month'],
      ['Package now', '£95k base, £190k OTE'],
      ['Looking for', '£105k base, meaningful equity'],
      ['Interviews', 'Free Tuesdays and Thursdays'],
    ],
    fit: [
      { need: 'Sold a technical product to UK buyers', evidence: 'Data platform into banks and insurers since 2022', level: 'meets' },
      { need: 'Alone, first call to contract', evidence: 'Ran her own technical demos on 9 of last year’s 12 deals', level: 'meets' },
      { need: 'Mid-market deal sizes', evidence: 'Average deal £140k, smallest £45k', level: 'meets' },
      { need: 'Reporting into the US', evidence: 'Current manager is in New York; weekly call at 4pm UK', level: 'meets' },
    ],
    record: ['118% of quota in 2025, 104% in 2024', 'Opened 7 new logos last year, 5 of them outbound', 'Promoted from mid-market AE after 18 months'],
    move: 'Wants to be first in a market rather than one of forty AEs. Has turned down two scale-up offers this year because neither was a first hire.',
    risks: [
      { risk: 'Has not built a team', test: 'Ask how she would hire AE number two; her former manager’s reference covers how she brings people on' },
      { risk: 'Used to a known brand opening doors', test: 'Walk through the 5 outbound wins: first touch to first meeting' },
    ],
    references: 'Former manager spoken to. Current peer to follow after first interview, with her consent.',
    view: 'Meet first. She has done the job you are hiring for, in a harder market, and the move is about scope rather than money.',
  },
  {
    id: 'Candidate A',
    title: 'Mid-market AE, payments scale-up',
    status: 'Strong',
    summary: 'Sells a payments API to UK mid-market retailers and has carried a quota alone since the company had nine people.',
    glance: [
      ['Now', 'Mid-market AE, payments scale-up, Manchester'],
      ['Notice', 'Three months'],
      ['Package now', '£80k base, £160k OTE'],
      ['Looking for', '£90k base, equity, remote-first'],
      ['Interviews', 'Evenings, or a planned day off'],
    ],
    fit: [
      { need: 'Sold a technical product to UK buyers', evidence: 'API product to heads of engineering and finance', level: 'meets' },
      { need: 'Alone, first call to contract', evidence: 'First sales hire at a nine-person company in 2023', level: 'meets' },
      { need: 'Mid-market deal sizes', evidence: 'Average deal £60k, some smaller', level: 'partly' },
      { need: 'Reporting into the US', evidence: 'Has only worked for UK leadership', level: 'partly' },
    ],
    record: ['Took the company from 3 to 41 UK customers', '96% of a rising quota in 2025', 'Wrote the first sales playbook'],
    move: 'The company now hires enterprise sellers above her. She wants to do the zero-to-one stage again with a bigger product.',
    risks: [
      { risk: 'Deal sizes are smaller than yours', test: 'Ask for her two largest deals and who signed them' },
      { risk: 'Three months’ notice', test: 'Check the start date against your year-one plan before a second interview' },
    ],
    references: 'To be taken after first interview.',
    view: 'Strong on the founding part of the role, lighter on deal size. Worth meeting if speed of first wins matters more than contract value.',
  },
  {
    id: 'Candidate C',
    title: 'Founding AE, seed-stage analytics company',
    status: 'Strong',
    summary: 'Already a founding AE, at a seed-stage company that has slowed hiring. Sells to product and data teams across the UK and the Nordics.',
    glance: [
      ['Now', 'Founding AE, seed-stage analytics company, remote UK'],
      ['Notice', 'One month'],
      ['Package now', '£85k base, £150k OTE'],
      ['Looking for', '£95k base, a funded runway'],
      ['Interviews', 'Flexible'],
    ],
    fit: [
      { need: 'Sold a technical product to UK buyers', evidence: 'Analytics tooling to product and data leaders', level: 'meets' },
      { need: 'Alone, first call to contract', evidence: 'Sole seller for 20 months', level: 'meets' },
      { need: 'Mid-market deal sizes', evidence: 'Average deal £35k, growing', level: 'partly' },
      { need: 'Reporting into the US', evidence: 'Reports to a London founder', level: 'partly' },
    ],
    record: ['Closed the company’s first 14 customers', 'Built the CRM and pipeline reviews from scratch', 'Ran two Nordic deals end to end'],
    move: 'Her company’s runway is short and growth hiring has paused. She wants the same job with more backing.',
    risks: [
      { risk: 'Smaller deals than yours', test: 'Look at her pipeline for any deal over £75k and how far it got' },
      { risk: 'Leaving for safety rather than the role', test: 'Ask what would make her stay; listen for the product, not the funding' },
    ],
    references: 'Investor reference offered by the candidate; to be taken after first interview.',
    view: 'Has done the job already. Meet if you want someone who will not need the founding-seller role explained.',
  },
  {
    id: 'Candidate D',
    title: 'Account executive, US software firm, London office',
    status: 'Second look',
    summary: 'Sells for a US software company from its London office, so already lives the time-zone gap. Less experience starting a market from nothing.',
    glance: [
      ['Now', 'Account executive, US software firm, London office'],
      ['Notice', 'One month'],
      ['Package now', '£90k base, £180k OTE'],
      ['Looking for', '£100k base'],
      ['Interviews', 'Mornings'],
    ],
    fit: [
      { need: 'Sold a technical product to UK buyers', evidence: 'Security software to UK mid-market', level: 'meets' },
      { need: 'Alone, first call to contract', evidence: 'Supported by an SDR team and a solutions engineer', level: 'partly' },
      { need: 'Mid-market deal sizes', evidence: 'Average deal £110k', level: 'meets' },
      { need: 'Reporting into the US', evidence: 'Reports to Boston; three years of it', level: 'meets' },
    ],
    record: ['On target three years running', 'Top UK seller in 2024', 'Mentors two newer AEs'],
    move: 'Wants equity and a bigger say in how the UK is built.',
    risks: [
      { risk: 'Has always had SDRs and an SE', test: 'Ask how he would fill his own pipeline in month one with neither' },
    ],
    references: 'Not yet taken.',
    view: 'The safest on the US side, the least proven on starting alone. A second look if the others fall away on timing.',
  },
];

// How a search runs: five stops on one line.
export const steps = {
  heading: 'How a search runs',
  items: [
    { verb: 'Brief', line: 'Thirty minutes on what the first year must deliver.' },
    { verb: 'Map', line: 'Everyone who has done the work, filtered on what predicts success.' },
    { verb: 'Approach', line: 'Alex makes every call, mostly to people not looking.' },
    { verb: 'Shortlist', line: 'A few people, each with a full briefing.' },
    { verb: 'Close', line: 'Offer, notice, start date, then a check-in.' },
  ],
};
