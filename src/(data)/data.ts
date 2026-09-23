export type Category = 'Full-Stack' | 'Frontend' | 'Backend';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: Category;
  image: string;
  tech: string[];
}

// Replace image paths with your real screenshots (e.g. in /public/images/projects/)
export const projects: Project[] = [
  {
    id: 'bookflow',
    title: 'BookFlow',
    tagline: 'Multi-tenant SaaS booking platform for Indian local service businesses.',
    category: 'Full-Stack',
    image: '/images/projects/bookflow.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 'janvaani',
    title: 'JanVaani',
    tagline: 'AI-powered civic complaint platform built with Next.js and the Gemini API.',
    category: 'Full-Stack',
    image: '/images/projects/janvaani.jpg',
    tech: ['Next.js', 'Gemini API', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Website',
    tagline: 'Personal portfolio built with Astro and Svelte islands.',
    category: 'Frontend',
    image: '/images/projects/portfolio.jpg',
    tech: ['Astro', 'Svelte', 'TypeScript', 'Tailwind CSS'],
  },
];
