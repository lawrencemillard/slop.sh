"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Socials from "@/components/Socials";
import AboutSection from "@/components/AboutSection";
import { DiscordPresence } from "@/components/DiscordPresence";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
      className="w-full max-w-[912px] mx-auto flex items-center justify-center pt-12"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-xs border border-border shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="absolute top-9 right-6"
        >
          <Avatar
            className="w-24 h-24 border-2 border-chart-1/80 transition-all duration-300 hover:scale-105 hover:border-chart-1 cursor-pointer"
            role="img"
            aria-label="Profile picture of Keiran"
            onClick={() => window.open("https://hyprland.org", "_blank")}
          >
            <AvatarImage
              src="/avatar2.png"
              alt="Keiran's profile picture"
              loading="eager"
              className="object-cover"
            />
            <AvatarFallback delayMs={600}>K</AvatarFallback>
          </Avatar>
        </motion.div>
        <CardContent className="p-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="space-y-2 mb-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold tracking-tight"
              >
                Hey, I&apos;m Keiran
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
              transition={{ delay: 1.4 }}
              className="mt-6"
            >
              <DiscordPresence />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
