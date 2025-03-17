"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";
import { Links } from "@/lib/links";

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
    <div className="flex justify-center">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-background/50 backdrop-blur-sm text-foreground flex items-center justify-between h-14 sm:h-16 z-50 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl fixed top-2 sm:top-4 rounded-lg shadow-md border border-border px-4"
      >
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-primary/80 ml-4 transition-colors"
          >
            slop.sh
          </Link>
          {!isMobile && (
            <nav className="hidden md:flex gap-6">
              {Links.map(
                (link) =>
                  !link.external && (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 pt-3 pb-2 rounded transition-colors"
                        target={link.href !== "/projects" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ),
              )}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isMobile && <HamburgerMenu />}
          {!isMobile && (
            <div className="hidden md:block">
              {Links.filter((link) => link.external).map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Link
                    href={link.href}
                    target={link.href !== "/projects" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 pt-3 pb-2 rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}
