import {
  FaBluesky,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaLastfm,
  FaRegEnvelope,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/keirim", label: "GitHub" },
  { icon: FaTwitter, href: "https://twitter.com/_keirandev", label: "Twitter" },
  {
    icon: FaDiscord,
    href: "https://discord.com/users/1230319937155760131",
    label: "Discord",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@KeiranScript",
    label: "YouTube",
  },
  {
    icon: FaBluesky,
    href: "https://bsky.app/profile/keiran.cc",
    label: "Bluesky",
  },
  {
    icon: FaLastfm,
    href: "https://www.last.fm/user/Kuuichi2",
    label: "Last.fm",
  },
  { icon: FaRegEnvelope, href: "mailto:hi@slop.sh", label: "Email" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SocialLinks() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="flex gap-3"
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
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
