"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import LastFm from "@/components/LastFm";
import SocialLinks from "@/components/SocialLinks";
import AboutSection from "@/components/AboutSection";
import TypewriterComponent from "typewriter-effect";
import Clock from "@/components/Clock";
import { CoffeeButton } from "@/components/Coffee";

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
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className={`w-full max-w-[60rem] mx-auto mt-[calc(4rem+theme(space.24))] px-4 sm:px-6 lg:px-8`}
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border">
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
                Hey, I&apos;m{" "}
                <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                  Keiran
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground font-semibold"
              >
                {showTypewriter && (
                  <TypewriterComponent
                    options={{
                      delay: 50,
                      strings: [
                        "I'm a 15 year old developer from the UK",
                        "I build things for fun",
                        "Sponsored by RAID: Shadow Legends",
                      ],
                      loop: true,
                      deleteSpeed: 20,
                      autoStart: true,
                    }}
                  />
                )}
              </motion.p>
            </div>

            <SocialLinks />

            <Clock />

            <CoffeeButton />

            <AboutSection />

            <div className="hidden sm:block mb-4">
              <LastFm />
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}