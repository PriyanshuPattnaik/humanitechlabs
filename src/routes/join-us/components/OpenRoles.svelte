<script>
  import SearchFilters from './SearchFilters.svelte';
  import RoleCard from './RoleCard.svelte';
  import { filteredRoles } from './rolesStore.js';

  // All roles data
  const roles = [
    {
      title: 'Chief Executive Officer (CEO)',
      summary: 'Leads the org vision and external partnerships.',
      tags: ['Leadership', 'Vision', 'Partnerships', 'Strategy'],
      team: 'Strategy & Leadership',
      type: ['Executive'],
      location: 'Remote',
    },
    {
      title: 'Chief Technology Officer (CTO)',
      summary: 'Oversees tech direction, architecture, and innovation.',
      tags: ['Technology', 'Innovation', 'Architecture', 'Leadership'],
      team: 'Strategy & Leadership',
      type: ['Executive'],
      location: 'Remote',
    },
    {
      title: 'Chief Operations Officer (COO)',
      summary: 'Ensures smooth internal processes and execution.',
      tags: ['Operations', 'Execution', 'Process', 'Leadership'],
      team: 'Strategy & Leadership',
      type: ['Executive'],
      location: 'Remote',
    },
    {
      title: 'Chief Impact Officer',
      summary: 'Aligns all initiatives to SDGs and measurable social outcomes.',
      tags: ['Impact', 'SDGs', 'Outcomes', 'Strategy'],
      team: 'Strategy & Leadership',
      type: ['Executive'],
      location: 'Remote',
    },
    {
      title: 'Chief of Staff',
      summary: 'Aligns leadership goals, tracks OKRs, and handles high-level ops coordination.',
      tags: ['OKRs', 'Coordination', 'Leadership', 'Strategy'],
      team: 'Strategy & Leadership',
      type: ['Executive'],
      location: 'Remote',
    },
    // 🚀 Business Development & Partnerships
    {
      title: 'Business Development Manager',
      summary: 'Identifies new business, partnerships, collaborations.',
      tags: ['Business', 'Partnerships', 'Collaboration', 'Growth'],
      team: 'Business Development & Partnerships',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Lead Generation Executive',
      summary: 'Researches and maintains a database of prospects.',
      tags: ['Lead Generation', 'Research', 'Prospecting', 'CRM'],
      team: 'Business Development & Partnerships',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Sales Development Representative (SDR)',
      summary: 'Does cold outreach, follow-ups, and qualification.',
      tags: ['Sales', 'Outreach', 'Qualification', 'Follow-up'],
      team: 'Business Development & Partnerships',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Strategic Partnership Manager',
      summary: 'Manages alliances with NGOs, startups, and gov bodies.',
      tags: ['Partnerships', 'NGOs', 'Startups', 'Government'],
      team: 'Business Development & Partnerships',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Client Success Manager',
      summary: 'Supports impact partners and ensures project delivery.',
      tags: ['Client Success', 'Support', 'Delivery', 'Impact'],
      team: 'Business Development & Partnerships',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Proposal Writer',
      summary: 'Crafts custom impact proposals, decks, and documentation.',
      tags: ['Writing', 'Proposals', 'Documentation', 'Impact'],
      team: 'Business Development & Partnerships',
      type: 'Full-time',
      location: 'Remote',
    },
    // 📣 Outreach, PR & Communications
    {
      title: 'Public Relations Manager',
      summary: 'Manages media relations, press releases, and brand narrative.',
      tags: ['PR', 'Media', 'Brand', 'Communications'],
      team: 'Outreach, PR & Communications',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Outreach Coordinator',
      summary: 'Builds community networks and leads student outreach drives.',
      tags: ['Outreach', 'Community', 'Student', 'Networking'],
      team: 'Outreach, PR & Communications',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Ambassador Program Lead',
      summary: 'Onboards and manages university/student reps.',
      tags: ['Ambassador', 'University', 'Student', 'Onboarding'],
      team: 'Outreach, PR & Communications',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Influencer & Collaboration Manager',
      summary: 'Coordinates with micro-creators & industry voices.',
      tags: ['Influencer', 'Collaboration', 'Creators', 'Industry'],
      team: 'Outreach, PR & Communications',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Email Campaign Manager',
      summary: 'Designs and sends targeted newsletters, impact reports.',
      tags: ['Email', 'Campaigns', 'Newsletters', 'Reports'],
      team: 'Outreach, PR & Communications',
      type: 'Full-time',
      location: 'Remote',
    },
    // 👨‍💼 People & Recruitment
    {
      title: 'HR Manager',
      summary: 'Handles policies, culture, performance tracking.',
      tags: ['HR', 'Policies', 'Culture', 'Performance'],
      team: 'People & Recruitment',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Technical Recruiter',
      summary: 'Sources & hires developers, AI engineers, etc.',
      tags: ['Recruitment', 'Technical', 'Hiring', 'Developers'],
      team: 'People & Recruitment',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Talent Acquisition Specialist',
      summary: 'Screens and recruits both technical and creative roles.',
      tags: ['Talent', 'Acquisition', 'Screening', 'Recruitment'],
      team: 'People & Recruitment',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Internship Coordinator',
      summary: 'Manages internship programs, onboarding, evaluations.',
      tags: ['Internship', 'Onboarding', 'Evaluation', 'Coordination'],
      team: 'People & Recruitment',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Culture & DEI Officer',
      summary: 'Fosters an inclusive, safe, and expressive work culture.',
      tags: ['Culture', 'DEI', 'Inclusion', 'Diversity'],
      team: 'People & Recruitment',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'People Ops Associate',
      summary: 'Day-to-day HR coordination, payroll, leaves, etc.',
      tags: ['HR', 'Payroll', 'Coordination', 'Leaves'],
      team: 'People & Recruitment',
      type: 'Full-time',
      location: 'Remote',
    },
    // 👩‍💻 Product & Technology
    {
      title: 'Scrum Master',
      summary: 'Facilitates agile meetings, sprint cycles, blockers.',
      tags: ['Scrum', 'Agile', 'Sprints', 'Facilitation'],
      team: 'Product & Technology',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Product Manager',
      summary: 'Owns product roadmap, user needs, and execution.',
      tags: ['Product', 'Roadmap', 'Execution', 'User Needs'],
      team: 'Product & Technology',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Technical Program Manager',
      summary: 'Oversees large tech programs across teams.',
      tags: ['Program Management', 'Technical', 'Coordination', 'Execution'],
      team: 'Product & Technology',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'AI/ML Engineer',
      summary: 'Develops intelligent impact solutions (health, climate, etc.)',
      tags: ['AI', 'Machine Learning', 'Deep Learning', 'Impact'],
      team: 'Product & Technology',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Full Stack Developer',
      summary: 'Builds web platforms end-to-end.',
      tags: ['Full Stack', 'Web Development', 'Frontend', 'Backend'],
      team: 'Product & Technology',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Mobile Developer (Flutter)',
      summary: 'Creates mobile apps for field work and services.',
      tags: ['Flutter', 'Mobile', 'Dart', 'App Development'],
      team: 'Product & Technology',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'DevOps Engineer',
      summary: 'Ensures automation, CI/CD, and infra scale.',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Infrastructure'],
      team: 'Product & Technology',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'QA Engineer',
      summary: 'Manages testing, bug reports, quality delivery.',
      tags: ['QA', 'Testing', 'Quality', 'Bugs'],
      team: 'Product & Technology',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Cybersecurity Lead',
      summary: 'Protects systems, data, and product integrity.',
      tags: ['Cybersecurity', 'Security', 'Data Protection', 'Integrity'],
      team: 'Product & Technology',
      type: 'Full-time',
      location: 'Remote',
    },
    // 🧪 Research & Innovation
    {
      title: 'Research Scientist (AI/Blockchain/IoT)',
      summary: 'Leads field-specific applied research.',
      tags: ['Research', 'AI', 'Blockchain', 'IoT'],
      team: 'Research & Innovation',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Ethics & Responsible AI Researcher',
      summary: 'Works on ethical frameworks for impact tech.',
      tags: ['Ethics', 'AI', 'Responsible Tech', 'Research'],
      team: 'Research & Innovation',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Policy Analyst (Tech & Society)',
      summary: 'Studies tech impact in governance, rights, etc.',
      tags: ['Policy', 'Analysis', 'Tech & Society', 'Governance'],
      team: 'Research & Innovation',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Grant & Research Writer',
      summary: 'Finds research funding, documents findings.',
      tags: ['Grant Writing', 'Research', 'Funding', 'Documentation'],
      team: 'Research & Innovation',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Futures Strategist',
      summary: 'Researches trends and long-term directions for humanity-driven tech.',
      tags: ['Futures', 'Strategy', 'Trends', 'Research'],
      team: 'Research & Innovation',
      type: 'Full-time',
      location: 'Remote',
    },
    // 🎨 Creative & Content
    {
      title: 'Creative Director',
      summary: 'Oversees branding, visual identity, and creative direction.',
      tags: ['Creative', 'Branding', 'Visual Identity', 'Direction'],
      team: 'Creative & Content',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Content Writer/Copywriter',
      summary: 'Crafts blogs, website copy, captions.',
      tags: ['Content', 'Writing', 'Copywriting', 'Blogs'],
      team: 'Creative & Content',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Scriptwriter (Reels/Documentaries)',
      summary: 'Develops storytelling scripts for short-form & long-form.',
      tags: ['Scriptwriting', 'Storytelling', 'Reels', 'Documentaries'],
      team: 'Creative & Content',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Social Media Manager',
      summary: 'Runs LinkedIn, Instagram, X, Threads.',
      tags: ['Social Media', 'Management', 'Content', 'Platforms'],
      team: 'Creative & Content',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Graphic Designer (Figma/Illustrator)',
      summary: 'Builds sleek visual design across platforms.',
      tags: ['Graphic Design', 'Figma', 'Illustrator', 'Visuals'],
      team: 'Creative & Content',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Video Editor (Premiere/FCPX)',
      summary: 'Edits reels, docs, trailers, talks.',
      tags: ['Video Editing', 'Premiere', 'FCPX', 'Trailers'],
      team: 'Creative & Content',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'UI/UX Designer',
      summary: 'Designs user journeys and interfaces.',
      tags: ['UI/UX', 'Design', 'User Experience', 'Interfaces'],
      team: 'Creative & Content',
      type: 'Full-time',
      location: 'Remote',
    },
    // 💼 Finance & Legal
    {
      title: 'Finance Officer',
      summary: 'Handles budgets, reimbursements, and financial planning.',
      tags: ['Finance', 'Budgets', 'Planning', 'Reimbursements'],
      team: 'Finance & Legal',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Impact Finance Analyst',
      summary: 'Models funding structures and grants with ROI/ROE lens.',
      tags: ['Finance', 'Analysis', 'ROI', 'Grants'],
      team: 'Finance & Legal',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Legal Advisor',
      summary: 'Reviews contracts, IP, terms, and ensures compliance.',
      tags: ['Legal', 'Contracts', 'Compliance', 'IP'],
      team: 'Finance & Legal',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Fundraising & Investor Relations',
      summary: 'Supports grants, donor reports, and funding drives.',
      tags: ['Fundraising', 'Investors', 'Grants', 'Reports'],
      team: 'Finance & Legal',
      type: 'Full-time',
      location: 'Remote',
    },
    // 🌍 Operations & Delivery
    {
      title: 'Program Manager (Social Projects)',
      summary: 'Manages real-world deployments (rural tech, clinics etc.)',
      tags: ['Program Management', 'Social Projects', 'Deployment', 'Field Work'],
      team: 'Operations & Delivery',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      title: 'Impact Delivery Lead',
      summary: 'Ensures tech solutions reach the intended beneficiaries.',
      tags: ['Impact', 'Delivery', 'Solutions', 'Beneficiaries'],
      team: 'Operations & Delivery',
      type: 'Full-time',
      location: 'Remote',
    }
  ];
