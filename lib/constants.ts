export const BRAND = {
  name:    'Coldeck Solutions',
  tagline: 'Powering Smarter Cold Chains â€“ Efficient, Reliable, Growth-Driven',
  phone:   '+91 9972110042',
  email:   'knd@coldeck.com',
  address: 'India (Pan India & International)',
}

export const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Sectors',  href: '/sectors' },
  { label: 'Contact',  href: '/contact' },
]

export const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'States Covered' },
  { value: 350, suffix: '+', label: 'Clients Served' },
]

export const SERVICES = [
  {
    id: 'investment-advisory',
    title: 'Investment & Expansion Advisory',
    shortDesc: 'Helping businesses make informed infrastructure and temperature-controlled supply chain investment decisions before capital is committed.',
    icon: 'BarChart3',
    color: '#4D59B7',
    includes: [
      'Feasibility Studies',
      'Investment Evaluation',
      'Technology Selection',
      'Vendor Assessment',
      'Expansion Planning',
      'Project Risk Assessment',
    ],
    whoFor: 'Investors, developers, and enterprises planning new cold chain or temperature-controlled infrastructure.',
    outcome: 'Reduced investment risks, improved project viability, faster decision-making, and better return on infrastructure investments.',
  },
  {
    id: 'infrastructure',
    title: 'Cold Chain Infrastructure Consulting',
    shortDesc: 'Designing and optimizing temperature-controlled facilities that deliver operational reliability, scalability, and long-term value.',
    icon: 'Building2',
    color: '#9BC74A',
    includes: [
      'Cold Storage Facilities',
      'Pharma Cold Rooms',
      'Food Processing Infrastructure',
      'Blast Freezers',
      'Ripening Chambers',
      'Refrigeration Systems',
    ],
    whoFor: 'Operators and developers building or modernizing temperature-controlled facilities across pharma, food, and logistics.',
    outcome: 'Reliable, scalable infrastructure designed for long-term operational performance and lower lifecycle costs.',
  },
  {
    id: 'operational-excellence',
    title: 'Operational Excellence & Optimization',
    shortDesc: 'Improving facility performance, throughput, energy efficiency, and operational effectiveness.',
    icon: 'Zap',
    color: '#CC00BE',
    includes: [
      'Facility Audits',
      'Process Optimization',
      'Energy Efficiency Improvement',
      'Capacity Utilization',
      'Operational Benchmarking',
      'Cost Reduction Initiatives',
    ],
    whoFor: 'Facility operators experiencing inefficiency, high energy costs, underutilization, or performance gaps.',
    outcome: 'Improved throughput, reduced energy consumption, lower operating costs, and stronger facility performance.',
  },
  {
    id: 'gtm-strategy',
    title: 'Business Growth & Go-To-Market Strategy',
    shortDesc: 'Helping businesses identify new growth opportunities, strengthen commercial capabilities, and accelerate market expansion.',
    icon: 'TrendingUp',
    color: '#4D59B7',
    includes: [
      'Market Entry Strategy',
      'Channel Development',
      'Key Account Growth',
      'New Market Creation',
      'Commercial Strategy',
      'Business Scaling',
    ],
    whoFor: 'Businesses seeking to enter new markets, expand commercially, or build scalable growth strategies.',
    outcome: 'Accelerated revenue growth, stronger market positioning, and a clear roadmap for sustainable business expansion.',
  },
  {
    id: 'opportunity-discovery',
    title: 'Opportunity Discovery & Problem-Solving Advisory',
    shortDesc: 'Identifying hidden opportunities within operational, infrastructure, and business challenges.',
    icon: 'Target',
    color: '#9BC74A',
    includes: [
      'Business Opportunity Assessments',
      'Process Improvement Reviews',
      'Operational Bottleneck Analysis',
      'Profitability Enhancement',
      'Strategic Advisory',
    ],
    whoFor: 'Businesses facing operational or commercial challenges and looking for practical, high-impact solutions.',
    outcome: 'Unlocked growth opportunities, resolved operational bottlenecks, and improved profitability through targeted advisory.',
  },
  {
    id: 'project-advisory',
    title: 'Project Advisory & Execution Support',
    shortDesc: 'Supporting businesses through the complete investment lifecycle.',
    icon: 'Briefcase',
    color: '#CC00BE',
    includes: [
      'Concept to Commissioning Support',
      'Vendor Coordination',
      'Project Monitoring',
      'Risk Mitigation',
      'Stakeholder Alignment',
      'Performance Validation',
    ],
    whoFor: 'Businesses executing infrastructure or operational projects who need experienced advisory support throughout delivery.',
    outcome: 'On-time, on-budget project delivery with reduced execution risk and validated performance outcomes.',
  },
]

