"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <motion.nav
        className="bg-background/50 backdrop-blur-sm text-foreground flex items-center justify-between h-16 z-50 w-full max-w-4xl fixed top-4 rounded-lg shadow-lg border border-border px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
      >
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-primary/80 ml-4 transition-colors"
          >
            slop.sh
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>
        <Link
          href="https://github.com/keirim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
        >
          GitHub
        </Link>
      </motion.nav>
    </div>
  );
}
