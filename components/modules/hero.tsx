import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Code2, Github, Linkedin, Mail, MapPin, UserRound } from "lucide-react";
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

  const proofPoints = [
    {
      icon: (
        <div className="relative h-5 w-14">
          <Image src="/fubo.svg" alt="Fubo" fill className="object-contain" />
        </div>
      ),
      title: "Fubo",
      description:
        "SEO infrastructure and frontend systems for a streaming platform with millions of users.",
      className: "border-primary/15 bg-card/90",
      iconClassName: "bg-card/90 text-primary",
    },
    {
      icon: (
        <div className="relative h-4 w-4">
          <Image
            src="/factostack.svg"
            alt="FactoStack"
            fill
            className="object-contain"
          />
        </div>
      ),
      title: "FactoStack",
      description: "Building a SaaS platform for Indian MSMEs.",
      className: "border-emerald-500/20 bg-emerald-500/10",
      iconClassName: "bg-card/90 text-emerald-500",
    },
    {
      icon: <Code2 className="h-4 w-4" />,
      title: "Products & experiments",
      description: "Client MVPs, internal tools, and small products shipped from idea to launch.",
      className: "border-sky-500/20 bg-sky-500/10",
      iconClassName: "bg-card/90 text-sky-500",
    },
  ];

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
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(220 70% 40%) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-20">
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-accent/8 to-primary/5 rounded-full px-5 py-2.5 text-primary mb-6 border border-primary/20 shadow-sm backdrop-blur-sm"
            >
              <span className="text-sm font-semibold tracking-wider">
                PRODUCT ENGINEER
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-primary/40 sm:block" />
              <span className="hidden text-sm text-muted-foreground sm:flex sm:items-center sm:gap-1">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Bengaluru, India
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

            <motion.div
              className="md:text-xl text-lg text-muted-foreground mb-2 flex items-center gap-3 font-medium"
              variants={itemVariants}
            >
              <span>Software Engineer at</span>
              <a
                href="https://fubo.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:opacity-75 transition-opacity"
              >
                <Image
                  src="/fubo.svg"
                  alt="Fubo"
                  width={28}
                  height={14}
                  className="object-contain"
                />
              </a>
            </motion.div>

            <motion.p
              className="md:text-xl text-lg text-muted-foreground max-w-2xl leading-relaxed mb-2"
              variants={itemVariants}
            >
              I work on technical SEO and frontend systems at{" "}
              <a
                href="https://fubo.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-primary transition-colors"
              >
                Fubo
              </a>
              , and outside work I&apos;m building{" "}
              <a
                href="https://factostack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-primary transition-colors"
              >
                FactoStack
              </a>
              , a SaaS platform for Indian MSMEs.
            </motion.p>

            <motion.p
              className="md:text-lg text-base text-muted-foreground max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              Five years across{" "}
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
              , and cloud infra. Mostly frontend-heavy full-stack work.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-10"
              variants={containerVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/projects">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 h-10 font-semibold text-sm shadow-sm transition-all duration-200 w-full sm:w-auto gap-2 border border-primary/40">
                    View My Work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="bg-card/70 border border-border/70 text-foreground hover:bg-secondary/70 hover:border-primary/35 hover:text-foreground rounded-lg px-5 h-10 font-semibold text-sm shadow-sm transition-all duration-200 w-full sm:w-auto"
                  >
                    <UserRound className="h-4 w-4" />
                    About Me
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="mailto:sudharsangs.99@gmail.com">
                  <Button
                    variant="outline"
                    className="bg-card/70 border border-border/70 text-foreground hover:bg-secondary/70 hover:border-primary/35 hover:text-foreground rounded-lg px-5 h-10 font-semibold text-sm shadow-sm transition-all duration-200 w-full sm:w-auto"
                  >
                    <Mail className="h-4 w-4" />
                    Email Me
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
                    className={`text-muted-foreground p-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full transition-all duration-300 shadow-md ${hoverColors[index]}`}
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

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {proofPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className={`rounded-3xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${point.className}`}
            >
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ${point.iconClassName}`}
              >
                {point.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground">
                {point.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
