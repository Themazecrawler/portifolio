export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'contact';

export const SECTIONS: SectionId[] = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'contact',
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Themazecrawler',
  linkedin: 'https://www.linkedin.com/in/lisa-amimo-7a9518225/',
  email: 'mailto:amimolisa23@gmail.com',
  phone: 'tel:+254111508242',
} as const;

export const CONTACT_INFO = {
  email: 'amimolisa23@gmail.com',
  phone: '+254 111 508 242',
} as const;

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
};

// NOTE: `image` fields below are placeholders (picsum, seeded per project so
// they're at least stable and don't repeat) standing in for the previous
// random, unrelated Pexels stock photos. Swap these for real product
// screenshots as soon as you have them — that's the single highest-impact
// fix for this section's credibility.
export const PROJECTS: Project[] = [
  {
    title: 'StimaSense',
    description:
      'Real-time electricity tracking for Kenyan households - stay informed on power status, outages, and patterns with a clean, responsive interface.',
    tech: ['Dart', 'Flutter', 'Material Design', 'Real-time APIs'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image: 'https://picsum.photos/seed/stimasense-power-app/600/450',
  },
  {
    title: 'AI Rapid Response',
    description:
      'An AI-powered emergency response and incident reporting app - built to analyze, route, and respond to crises fast when every second counts.',
    tech: ['AI/ML', 'React Native', 'Python', 'Emergency APIs'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image: 'https://picsum.photos/seed/ai-rapid-response-app/600/450',
  },
  {
    title: 'Bloom',
    description:
      'A dating app built by and for Black users centered on connection, safety, and real representation in love and community.',
    tech: ['Dart', 'Supabase', 'Flutter', 'Socket.io'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image: 'https://picsum.photos/seed/bloom-dating-app/600/450',
  },
  {
    title: 'WalletIO',
    description:
      'A modern Web3 crypto wallet app that gives users a clear, real-time view of their digital assets.',
    tech: ['React Native', 'Web3.js', 'Ethereum', 'Tailwind'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image: 'https://picsum.photos/seed/walletio-crypto-app/600/450',
  },
  {
    title: 'Hora',
    description:
      'A cross-platform menstrual cycle tracking application featuring seasonally themed UI, privacy-first onboarding, cycle predictions, symptom tracking, and wellness insights.',
    tech: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image: 'https://picsum.photos/seed/hora-cycle-app/600/450',
  },
  {
    title: 'SACE',
    description:
      'AI-Powered Style Suggestion Platform',
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image: 'https://picsum.photos/seed/sace-style-ai/600/450',
  },
  {
    title: 'HMS',
    description:
      'A hotel management system platform that is highly customizable.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image: 'https://picsum.photos/seed/hms-hotel-system/600/450',
  },
];


export type Skill = {
  title: string;
  description: string;
};

export const SKILLS: Skill[] = [
  {
    title: 'Mobile development',
    description:
      'Building responsive, high-performance mobile applications for Android and iOS with a focus on intuitive user experiences.',
  },
  {
    title: 'Frontend development',
    description:
      'Creating modern, interactive user interfaces that are visually appealing, responsive, and optimized for usability.',
  },
  {
    title: 'Web development',
    description:
      'Developing fast, scalable websites and web applications using modern technologies and best practices.',
  },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Freelance Web Developer',
    organization: 'Upwork',
    period: '01/2023 - Present',
    description:
      'Designing and developing custom static and dynamic websites for diverse clients, focusing on responsive design, modern performance, and seamless user experiences.',
    highlights: [
      'Built custom mobile-responsive portfolio sites using modern HTML, CSS, and JS.',
      'Integrated PHP/MySQL for dynamic data management and user forms.',
      'Delivered end-to-end web solutions directly to local clients.',
    ],
  },
  {
    role: 'Software Engineering AI Evaluator',
    organization: 'Habitat Code',
    period: '11/2025 - 04/2026',
    description:
      'Evaluated AI-generated code implementations across frontend, backend, and infrastructure tasks to ensure correctness, functionality, and adherence to modern software engineering standards.',
    highlights: [
      'Reviewed code patches, PRs, and Git diffs to identify bugs and potential regressions.',
      'Analyzed software test suites to validate expected behavior and test coverage.',
      'Provided structured technical feedback on logic, compatibility, and best practices.',
    ],
  },
  {
    role: 'Full-stack Developer Intern',
    organization: 'Vislona',
    period: '08/2025 - 12/2025',
    description:
      'Developed responsive web applications using HTML, CSS, JavaScript, React, and Node.js. Collaborated cross-functionally to design, build, and deploy full-stack features.',
    highlights: [
      'Built responsive React frontends integrated with Node.js backends.',
      'Troubleshot application issues and optimized UI/UX design principles.',
      'Researched and adopted modern web development practices to improve performance.',
    ],
  },
  {
    role: 'IT Intern & Technical Trainer',
    organization: 'LVCT HEALTH',
    period: '06/2024 - 08/2024',
    description:
      'Managed IT operations and delivered technical support, culminating in being nominated as a technical trainer for a youth hackathon centered around mobile application development.',
    highlights: [
      'Served as a technical trainer for a mobile app development youth hackathon.',
      'Conducted IT audits and implemented solutions to improve system performance.',
      'Managed and organized data ensuring accuracy and efficient accessibility.',
    ],
  },
];
