"use client";

import { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import GitHubCalendar from "react-github-calendar";
import { FiGithub } from "react-icons/fi";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

export default function GitHubActivity() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.2 }, 
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-[912px] mx-auto"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 overflow-hidden w-full"
          >
            <motion.div 
              variants={itemVariant} 
              className="w-full overflow-x-auto pb-2"
            >
              <div className="min-w-[750px]">
                <GitHubCalendar
                  username="q4ow"
                  colorScheme="dark"
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                  theme={{
                    dark: ['#333', '#fff']
                  }}
                />
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariant}
              className="flex justify-between items-center"
            >
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/q4ow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                <span>View on GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}