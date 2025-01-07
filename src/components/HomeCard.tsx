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

export default function HomeCard() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full max-w-4xl mx-auto mt-[calc(4rem+theme(space.24))]"
    >
      <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border">
        <CardContent className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Hey, I&apos;m Keiran 👋
              </h1>
              <p className="text-lg text-muted-foreground">
                Welcome to slop.sh — where I share my projects, ideas, and more!
              </p>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-10 w-10 rounded-full"
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
            </div>

            <div className="pt-4 space-y-4">
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a full-stack developer passionate about building tools and
                experiences that make a difference. This site serves as a hub
                for my various projects and experiments in web development,
                software development and other topics that interest me.
              </p>
            </div>

            <div className="grid-cols-1 md:grid-cols-2 gap-4 pt-4 hidden">
              <Link href="/projects" passHref>
                <Card className="bg-secondary/50 cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Projects</h3>
                    <p className="text-muted-foreground">
                      Explore my latest experiments and open-source
                      contributions
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog" passHref>
                <Card className="bg-secondary/50 cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Blog</h3>
                    <p className="text-muted-foreground">
                      Thoughts and tutorials on development, design, and
                      technology
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="pt-4">
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
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