export const SECTORS = [
  {
    id: 'pharma',
    title: 'Pharmaceuticals & Life Sciences',
    description: 'Supporting manufacturers, distributors, CFA operators, vaccine companies, biologics facilities, and healthcare supply chains with compliant temperature-controlled infrastructure and operational solutions.',
    gradient: 'from-blue-900 to-brand-blue',
    icon: '💊',
  },
  {
    id: 'food-processing',
    title: 'Food Processing & Manufacturing',
    description: 'Helping food processors improve product quality, shelf life, operational efficiency, and cold chain performance across diverse product categories.',
    gradient: 'from-green-900 to-brand-dark',
    icon: '🏭',
  },
  {
    id: 'dairy',
    title: 'Dairy & Ice Cream',
    description: 'Supporting dairy processors, ice cream manufacturers, distributors, and cold storage operators with specialized refrigeration and temperature-controlled solutions.',
    gradient: 'from-[#0d2535] to-[#1a4060]',
    icon: '🧊',
  },
  {
    id: 'logistics',
    title: 'Cold Chain Logistics & Warehousing',
    description: 'Enabling logistics operators, warehousing companies, and distribution businesses to optimize storage, transportation, and temperature-controlled operations.',
    gradient: 'from-brand-dark to-indigo-900',
    icon: '🚚',
  },
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    description: 'Helping retailers and e-commerce businesses improve refrigeration efficiency, last-mile cold chain performance, and customer experience.',
    gradient: 'from-purple-900 to-brand-dark',
    icon: '🛒',
  },
  {
    id: 'hospitality',
    title: 'Hospitality, Food Service & Commercial Kitchens',
    description: 'Supporting food service operators, kitchen consultants, and hospitality businesses with refrigeration infrastructure and operational optimization.',
    gradient: 'from-[#1f0d30] to-[#3d1a60]',
    icon: '🍽️',
  },
  {
    id: 'industrial',
    title: 'Industrial Refrigeration & Temperature-Controlled Infrastructure',
    description: 'Providing strategic guidance for large-scale refrigeration, cold storage, process cooling, and specialized temperature-controlled applications.',
    gradient: 'from-slate-900 to-brand-dark',
    icon: '⚙️',
  },
]

export const WHY_CHOOSE = [
  {
    num: '01',
    title: 'Deep Domain Expertise',
    desc: 'Over two decades of hands-on cold chain experience across pharma, F&B, retail, and logistics sectors in India and internationally.',
  },
  {
    num: '02',
    title: 'End-to-End Coverage',
    desc: 'From feasibility studies to post-implementation support â€” we are your single partner across the entire cold chain lifecycle.',
  },
  {
    num: '03',
    title: 'Data-Driven Decisions',
    desc: 'Every recommendation is backed by rigorous analysis, benchmarking, and measurable KPIs â€” not guesswork.',
  },
  {
    num: '04',
    title: 'Pan India & International Reach',
    desc: 'Active across all major Indian markets and with international project experience, we bring global best practices to local challenges.',
  },
  {
    num: '05',
    title: 'Founder-Led Engagements',
    desc: 'You work directly with Devidas Narayanan â€” not juniors. Every project gets senior-level attention from day one.',
  },
]

