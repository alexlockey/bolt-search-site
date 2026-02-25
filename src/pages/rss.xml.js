import rss from '@astrojs/rss';

export const GET = (context) => {
  return rss({
    title: 'Bolt Search — Insights',
    description: 'Executive search and advisory insights for the education and training sector',
    site: context.site,
    items: [
      {
        title: 'Leadership Apprenticeship Defunding: A Sales Survival Guide for Training Providers',
        pubDate: new Date('2026-02-20'),
        description: 'With the government pulling funding from management and leadership apprenticeships, training providers need to pivot fast. Here\'s a practical playbook for navigating the transition.',
        link: '/insights/leadership-apprenticeship-defunding-sales-survival-guide'
      },
      {
        title: 'EdTech Hiring Trends: What the Funded Startups Are Actually Looking For',
        pubDate: new Date('2026-02-15'),
        description: 'Analysis of 200+ EdTech hiring patterns reveals a shift from pure tech talent to commercial operators who understand education markets.',
        link: '/insights/edtech-hiring-trends-2026'
      },
      {
        title: 'The FE College Leadership Pipeline Problem Nobody\'s Talking About',
        pubDate: new Date('2026-02-08'),
        description: 'With 40% of FE principals due to retire in the next five years, colleges face an existential hiring challenge. What can leaders do now?',
        link: '/insights/fe-college-leadership-pipeline-crisis'
      },
      {
        title: 'Corporate Learning: Why Consolidation Is Coming',
        pubDate: new Date('2026-01-30'),
        description: 'The corporate L&D market is fragmented. PE investors are circling. Which providers are acquisition targets, and which will acquire?',
        link: '/insights/corporate-learning-market-consolidation'
      },
      {
        title: 'Vocational Education & Workforce Planning: A Government Paradox',
        pubDate: new Date('2026-01-22'),
        description: 'Government policy increasingly emphasizes vocational training, but institutional support remains inconsistent. What does this mean for providers?',
        link: '/insights/vocational-education-workforce-planning'
      },
      {
        title: 'International Student Recruitment: The Post-Brexit Opportunity',
        pubDate: new Date('2026-01-15'),
        description: 'With Home Office visa reforms and growing interest from Asian markets, UK education institutions face both challenges and unprecedented opportunities.',
        link: '/insights/international-student-recruitment-post-brexit'
      }
    ]
  });
};
