import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { fonts } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-20 lg:py-28" ref={ref}>
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-[min(760px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[90px]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-56 w-[min(560px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[80px]"
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <motion.h2
            className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-foreground lg:text-5xl"
            style={{ fontFamily: fonts.PlayfairDisplay }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Looking for an engineer who can ship and
            <span className="text-primary"> think in product terms</span>?
          </motion.h2>

          <motion.p
            className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I&apos;m most useful on products with messy constraints: growth
            surfaces, operational workflows, and web and mobile apps that need
            both execution speed and judgment.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <a href="mailto:sudharsangs.99@gmail.com">
                <Button className="h-10 w-full rounded-lg border border-primary/40 bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 sm:w-auto">
                  <Mail className="w-4 h-4 mr-1" />
                  Email Me
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="h-10 w-full rounded-lg border border-border/70 bg-background/30 px-5 text-sm font-semibold text-foreground shadow-none backdrop-blur-sm transition-all duration-200 hover:border-primary/35 hover:bg-secondary/60 hover:text-foreground sm:w-auto"
                onClick={() =>
                  window.open("https://linkedin.com/in/sudharsangs", "_blank")
                }
              >
                <Linkedin className="w-4 h-4 mr-1" />
                LinkedIn
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link href="/about">
                <Button
                  variant="outline"
                  className="h-10 w-full rounded-lg border border-border/70 bg-background/30 px-5 text-sm font-semibold text-foreground shadow-none backdrop-blur-sm transition-all duration-200 hover:border-primary/35 hover:bg-secondary/60 hover:text-foreground sm:w-auto"
                >
                  About Me
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