export const FAQS = [
  {
    q: 'What types of businesses do you work with?',
    a: 'We work with organizations across cold chain, pharmaceuticals, food processing, logistics, warehousing, manufacturing, agriculture, retail, and temperature-controlled supply chains. Our consulting approach is particularly valuable for businesses seeking growth, operational improvement, infrastructure optimization, or strategic guidance.',
  },
  {
    q: 'What consulting services do you provide?',
    a: 'Our services include cold chain and refrigeration advisory, infrastructure planning, facility optimization, energy efficiency improvements, technology and vendor selection, business growth strategy, go-to-market planning, B2B sales transformation, and operational performance improvement.',
  },
  {
    q: 'At what stage should we engage a consultant?',
    a: 'The best time to engage a consultant is before making significant investments or strategic decisions. Early involvement helps identify risks, evaluate alternatives, optimize costs, and improve project outcomes before capital is committed.',
  },
  {
    q: 'Do you support both new projects and existing facilities?',
    a: 'Yes. We assist clients with greenfield projects, facility expansions, modernization initiatives, operational optimization, and performance improvement programs for existing infrastructure.',
  },
  {
    q: 'How do you differ from traditional consultants?',
    a: 'Our approach combines strategic thinking, commercial expertise, and real-world industry experience. We focus on practical, execution-oriented solutions that create measurable business outcomes rather than theoretical recommendations.',
  },
  {
    q: 'Are your recommendations independent of vendors and equipment suppliers?',
    a: 'Yes. We provide objective and unbiased advice based solely on what is best for the client\'s business objectives, operational requirements, and long-term growth plans.',
  },
  {
    q: 'Can you help evaluate technologies, vendors, and solution providers?',
    a: 'Absolutely. We support technology assessment, vendor evaluation, bid comparison, solution benchmarking, and partner selection to help clients make informed decisions with confidence.',
  },
  {
    q: 'Do you provide support for business growth and sales strategy?',
    a: 'Yes. In addition to technical and operational consulting, we help businesses strengthen go-to-market strategies, improve B2B sales effectiveness, develop channels, and enhance key account management capabilities.',
  },
  {
    q: 'What outcomes can clients expect from your consulting engagements?',
    a: 'Depending on the engagement, clients can expect improved operational efficiency, reduced investment risks, optimized infrastructure performance, stronger commercial execution, increased profitability, and sustainable business growth.',
  },
  {
    q: 'How do consulting engagements typically begin?',
    a: 'Every engagement starts with a discovery discussion to understand your business objectives, challenges, opportunities, and priorities. Based on this assessment, we recommend a customized consulting approach aligned with your goals.',
  },
  {
    q: 'Do you work on short-term advisory assignments as well as long-term projects?',
    a: 'Yes. We support clients through one-time advisory assignments, feasibility studies, strategic reviews, project-specific consulting, and long-term transformation initiatives.',
  },
  {
    q: 'How can we determine if your consulting services are right for our business?',
    a: 'If you are planning a major investment, facing operational challenges, exploring growth opportunities, evaluating technologies, or seeking an experienced industry perspective, a preliminary consultation can help determine how we can add value to your business.',
  },
]

export const TIMELINE_MILESTONES = [
  { year: '2003', event: 'Started career in cold chain operations with a leading Indian food company' },
  { year: '2008', event: 'Led first large-scale cold storage facility design project (12,000 pallet positions)' },
  { year: '2013', event: 'Expanded into pharmaceutical cold chain â€” GDP compliance & vaccine logistics' },
  { year: '2018', event: 'Completed 100+ projects across 12 Indian states and 3 international markets' },
  { year: '2021', event: 'Founded Coldeck Solutions to provide independent, founder-led cold chain consultancy' },
  { year: '2024', event: 'Serving 200+ clients across pharma, F&B, retail, logistics & Q-commerce' },
]

export const COMPANY_VALUES = [
  { title: 'Curiosity Before Conclusions', desc: 'We ask deeper questions before proposing solutions.', icon: '🔍' },
  { title: 'Opportunities Hidden in Challenges', desc: 'Every operational bottleneck is a potential growth opportunity.', icon: '💡' },
  { title: 'Commitment Beyond Contracts', desc: 'We show up when clients need us most.', icon: '🤝' },
  { title: 'Practical Innovation', desc: 'Solutions must work in the real world, not just on paper.', icon: '⚙️' },
  { title: 'Growth with Purpose', desc: 'Every engagement should create measurable and sustainable business value.', icon: '🌱' },
]




