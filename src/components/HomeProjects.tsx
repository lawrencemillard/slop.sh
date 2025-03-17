"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "slop.sh",
    description:
      "My personal website built with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/projects/slop.webp",
    github: "https://github.com/q4ow/slop.sh",
    live: "/",
  },
  {
    title: "EZMod",
    description:
      "A Minecraft mod for 1.8.9 & 1.21.4 that allows you to take screenshots and automatically upload them via E-Z.host",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/dap6bgva.png",
    github: "https://github.com/q4ow/EZMod",
    live: "",
  },
];

export default function HomeProjects() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border shadow-lg">
        <div className="pl-8 pt-8 flex items-center">
          <h2 className="text-xl font-semibold">Current Projects</h2>
        </div>
        <CardContent className="p-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md border border-border bg-card/50 hover:bg-card/80 flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 h-10">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mt-auto">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 text-xs h-8"
                          asChild
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiGithub className="h-3.5 w-3.5" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                      {project.live !== "" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 text-xs h-8"
                          asChild
                        >
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiExternalLink className="h-3.5 w-3.5" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
