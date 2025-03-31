"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      <Card className="h-full border border-border shadow-sm hover:shadow-lg transition-shadow">
        <CardHeader className="pb-2 flex items-center gap-2">
          {icon}
          <CardTitle className="text-lg flex items-center gap-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm line-clamp-1 text-center text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
