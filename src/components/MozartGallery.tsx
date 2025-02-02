"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const images = [
  "https://r2.slop.sh/image1.jpg",
  "https://r2.slop.sh/image2.jpg",
  "https://r2.slop.sh/image3.jpg",
  "https://r2.slop.sh/image4.jpg",
  "https://r2.slop.sh/image5.jpg",
  "https://r2.slop.sh/image6.jpg",
  "https://r2.slop.sh/image7.jpg",
  "https://r2.slop.sh/image8.jpg",
  "https://r2.slop.sh/image9.jpg",
  "https://r2.slop.sh/image10.jpg",
  "https://r2.slop.sh/image11.jpg",
  "https://r2.slop.sh/image12.jpg",
  "https://r2.slop.sh/image13.jpg",
  "https://r2.slop.sh/image14.jpg",
  "https://r2.slop.sh/image15.jpg",
  "https://r2.slop.sh/image16.jpg",
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
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border max-w-4xl mx-auto border-border mt-16">
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
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