</script>

<section class="open-roles-section" id="open-roles-section">
  <div class="glass-card open-roles-container">
    <h2>Open Roles</h2>
    <SearchFilters />
    <div class="roles-grid">
      {#if $filteredRoles.length > 0}
        {#each $filteredRoles as role}
          <RoleCard {role} />
        {/each}
      {:else}
        <div class="no-roles">No roles available at the moment.</div>
      {/if}
    </div>
  </div>
</section>

<style>
.open-roles-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 1rem 6rem 1rem;
  background: linear-gradient(135deg, #0a0a0a 80%, #18181b 100%);
}

.open-roles-container {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  backdrop-filter: var(--glass-blur);
  border-radius: 12px;
  padding: 3rem 2rem 2rem 2rem;
  max-width: 1100px;
  width: 100%;
  color: var(--text-primary);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 2rem;
  width: 100%;
}

.no-roles {
  color: var(--text-muted);
  text-align: center;
  grid-column: 1/-1;
  font-size: 1.1rem;
  padding: 2rem 0;
}

@media (max-width: 700px) {
  .open-roles-container {
    padding: 1.5rem 0.5rem;
  }
  .roles-grid {
    gap: 1.2rem;
  }
}

@media (max-width: 480px) {
  .open-roles-container {
    padding: 1.5rem 1rem;
    border-radius: 16px;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .no-roles {
    padding: 2rem 1rem;
  }
}

/* Dark mode enhancements */
@media (prefers-color-scheme: dark) {
  .open-roles-container {
    background: rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.1);
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .gradient-orb,
  .grid-pattern,
  .decoration-line,
  .decoration-dot {
    animation: none;
  }
  
  .role-card-wrapper {
    animation: none;
  }
  
  .open-roles-container {
    animation: none;
  }
}
</style>