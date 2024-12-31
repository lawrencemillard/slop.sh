"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-background text-foreground flex items-center justify-between mt-4 h-16 z-50 w-1/2 fixed top-0 left-1/4 rounded shadow-lg border border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center">
        <div className="text-2xl font-bold ml-4">
          <a
            className="hover:bg-accent/10 rounded p-2 transition-colors duration-200 ease-in-out"
            href="https://github.com/keirim"
            target="_blank"
          >
            slop.sh
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <h1 className="text-lg font-bold mr-4">Coming soon</h1>
      </div>
    </motion.nav>
  );
}
