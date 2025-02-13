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
import WorkInProgress from "@/components/WorkInProgress";

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
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border shadow-lg">
        <CardContent className="p-8">
          <motion.div className="space-y-8">
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold tracking-tight"
              >
                Hey, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
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
                        "Passionate about web development",
                      ],
                      loop: true,
                      deleteSpeed: 20,
                      autoStart: true,
                    }}
                  />
                )}
              </motion.p>
            </div>

            <Clock />
            <AboutSection />
            <SocialLinks />
            <CoffeeButton />
            <LastFm />
            <div className="h-0.5 w-full bg-border" />
            <WorkInProgress />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
