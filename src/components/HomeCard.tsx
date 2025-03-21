"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LastFm from "@/components/LastFm";
import Socials from "@/components/Socials";
import AboutSection from "@/components/AboutSection";
import { CoffeeButton } from "@/components/Coffee";
// import WorkInProgress from "@/components/WorkInProgress";

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
  const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const isLastFm = LastFm();

  const myAge = calculateAge(new Date("2009-03-25"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-[902px] mx-auto min-h-[50vh] flex items-center justify-center pt-8"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className="absolute top-9 right-6"
        >
          <Avatar className="w-24 h-24 hover:scale-105 transition-transform duration-200">
            <AvatarImage src="/avatar.png" alt="Keiran" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
        </motion.div>
        <CardContent className="p-8">
          <motion.div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold tracking-tight"
              >
                Hey, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Keiran
                </span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground font-semibold"
              >
                {showTypewriter && (
                  <TypewriterComponent
                    options={{
                      delay: 30,
                      strings: [
                        `I'm a ${myAge} year old developer from the UK`,
                      ],
                      loop: false,
                      deleteSpeed: 9999999999999999,
                      autoStart: true,
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <AboutSection />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <Socials />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 1.0 }}
            >
              <CoffeeButton />
            </motion.div>
            {isLastFm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 1.2 }}
              >
                <LastFm />
              </motion.div>
            )}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 1.4 }}
              className="h-0.5 w-full bg-border"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 1.6 }}
            >
              <WorkInProgress />
            </motion.div> */}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
