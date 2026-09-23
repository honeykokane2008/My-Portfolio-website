export type Category = 'Full-Stack' | 'Frontend' | 'Backend';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: Category;

  tech: string[];
  // Fields used by the project detail page
  description: string;
  problem: string;
  solution: string;
  features: string[];

  live: string;
  github: string;
}

// Replace image paths, links, and copy below with your real project details.
export const projects: Project[] = [
  {
    id: 'bookflow',
    title: 'BookFlow',
    tagline: 'Multi-tenant SaaS booking platform for Indian local service businesses.',
    category: 'Full-Stack',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    description:
      'BookFlow lets Indian local service businesses — salons, clinics, tutors — run online bookings, staff schedules, and payments from one multi-tenant dashboard.',
    problem:
      'Small service businesses in India mostly take bookings over WhatsApp and phone calls, leading to double-bookings, no-shows, and no record of customer history.',
    solution:
      'A self-serve multi-tenant platform where each business gets its own branded booking page, staff calendar, and automated reminders, with Stripe handling deposits and payments.',
    features: [
      'Multi-tenant architecture with per-business subdomains',
      'Real-time staff availability and conflict-free scheduling',
      'Stripe-powered deposits and payment collection',
      'Automated SMS/email booking reminders',
      'Role-based access for owners, staff, and admins',
    ],
    live: 'https://bookflow.example.com',
    github: 'https://github.com/honeykokane/bookflow',
  },
  {
    id: 'janvaani',
    title: 'JanVaani',
    tagline: 'AI-powered civic complaint platform built with Next.js and the Gemini API.',
    category: 'Full-Stack',

    tech: ['Next.js', 'Gemini API', 'MongoDB', 'Tailwind CSS'],
    description:
      'JanVaani gives citizens a simple way to report civic issues — potholes, garbage, broken streetlights — and routes them to the right authority using AI classification.',
    problem:
      'Civic complaints in most Indian cities go through fragmented, slow-moving channels, and residents rarely get visibility into whether an issue is actually being addressed.',
    solution:
      'A web platform where citizens submit a complaint with a photo and location; the Gemini API classifies the issue and drafts a routing summary for the relevant department, with public status tracking.',
    features: [
      'Photo + geolocation complaint submission',
      'Gemini-powered automatic issue classification',
      'Public status tracking for every complaint',
      'Department-wise complaint dashboard',
    ],

    live: 'https://janvaani.example.com',
    github: 'https://github.com/honeykokane/janvaani',
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Website',
    tagline: 'Personal portfolio built with Astro.',
    category: 'Frontend',

    tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
    description:
      'A fast, statically-generated personal portfolio showcasing projects, skills, and experience, built with Astro for near-zero JavaScript by default.',
    problem:
      'Needed a portfolio that loads instantly, ranks well, and is simple to extend with new projects without pulling in a heavy frontend framework.',
    solution:
      'Astro renders everything to static HTML at build time, with small vanilla-JS scripts only where real interactivity (like filtering) is needed.',
    features: [
      'Fully static pages for near-instant load times',
      'Filterable project grid with zero framework dependency',
      'Dark mode support',
      'Dynamic per-project case study pages',
    ],

    live: 'https://honeykokane.example.com',
    github: 'https://github.com/honeykokane/portfolio',
  },
];
