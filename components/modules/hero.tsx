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
        className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/18 to-accent/10 rounded-full blur-[80px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-tr from-accent/15 to-primary/10 rounded-full blur-[70px]"
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(220 70% 40%) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

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
              FULL STACK ENGINEER · PRODUCT BUILDER
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
            From streaming infrastructure at Fubo to a manufacturing ERP built solo for Indian factories, I work across the full stack and see things through to production.
          </motion.p>

          <motion.p
            className="md:text-lg text-base text-muted-foreground max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            5+ years across{" "}
            <span className="text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-md">
              React
            </span>
            ,{" "}
            <span className="text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-md">
              TypeScript
            </span>
            ,{" "}
            <span className="text-foreground font-semibold bg-muted px-2 py-0.5 rounded-md">
              Node.js
            </span>
            , and cloud infra. Five years of shipping things that actually go live.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 pt-10"
            variants={containerVariants}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/about">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 h-11 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto gap-2">
                  About Me
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/projects">
                <Button variant="outline" className="bg-white/80 border border-border/70 text-foreground hover:bg-white hover:border-primary/40 hover:text-primary rounded-xl px-6 h-11 font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto">
                  View Projects
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="https://cal.com/sudharsangs/30min" target="_blank">
                <Button variant="outline" className="bg-white/80 border border-border/70 text-foreground hover:bg-white hover:border-primary/40 hover:text-primary rounded-xl px-6 h-11 font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto">
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
                "hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20",
                "hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20",
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
          {/* Outer glow */}
          <div className="absolute w-[340px] h-[340px] lg:w-[400px] lg:h-[400px] rounded-3xl bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl" />

          {/* Photo card */}
          <motion.div
            className="w-72 h-72 lg:w-[340px] lg:h-[340px] rounded-3xl overflow-hidden border border-primary/20 relative z-10 shadow-2xl shadow-primary/15"
            whileHover={{ scale: 1.02 }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
          </motion.div>
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
