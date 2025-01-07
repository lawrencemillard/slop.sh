"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.5,
    },
  },
};

const linkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <motion.nav
        className="bg-background/50 backdrop-blur-sm text-foreground flex items-center justify-between h-16 z-50 w-full max-w-4xl fixed top-4 rounded-lg shadow-lg border border-border px-4"
        initial="hidden"
        animate="show"
        variants={navVariants}
      >
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
      </motion.nav>
    </div>
  );
}
