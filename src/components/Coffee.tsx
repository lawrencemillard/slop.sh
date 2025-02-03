"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoSvg from "@/assets/bmc-logo.svg";
import { SiBuymeacoffee } from "react-icons/si";
import { Button } from "@/components/ui/button";

const buttonVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.8,
    },
  },
};

export default function Coffee() {
  const handleClick = () => {
    window.open("https://www.buymeacoffee.com/keiran", "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={buttonVariants}
      className="fixed top-[18px] hidden sm:block left-11 cursor-pointer"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75 blur-lg" />
        <div className="absolute inset-0 right-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-50 blur-lg" />
        <a onClick={handleClick} className="relative">
          <Image
            src={LogoSvg}
            alt="Buy me a coffee"
            height={60}
            className="transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          />
        </a>
      </div>
    </motion.div>
  );
}

export function CoffeeButton() {
  const handleClick = () => {
    window.open("https://www.buymeacoffee.com/keiran", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="bg-[#FFDD00] hover:bg-[#FFDD00]/90 hover:scale-105 text-primary-foreground font-semibold transition-all flex items-center gap-2 border-none"
    >
      <SiBuymeacoffee className="w-5 h-5" />
      <span className="mt-1.5 text-base">Buy me a coffee</span>
    </Button>
  );
}
