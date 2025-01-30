"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const linkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
};

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export default function Navbar() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={navbarVariants}
      className="flex justify-center"
    >
      <nav className="bg-background/50 backdrop-blur-sm text-foreground flex items-center justify-between h-16 z-50 w-full max-w-4xl fixed top-4 rounded-lg shadow-lg border border-border px-4">
        <div className="flex items-center gap-8">
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              href="/"
              className="text-2xl font-bold hover:text-primary/80 ml-4 transition-colors"
            >
              slop.sh
            </Link>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
              >
                Projects
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
              >
                Blog
              </Link>
            </motion.div>
          </nav>
        </div>
        <motion.div whileHover="hover" variants={linkVariants}>
          <Link
            href="https://github.com/keirim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
          >
            GitHub
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
}
