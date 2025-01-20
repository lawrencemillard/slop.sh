"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import LastFm from "@/components/LastFm";
import SocialLinks from "@/components/SocialLinks";
import AboutSection from "@/components/AboutSection";
import WorkInProgress from "@/components/WorkInProgress";

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

export default function HomeCard() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="w-full max-w-[60rem] mx-auto mt-[calc(4rem+theme(space.32))] px-4 sm:px-6 lg:px-8"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border">
        <div className="absolute top-4 right-4">
          <LastFm />
        </div>
        <CardContent className="p-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold tracking-tight"
              >
                Hey, I&apos;m Keiran
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground"
              >
                Welcome to slop.sh — where I share my projects and stuff
              </motion.p>
            </div>

            <SocialLinks />

            <AboutSection />

            <WorkInProgress />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
