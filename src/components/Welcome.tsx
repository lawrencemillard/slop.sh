"use client";

import { motion } from "framer-motion";
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";

export default function Welcome() {
  return (
    <motion.div
      className="text-foreground flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <motion.div
        className="flex items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <HyperText delay={300} duration={3000} className="text-4xl font-bold">
          slop.sh
        </HyperText>
      </motion.div>

      <motion.p
          className="text-4xl font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 4 }}
        >
          Coming soon to a browser near you
        </motion.p>

      <motion.div
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
      >
        <motion.h1 className="text-2xl font-bold">
          by{" "}
          <Link
        className="bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-400 to-purple-700"
        target="_blank"
        href="https://github.com/keirim"
          >
        Keiran
          </Link>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
