import {
  Code,
  Shield,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

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
  email: 'mailto:amimmolisa23@gmail.com',
  phone: 'tel:+254111508242',
} as const;

export const CONTACT_INFO = {
  email: 'amimmolisa23@gmail.com',
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

export const PROJECTS: Project[] = [
  {
    title: 'StimaSense',
    description:
      'Real-time electricity tracking for Kenyan households - stay informed on power status, outages, and patterns with a clean, responsive interface.',
    tech: ['Dart', 'Flutter', 'Material Design', 'Real-time APIs'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image:
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    title: 'AI Rapid Response',
    description:
      'An AI-powered emergency response and incident reporting app - built to analyze, route, and respond to crises fast when every second counts.',
    tech: ['AI/ML', 'React Native', 'Python', 'Emergency APIs'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image:
      'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    title: 'Bloom',
    description:
      'A dating app built by and for Black users centered on connection, safety, and real representation in love and community.',
    tech: ['Dart', 'Supabase', 'FLutter', 'Socket.io'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image:
      'https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    title: 'WalletIO',
    description:
      'modern Web3 crypto wallet appt hat gives users a clear, real-time view of their digital assets.',
    tech: ['React Native', 'Web3.js', 'Ethereum', 'Tailwind'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image:
      'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    title: 'Hora',
    description:
      'A cross-platform menstrual cycle tracking application , featuring seasonal themed UI, privacy-first onboarding, cycle predictions, symptom tracking, and wellness insights.',
    tech: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image:
      'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    title: 'SACE',
    description:
      'AI-Powered Style Suggestion Platform',
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image:
      'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    title: 'HMS',
    description:
      'a hotel management system platform that is highly customizable.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: SOCIAL_LINKS.github,
    live: '#',
    image:
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
];

export type SkillCategory = {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    icon: Code,
    title: 'Fullstack Development',
    description:
      'Building end-to-end web applications with modern frameworks and best practices.',
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Creating native and cross-platform mobile applications for iOS and Android.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Implementing security measures, conducting audits, and protecting digital assets.',
    technologies: [
      'Penetration Testing',
      'SIEM',
      'Vulnerability Assessment',
      'Compliance',
    ],
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
