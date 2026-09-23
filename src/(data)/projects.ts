export type Category = 'Full-Stack' | 'Frontend' | 'Backend';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: Category;
  tech: string[];
}


export const projects: Project[] = [
  {
    id: 'bookflow',
    title: 'BookFlow',
    tagline: 'Multi-tenant SaaS booking platform for Indian local service businesses.',
    category: 'Full-Stack',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 'janvaani',
    title: 'JanVaani',
    tagline: 'AI-powered civic complaint platform built with Next.js and the Gemini API.',
    category: 'Full-Stack',
    tech: ['Next.js', 'Gemini API', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Website',
    tagline: 'Personal portfolio built with Astro and Svelte islands.',
    category: 'Frontend',
    tech: ['Astro', 'Svelte', 'TypeScript', 'Tailwind CSS'],
  },
];
