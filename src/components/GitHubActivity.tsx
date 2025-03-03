"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import GitHubCalendar from "react-github-calendar";
import { FiGithub } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function GitHubActivity() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border shadow-lg">
        <div className="pl-8 pt-8 flex items-center">
          <FiGithub className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-semibold">GitHub Activity</h2>
        </div>
        <CardContent className="pl-8 pt-4">
          <motion.div className="space-y-4">
            <GitHubCalendar
              username="q4ow"
              colorScheme={"dark"}
              hideColorLegend
              hideMonthLabels
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
