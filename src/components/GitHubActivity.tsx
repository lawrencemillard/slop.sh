"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import GitHubCalendar from "react-github-calendar";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export default function GitHubActivity() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="w-full max-w-[60rem] mx-auto mt-16 px-4 sm:px-6 lg:px-8"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border">
        <div className="pl-8 pt-8">
          <h2 className="text-xl font-semibold">GitHub Activity</h2>
        </div>
        <CardContent className="p-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="space-y-6"
          >
            <GitHubCalendar
              username="q4ow"
              colorScheme="dark"
              hideColorLegend
            />
            <p className="text-sm text-muted-foreground">
              <a
                href="https://github.com/q4ow"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my GitHub profile
              </a>
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
