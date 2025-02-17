interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
  status: "completed" | "in-progress" | "planned";
}

export const Projects: Project[] = [
  {
    id: 1,
    title: "slop.sh",
    description: "My personal website built with Next.js and TailwindCSS",
    image: "https://r2.slop.sh/wdrwxfpj.png",
    githubUrl: "https://github.com/q4ow/slop.sh",
    demoUrl: "https://slop.sh",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Git"],
    status: "in-progress",
  },
  {
    id: 2,
    title: "AnonHost",
    description: "A simple file hosting service with anonymous uploads",
    image: "https://r2.slop.sh/anonhost.png",
    githubUrl: "https://github.com/q4ow/keiran.cc",
    tags: ["React", "NextJS", "Prisma", "PostgreSQL", "TailwindCSS"],
    status: "completed",
  },
  {
    id: 3,
    title: "E-Z Docs",
    description: "Community driven documentation for E-Z Services",
    image: "https://r2.slop.sh/e-zdocs.png",
    githubUrl: "https://github.com/q4ow/ez-docs",
    demoUrl: "https://e-z.wiki",
    tags: ["React", "NextJS", "TailwindCSS", "Git", "Framer Motion"],
    status: "in-progress",
  },
  {
    id: 4,
    title: "AnonLink",
    description: "A simple, private link shortening service",
    image: "https://r2.slop.sh/anonlink.png",
    githubUrl: "https://github.com/q4ow/anonlink",
    demoUrl: "https://anon.love",
    tags: ["React", "NextJS", "TailwindCSS", "SQLite", "Caddy"],
    status: "completed",
  },
  {
    id: 5,
    title: "KeiranHost",
    description: "A simple file hosting service, predecessor to AnonHost",
    image: "https://r2.slop.sh/keiranhost.png",
    githubUrl: "https://github.com/q4ow/keiranhost",
    tags: ["React", "NextJS", "Prisma", "PostgreSQL", "TailwindCSS"],
    status: "completed",
  },
  {
    id: 6,
    title: "keiran.live",
    description: "My personal portfolio built with Go and NextJS",
    image: "https://r2.slop.sh/keiranlive.png",
    githubUrl: "https://github.com/q4ow/keiran.live",
    tags: ["React", "NextJS", "Go", "TailwindCSS", "Framer Motion"],
    status: "completed",
  },
];
