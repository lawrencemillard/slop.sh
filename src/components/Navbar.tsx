"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import HamburgerMenu from "@/components/HamburgerMenu";
import { Links } from "@/lib/links";
import { Button } from "@/components/ui/button";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();

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
        transition={{ duration: 0.5 }}
        className="bg-background/50 backdrop-blur-sm text-foreground flex items-center justify-between h-14 sm:h-16 z-50 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl fixed top-2 sm:top-4 rounded-lg shadow-lg border border-border px-2 sm:px-4"
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
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 pt-3 pb-2 rounded transition-colors"
                        target={link.href !== "/projects" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ),
              )}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </Button>
          {isMobile && <HamburgerMenu />}
          {!isMobile && (
            <div className="hidden md:block">
              {Links.filter((link) => link.external).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href !== "/projects" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:bg-primary/10 px-3 pt-3 pb-2 rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}
