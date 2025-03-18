import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="pt-4 space-y-4"
    >
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="text-muted-foreground leading-relaxed">
        I&apos;m a full-stack developer from the UK and I just write stuff for
        fun. This site serves as a hub for my various projects and experiments
        in web development, software development and other topics that interest
        me. I have been learning to code since I was around 11 years old, but
        have only bothered with web development within the last year or so. I
        live for my girlfriend, she is what motivates me.
      </p>
    </motion.div>
  );
}
