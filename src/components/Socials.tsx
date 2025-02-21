import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialLinks } from "@/lib/links";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Socials() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="flex gap-3"
    >
      {SocialLinks.map(({ icon: Icon, href, label }) => (
        <motion.div key={label} variants={itemVariants}>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="h-10 w-10 rounded-full hover:bg-primary/10"
          >
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
