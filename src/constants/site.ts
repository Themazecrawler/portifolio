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
    role: 'IT Support Intern',
    organization: 'Internship',
    period: 'Past',
    description:
      'Gained valuable hands-on experience in IT support, data management, and auditing, building a solid foundation in how technology impacts business operations.',
    highlights: [
      'IT support & troubleshooting',
      'Data management',
      'Systems auditing',
    ],
  },
  {
    role: 'Fullstack & Mobile Developer',
    organization: 'Personal & Client Projects',
    period: 'Current',
    description:
      'Building production-ready web and mobile applications spanning fullstack development, mobile platforms, and security-first design.',
    highlights: [
      'Flutter & React Native apps',
      'React + Node.js web apps',
      'Security-first implementation',
    ],
  },
];
