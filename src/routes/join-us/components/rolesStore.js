import { writable, derived } from 'svelte/store';

export const searchQuery = writable('');
export const selectedTeam = writable('All Teams');
export const selectedType = writable('All Types');
export const selectedLocation = writable('All Locations');

/**
 * @typedef {Object} Role
 * @property {string} title
 * @property {string} summary
 * @property {string[]} tags
 * @property {string} team
 * @property {string[] | string} type
 * @property {string} location
 * @property {string} applyLink
 * @property {string=} impact
 */

// All roles data
const roles = [

  {
    title: 'Co Chief Technology Officer (CTO)',
    summary: 'Oversees tech direction, architecture, and innovation.',
    tags: ['Technology', 'Innovation', 'Architecture', 'Leadership'],
    team: 'Strategy & Leadership',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/cto',
  },
  {
    title: 'Chief Operations Officer (COO)',
    summary: 'Ensures smooth internal processes and execution.',
    tags: ['Operations', 'Execution', 'Process', 'Leadership'],
    team: 'Strategy & Leadership',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/coo',
  },
  {
    title: 'Chief Impact Officer',
    summary: 'Aligns all initiatives to SDGs and measurable social outcomes.',
    tags: ['Impact', 'SDGs', 'Outcomes', 'Strategy'],
    team: 'Strategy & Leadership',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/chief-impact-officer',
  },
  {
    title: 'Chief of Staff',
    summary: 'Aligns leadership goals, tracks OKRs, and handles high-level ops coordination.',
    tags: ['OKRs', 'Coordination', 'Leadership', 'Strategy'],
    team: 'Strategy & Leadership',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/chief-of-staff',
  },
  // 🚀 Business Development & Partnerships
  {
    title: 'Business Development Manager',
    summary: 'Identifies new business, partnerships, collaborations.',
    tags: ['Business', 'Partnerships', 'Collaboration', 'Growth'],
    team: 'Business Development & Partnerships',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/business-development-manager',
  },
  {
    title: 'Lead Generation Executive',
    summary: 'Researches and maintains a database of prospects.',
    tags: ['Lead Generation', 'Research', 'Prospecting', 'CRM'],
    team: 'Business Development & Partnerships',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/lead-generation-executive',
  },
  {
    title: 'Sales Development Representative (SDR)',
    summary: 'Does cold outreach, follow-ups, and qualification.',
    tags: ['Sales', 'Outreach', 'Qualification', 'Follow-up'],
    team: 'Business Development & Partnerships',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/sdr',
  },
  {
    title: 'Strategic Partnership Manager',
    summary: 'Manages alliances with NGOs, startups, and gov bodies.',
    tags: ['Partnerships', 'NGOs', 'Startups', 'Government'],
    team: 'Business Development & Partnerships',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/strategic-partnership-manager',
  },
  {
    title: 'Client Success Manager',
    summary: 'Supports impact partners and ensures project delivery.',
    tags: ['Client Success', 'Support', 'Delivery', 'Impact'],
    team: 'Business Development & Partnerships',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/client-success-manager',
  },
  {
    title: 'Proposal Writer',
    summary: 'Crafts custom impact proposals, decks, and documentation.',
    tags: ['Writing', 'Proposals', 'Documentation', 'Impact'],
    team: 'Business Development & Partnerships',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/proposal-writer',
  },
  // 📣 Outreach, PR & Communications
  {
    title: 'Public Relations Manager',
    summary: 'Manages media relations, press releases, and brand narrative.',
    tags: ['PR', 'Media', 'Brand', 'Communications'],
    team: 'Outreach, PR & Communications',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/pr-manager',
  },
  {
    title: 'Outreach Coordinator',
    summary: 'Builds community networks and leads student outreach drives.',
    tags: ['Outreach', 'Community', 'Student', 'Networking'],
    team: 'Outreach, PR & Communications',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/outreach-coordinator',
  },
  {
    title: 'Ambassador Program Lead',
    summary: 'Onboards and manages university/student reps.',
    tags: ['Ambassador', 'University', 'Student', 'Onboarding'],
    team: 'Outreach, PR & Communications',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/ambassador-program-lead',
  },
  {
    title: 'Influencer & Collaboration Manager',
    summary: 'Coordinates with micro-creators & industry voices.',
    tags: ['Influencer', 'Collaboration', 'Creators', 'Industry'],
    team: 'Outreach, PR & Communications',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/influencer-collaboration-manager',
  },
  {
    title: 'Email Campaign Manager',
    summary: 'Designs and sends targeted newsletters, impact reports.',
    tags: ['Email', 'Campaigns', 'Newsletters', 'Reports'],
    team: 'Outreach, PR & Communications',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/email-campaign-manager',
  },
  // 👨‍💼 People & Recruitment
  {
    title: 'HR Manager',
    summary: 'Handles policies, culture, performance tracking.',
    tags: ['HR', 'Policies', 'Culture', 'Performance'],
    team: 'People & Recruitment',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/hr-manager',
  },
  {
    title: 'Technical Recruiter',
    summary: 'Sources & hires developers, AI engineers, etc.',
    tags: ['Recruitment', 'Technical', 'Hiring', 'Developers'],
    team: 'People & Recruitment',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/technical-recruiter',
  },
  {
    title: 'Talent Acquisition Specialist',
    summary: 'Screens and recruits both technical and creative roles.',
    tags: ['Talent', 'Acquisition', 'Screening', 'Recruitment'],
    team: 'People & Recruitment',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/talent-acquisition-specialist',
  },
  {
    title: 'Internship Coordinator',
    summary: 'Manages internship programs, onboarding, evaluations.',
    tags: ['Internship', 'Onboarding', 'Evaluation', 'Coordination'],
    team: 'People & Recruitment',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/internship-coordinator',
  },
  {
    title: 'Culture & DEI Officer',
    summary: 'Fosters an inclusive, safe, and expressive work culture.',
    tags: ['Culture', 'DEI', 'Inclusion', 'Diversity'],
    team: 'People & Recruitment',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/culture-dei-officer',
  },
  {
    title: 'People Ops Associate',
    summary: 'Day-to-day HR coordination, payroll, leaves, etc.',
    tags: ['HR', 'Payroll', 'Coordination', 'Leaves'],
    team: 'People & Recruitment',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/people-ops-associate',
  },
  // 👩‍💻 Product & Technology
  {
    title: 'Scrum Master',
    summary: 'Facilitates agile meetings, sprint cycles, blockers.',
    tags: ['Scrum', 'Agile', 'Sprints', 'Facilitation'],
    team: 'Product & Technology',
    type: ['Full-time', 'Part-time', 'Intern'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/scrum-master',
  },
  {
    title: 'Product Manager',
    summary: 'Owns product roadmap, user needs, and execution.',
    tags: ['Product', 'Roadmap', 'Execution', 'User Needs'],
    team: 'Product & Technology',
    type: ['Full-time', 'Part-time', 'Intern'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/product-manager',
  },
  {
    title: 'Technical Program Manager',
    summary: 'Oversees large tech programs across teams.',
    tags: ['Program Management', 'Technical', 'Coordination', 'Execution'],
    team: 'Product & Technology',
    type: ['Full-time', 'Part-time', 'Intern'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/technical-program-manager',
  },
  {
    title: 'AI/ML Engineer',
    summary: 'Build AI models for healthcare and environmental sustainability using Python, TensorFlow, PyTorch',
    tags: ['AI/ML', 'Python', 'TensorFlow', 'PyTorch'],
    team: 'Product & Technology',
    type: ['Full-time', 'Part-time', 'Intern'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/ai-ml-engineer',
  },
  {
    title: 'Full Stack Developer',
    summary: 'Builds web platforms end-to-end.',
    tags: ['Full Stack', 'Web Development', 'Frontend', 'Backend'],
    team: 'Product & Technology',
    type: ['Full-time', 'Part-time', 'Intern'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/full-stack-developer',
  },
  {
    title: 'Mobile Developer (Flutter)',
    summary: 'Creates mobile apps for field work and services.',
    tags: ['Flutter', 'Mobile', 'Dart', 'App Development'],
    team: 'Product & Technology',
    type: ['Full-time', 'Part-time', 'Intern'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/mobile-developer-flutter',
  },
  {
    title: 'DevOps Engineer',
    summary: 'Ensures automation, CI/CD, and infra scale.',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Infrastructure'],
    team: 'Product & Technology',
    type: ['Full-time', 'Part-time', 'Intern'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/devops-engineer',
  },
  {
    title: 'QA Engineer',
    summary: 'Manages testing, bug reports, quality delivery.',
    tags: ['QA', 'Testing', 'Quality', 'Bugs'],
    team: 'Product & Technology',
    type: ['Full-time', 'Part-time', 'Intern'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/qa-engineer',
  },
  {
    title: 'Cybersecurity Lead',
    summary: 'Protects systems, data, and product integrity.',
    tags: ['Cybersecurity', 'Security', 'Data Protection', 'Integrity'],
    team: 'Product & Technology',
    type: ['Full-time', 'Part-time', 'Intern'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/cybersecurity-lead',
  },
  // 🧪 Research & Innovation
  {
    title: 'Research Scientist (AI/Blockchain/IoT)',
    summary: 'Leads field-specific applied research.',
    tags: ['Research', 'AI', 'Blockchain', 'IoT'],
    team: 'Research & Innovation',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/research-scientist',
  },
  {
    title: 'Ethics & Responsible AI Researcher',
    summary: 'Works on ethical frameworks for impact tech.',
    tags: ['Ethics', 'AI', 'Responsible Tech', 'Research'],
    team: 'Research & Innovation',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/ethics-ai-researcher',
  },
  {
    title: 'Policy Analyst (Tech & Society)',
    summary: 'Studies tech impact in governance, rights, etc.',
    tags: ['Policy', 'Analysis', 'Tech & Society', 'Governance'],
    team: 'Research & Innovation',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/policy-analyst',
  },
  {
    title: 'Grant & Research Writer',
    summary: 'Finds research funding, documents findings.',
    tags: ['Grant Writing', 'Research', 'Funding', 'Documentation'],
    team: 'Research & Innovation',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/grant-research-writer',
  },
  {
    title: 'Futures Strategist',
    summary: 'Researches trends and long-term directions for humanity-driven tech.',
    tags: ['Futures', 'Strategy', 'Trends', 'Research'],
    team: 'Research & Innovation',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/futures-strategist',
  },
  // 🎨 Creative & Content
  {
    title: 'Creative Director',
    summary: 'Oversees branding, visual identity, and creative direction.',
    tags: ['Creative', 'Branding', 'Visual Identity', 'Direction'],
    team: 'Creative & Content',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/creative-director',
  },
  {
    title: 'Content Writer/Copywriter',
    summary: 'Crafts blogs, website copy, captions.',
    tags: ['Content', 'Writing', 'Copywriting', 'Blogs'],
    team: 'Creative & Content',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/content-writer-copywriter',
  },
  {
    title: 'Scriptwriter (Reels/Documentaries)',
    summary: 'Develops storytelling scripts for short-form & long-form.',
    tags: ['Scriptwriting', 'Storytelling', 'Reels', 'Documentaries'],
    team: 'Creative & Content',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/scriptwriter',
  },
  {
    title: 'Social Media Manager',
    summary: 'Runs LinkedIn, Instagram, X, Threads.',
    tags: ['Social Media', 'Management', 'Content', 'Platforms'],
    team: 'Creative & Content',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/social-media-manager',
  },
  {
    title: 'Graphic Designer (Figma/Illustrator)',
    summary: 'Builds sleek visual design across platforms.',
    tags: ['Graphic Design', 'Figma', 'Illustrator', 'Visuals'],
    team: 'Creative & Content',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/graphic-designer',
  },
  {
    title: 'Video Editor (Premiere/FCPX)',
    summary: 'Edits reels, docs, trailers, talks.',
    tags: ['Video Editing', 'Premiere', 'FCPX', 'Trailers'],
    team: 'Creative & Content',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/video-editor',
  },
  {
    title: 'UI/UX Designer',
    summary: 'Designs user journeys and interfaces.',
    tags: ['UI/UX', 'Design', 'User Experience', 'Interfaces'],
    team: 'Creative & Content',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/ui-ux-designer',
  },
  // 💼 Finance & Legal
  {
    title: 'Finance Officer',
    summary: 'Handles budgets, reimbursements, and financial planning.',
    tags: ['Finance', 'Budgets', 'Planning', 'Reimbursements'],
    team: 'Finance & Legal',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/finance-officer',
  },
  {
    title: 'Impact Finance Analyst',
    summary: 'Models funding structures and grants with ROI/ROE lens.',
    tags: ['Finance', 'Analysis', 'ROI', 'Grants'],
    team: 'Finance & Legal',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/impact-finance-analyst',
  },
  {
    title: 'Legal Advisor',
    summary: 'Reviews contracts, IP, terms, and ensures compliance.',
    tags: ['Legal', 'Contracts', 'Compliance', 'IP'],
    team: 'Finance & Legal',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/legal-advisor',
  },
  {
    title: 'Fundraising & Investor Relations',
    summary: 'Supports grants, donor reports, and funding drives.',
    tags: ['Fundraising', 'Investors', 'Grants', 'Reports'],
    team: 'Finance & Legal',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/fundraising-investor-relations',
  },
  // 🌍 Operations & Delivery
  {
    title: 'Program Manager (Social Projects)',
    summary: 'Manages real-world deployments (rural tech, clinics etc.)',
    tags: ['Program Management', 'Social Projects', 'Deployment', 'Field Work'],
    team: 'Operations & Delivery',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/program-manager-social-projects',
  },
  {
    title: 'Impact Delivery Lead',
    summary: 'Ensures tech solutions reach the communities.',
    tags: ['Impact', 'Delivery', 'Community', 'Tech Solutions'],
    team: 'Operations & Delivery',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/impact-delivery-lead',
  },
  {
    title: 'Monitoring & Evaluation Specialist',
    summary: 'Tracks KPIs, SDGs, and collects impact data.',
    tags: ['Monitoring', 'Evaluation', 'KPIs', 'SDGs'],
    team: 'Operations & Delivery',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/monitoring-evaluation-specialist',
  },
  {
    title: 'Logistics & Field Coordinator',
    summary: 'Organizes physical interventions/events.',
    tags: ['Logistics', 'Field', 'Coordination', 'Events'],
    team: 'Operations & Delivery',
    type: ['Full-time', 'Part-time'],
    location: 'Remote',
    applyLink: 'https://example.com/apply/logistics-field-coordinator',
  },
];

// Add this function to reset all filters
export const resetFilters = () => {
  searchQuery.set('');
  selectedTeam.set('All Teams');
  selectedType.set('All Types');
  selectedLocation.set('All Locations');
};

// Update the filteredRoles derived store
export const filteredRoles = derived(
  [searchQuery, selectedTeam, selectedType, selectedLocation],
  ([$searchQuery, $selectedTeam, $selectedType, $selectedLocation]) => {
    return roles.filter(role => {
      const matchesSearch =
        !$searchQuery ||
        role.title.toLowerCase().includes($searchQuery.toLowerCase()) ||
        role.summary.toLowerCase().includes($searchQuery.toLowerCase()) ||
        role.tags.some(tag => tag.toLowerCase().includes($searchQuery.toLowerCase()));
      
      const matchesTeam = $selectedTeam === 'All Teams' || role.team === $selectedTeam;
      
      // Fix for type filtering - handle both string and array types
      const matchesType = $selectedType === 'All Types' || 
        (Array.isArray(role.type) ? role.type.includes($selectedType) : role.type === $selectedType);
      
      const matchesLocation = $selectedLocation === 'All Locations' || role.location === $selectedLocation;
      
      return matchesSearch && matchesTeam && matchesType && matchesLocation;
    });
  }
);