import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/keirim", label: "GitHub" },
  { icon: FaTwitter, href: "https://twitter.com/_keirandev", label: "Twitter" },
  { icon: MdOutlineMail, href: "mailto:hi@slop.sh", label: "Email" },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex gap-3"
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
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
      ))}
    </motion.div>
  );
}
