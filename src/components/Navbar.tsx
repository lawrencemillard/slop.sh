"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { links } from "@/lib/links";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      // initial="hidden"
      // animate="show"
      // variants={navbarVariants}
      className="flex justify-center"
    >
      <nav className="bg-background/50 backdrop-blur-sm text-foreground flex items-center justify-between h-14 sm:h-16 z-50 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl fixed top-2 sm:top-4 rounded-lg shadow-lg border border-border px-2 sm:px-4">
        <div className="flex items-center gap-8">
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              href="/"
              className="text-2xl font-bold hover:text-primary/80 ml-4 transition-colors"
            >
              slop.sh
            </Link>
          </motion.div>
          {!isMobile && (
            <nav className="hidden md:flex gap-6">
              {links.map(
                (link) =>
                  !link.external && (
                    <motion.div key={link.href} whileHover="hover" variants={linkVariants}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
              )}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-8">
          {isMobile && (
            <div className="flex-grow flex justify-center mr-4 mt-1.5">
              <HamburgerMenu />
            </div>
          )}
          {!isMobile && (
            <motion.div
              whileHover="hover"
              variants={linkVariants}
              className="hidden md:block"
            >
              {links
                .filter((link) => link.external)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
            </motion.div>
          )}
        </div>
      </nav>
    </motion.div>
  );
}