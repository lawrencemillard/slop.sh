"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const projects: Project[] = [
  {
    id: 1,
    title: "slop.sh",
    description: "My personal website built with Next.js and TailwindCSS",
    image: "https://r2.slop.sh/wdrwxfpj.png",
    githubUrl: "https://github.com/keirim/slop.sh",
    demoUrl: "https://slop.sh",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Git"],
    status: "in-progress",
  },
  {
    id: 2,
    title: "AnonHost",
    description: "A simple file hosting service with anonymous uploads",
    image: "https://r2.slop.sh/anonhost.png",
    githubUrl: "https://github.com/keirim/keiran.cc",
    tags: ["React", "NextJS", "Prisma", "PostgreSQL", "TailwindCSS"],
    status: "completed",
  },
  {
    id: 3,
    title: "E-Z Docs",
    description: "Community driven documentation for E-Z Services",
    image: "https://r2.slop.sh/e-zdocs.png",
    githubUrl: "https://github.com/keirim/ez-docs",
    demoUrl: "https://e-z.software",
    tags: ["React", "NextJS", "TailwindCSS", "Git", "Framer Motion"],
    status: "in-progress",
  },
  {
    id: 4,
    title: "AnonLink",
    description: "A simple, private link shortening service",
    image: "https://r2.slop.sh/anonlink.png",
    githubUrl: "https://github.com/keirim/anonlink",
    demoUrl: "https://anon.love",
    tags: ["React", "NextJS", "TailwindCSS", "SQLite", "Caddy"],
    status: "completed",
  },
  {
    id: 5,
    title: "KeiranHost",
    description: "A simple file hosting service, predecessor to AnonHost",
    image: "https://r2.slop.sh/keiranhost.png",
    githubUrl: "https://github.com/keirim/keiranhost",
    tags: ["React", "NextJS", "Prisma", "PostgreSQL", "TailwindCSS"],
    status: "completed",
  },
  {
    id: 6,
    title: "keiran.live",
    description: "My personal portfolio built with Go and NextJS",
    image: "https://r2.slop.sh/keiranlive.png",
    githubUrl: "https://github.com/keirim/keiran.live",
    tags: ["React", "NextJS", "Go", "TailwindCSS", "Framer Motion"],
    status: "completed",
  },
];

export default function ProjectsPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial="hidden"
      animate="show"
      variants={containerVariants}
      exit={{ opacity: 0 }}
    >
      <main className="flex-1 container mx-auto mt-48">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-t-lg object-cover transition-all duration-300 grayscale hover:grayscale-0"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.status === 'completed'
                          ? 'bg-green-500/10 text-green-500'
                          : project.status === 'in-progress'
                          ? 'bg-yellow-500/10 text-yellow-500'
                          : 'bg-gray-500/10 text-gray-500'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      asChild
                    >
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink className="h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </motion.div>
  );
}
