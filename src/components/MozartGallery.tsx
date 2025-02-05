"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const images = [
  "/mozart/image1.jpg",
  "/mozart/image2.jpg",
  "/mozart/image3.jpg",
  "/mozart/image4.jpg",
  "/mozart/image7.jpg",
  "/mozart/image8.jpg",
  "/mozart/image9.jpg",
  "/mozart/image10.jpg",
  "/mozart/image11.jpg",
  "/mozart/image12.jpg",
  "/mozart/image13.jpg",
  "/mozart/image14.jpg",
  "/mozart/image15.jpg",
  "/mozart/image16.jpg",
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delay: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function MozartGallery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="max-w-[60rem] w-full mx-auto mt-16 px-4 sm:px-6 lg:px-8"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border mx-auto border-border mt-16">
        <CardContent className="p-8">
          <motion.h1
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Mozart Gallery
          </motion.h1>
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="grid grid-cols-3 gap-4"
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative w-full h-32"
              >
                <Image
                  src={src}
                  alt={`Image ${index}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
