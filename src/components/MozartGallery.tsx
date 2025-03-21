"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Images } from "@/lib/links";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function MozartGallery() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-[902px] mx-auto"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border shadow-lg">
        <CardContent className="p-8">
          <motion.h1
            className="text-4xl font-bold text-center mb-8"
            variants={itemVariants}
          >
            Mozart Gallery
          </motion.h1>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {Images.map((src, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative w-full pt-[100%] overflow-hidden rounded-lg"
              >
                <Image
                  src={src || "/placedoggo.svg"}
                  alt={`Image ${index}`}
                  fill
                  className="rounded-lg object-cover mozart-image"
                />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
