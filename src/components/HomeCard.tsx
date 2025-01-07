"use client";

import { motion } from "framer-motion";
import { FaEllipsisH, FaGithub, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/keirim", label: "GitHub" },
  { icon: FaTwitter, href: "https://twitter.com/_keirandev", label: "Twitter" },
  { icon: MdOutlineMail, href: "mailto:hi@slop.sh", label: "Email" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export default function HomeCard() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="w-full max-w-4xl mx-auto mt-[calc(4rem+theme(space.24))] px-4 sm:px-6 lg:px-8"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border">
        <CardContent className="p-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold tracking-tight"
              >
                Hey, I&apos;m Keiran 👋
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground"
              >
                Welcome to slop.sh — where I share my projects, ideas, and more!
              </motion.p>
            </div>

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-4 space-y-4"
            >
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a full-stack developer passionate about building tools
                and experiences that make a difference. This site serves as a
                hub for my various projects and experiments in web development,
                software development and other topics that interest me.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/projects" passHref>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="bg-secondary/50 cursor-pointer">
                    <CardContent className="p-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl font-semibold mb-2"
                      >
                        Projects
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-muted-foreground"
                      >
                        Explore my latest experiments and open-source
                        contributions
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
              <Link href="/blog" passHref>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="bg-secondary/50 cursor-pointer">
                    <CardContent className="p-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-xl font-semibold mb-2"
                      >
                        Blog
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="text-muted-foreground"
                      >
                        Thoughts and tutorials on development, design, and
                        technology
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              className="pt-4 hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <Card className="bg-secondary/50">
                <CardContent className="p-6 flex items-center">
                  <FaEllipsisH className="h-6 w-6 mr-8" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Work in Progress
                    </h3>
                    <p className="text-muted-foreground">
                      Stay tuned for more updates coming soon!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
