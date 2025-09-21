import React from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  ExternalLink,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fonts } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/sudharsangs",
      label: "LinkedIn Profile",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/sudharsangs",
      label: "GitHub Profile",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:sudharsangs.99@gmail.com",
      label: "Email",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-20 min-h-[95vh] relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-primary/8 to-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-tr from-accent/8 to-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-gradient-to-r from-primary/10 via-accent/8 to-primary/5 rounded-full px-5 py-2.5 text-primary mb-6 border border-primary/20 shadow-sm backdrop-blur-sm"
          >
            <span className="text-sm font-semibold tracking-wider">
              FULLSTACK DEVELOPER
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
            variants={itemVariants}
            style={{ fontFamily: fonts.PlayfairDisplay }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent">
              Sudharsan GS
            </span>
          </motion.h1>

          <motion.h2
            className="md:text-2xl text-xl text-muted-foreground mb-2 flex items-center font-medium"
            variants={itemVariants}
          >
            Software Engineer at{" "}
            <span className="ml-2 flex items-center">
              <Image
                src="/fubo.svg"
                alt="fubo"
                width={24}
                height={24}
                className="ml-1"
              />
            </span>
          </motion.h2>

          <motion.h3
            className="md:text-lg text-base text-muted-foreground mb-6 flex items-center gap-2"
            variants={itemVariants}
          >
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              Based in{" "}
              <span className="text-primary font-medium">Bengaluru, India</span>
            </span>
          </motion.h3>

          <motion.p
            className="md:text-xl text-lg text-muted-foreground max-w-2xl leading-relaxed mb-2"
            variants={itemVariants}
          >
            Crafting digital experiences that merge beautiful design with robust
            functionality.
          </motion.p>

          <motion.p
            className="md:text-lg text-base text-muted-foreground max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            Specialized in{" "}
            <span className="text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-md">
              React
            </span>
            ,{" "}
            <span className="text-accent font-semibold bg-accent/10 px-2 py-0.5 rounded-md">
              TypeScript
            </span>
            , and{" "}
            <span className="text-foreground font-semibold bg-muted px-2 py-0.5 rounded-md">
              Next.js
            </span>{" "}
            with 5+ years of experience delivering scalable solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 pt-10"
            variants={containerVariants}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/about">
                <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl px-6 py-4 flex items-center gap-2 h-12 font-semibold text-sm border border-primary/20 w-full sm:w-auto">
                  About Me
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm border-2 border-accent/40 text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 rounded-xl px-6 py-4 h-12 font-semibold shadow-lg hover:shadow-xl text-sm w-full sm:w-auto"
                >
                  View Projects
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="https://cal.com/sudharsangs/30min" target="_blank">
                <Button className="bg-white/90 backdrop-blur-sm border-2 border-muted-foreground/40 text-muted-foreground hover:bg-muted-foreground hover:text-white hover:border-muted-foreground transition-all duration-300 rounded-xl px-6 py-4 h-12 font-semibold shadow-lg hover:shadow-xl text-sm w-full sm:w-auto">
                  Schedule Call
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex space-x-5 pt-8"
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => {
              const hoverColors = [
                "hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-200/50",
                "hover:bg-gray-100 hover:border-gray-500 hover:text-gray-800 hover:shadow-lg hover:shadow-gray-200/50",
                "hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20",
              ];
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`text-muted-foreground p-4 bg-white/80 backdrop-blur-sm border border-border/50 rounded-full transition-all duration-300 shadow-md ${hoverColors[index]}`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex md:justify-end justify-center items-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="w-80 h-80 lg:w-96 lg:h-96 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-primary/30 relative z-10 shadow-2xl"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/sudharsan.webp"
              alt="Sudharsan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
          </motion.div>

          {/* Enhanced decorative elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/4 -left-4 w-6 h-6 bg-primary/40 rounded-full"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute hidden bottom-8 left-1/2 transform -translate-x-1/2 sm:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.p className="text-muted-foreground text-sm mb-2 font-medium">
          Scroll to explore
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-primary bg-white/60 backdrop-blur-sm rounded-full p-2 shadow-md"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
