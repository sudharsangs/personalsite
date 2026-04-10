"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Code,
  Coffee,
  MapPin,
  Briefcase,
  Users,
  Rocket,
  ServerCog,
  Calendar,
  Mail,
} from "lucide-react";
import { fonts } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const About = () => {
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

  const skills = [
    {
      iconPath: "/skills/javascript.svg",
      name: "JavaScript",
      category: "Language",
    },
    {
      iconPath: "/skills/typescript.svg",
      name: "TypeScript",
      category: "Language",
    },
    { iconPath: "/skills/react.svg", name: "React", category: "Frontend" },
    { iconPath: "/skills/react.svg", name: "React Native", category: "Mobile" },
    { iconPath: "/skills/nextjs.svg", name: "NextJS", category: "Frontend" },
    {
      iconPath: "/skills/tanstack.png",
      name: "TanStack Router",
      category: "Routing",
    },
    {
      iconPath: "/skills/svelte.png",
      name: "Svelte",
      category: "Frontend",
    },
    { iconPath: "/skills/nodejs.svg", name: "NodeJS", category: "Backend" },
    {
      iconPath: "/skills/nest-js.svg",
      name: "NestJS",
      category: "Backend",
    },
    {
      iconPath: "/skills/express.svg",
      name: "ExpressJS",
      category: "Backend",
    },
    {
      iconPath: "/skills/tailwind.svg",
      name: "Tailwind CSS",
      category: "Styling",
    },
    { iconPath: "/skills/docker.svg", name: "Docker", category: "DevOps" },
    { iconPath: "/skills/mongodb.svg", name: "MongoDB", category: "Database" },
    {
      iconPath: "/skills/postgres.svg",
      name: "PostgreSQL",
      category: "Database",
    },
    { iconPath: "/skills/python.svg", name: "Python", category: "Language" },
    { iconPath: "/skills/go.svg", name: "Go", category: "Language" },
  ];

  const aiTools = [
    {
      iconPath: "/skills/claude.svg",
      name: "Claude Code",
      category: "AI Tooling",
    },
    {
      iconPath: "/skills/codex.png",
      name: "Codex",
      category: "AI Tooling",
    },
  ];

  const interests = [
    {
      icon: <Rocket className="w-5 h-5" />,
      text: "Taking products from 0 to 1, solo",
    },
    {
      icon: <Code className="w-5 h-5" />,
      text: "Full stack engineering across web and mobile",
    },
    {
      icon: <ServerCog className="w-5 h-5" />,
      text: "Scalable backend systems and cloud infra",
    },
    { icon: <Coffee className="w-5 h-5" />, text: "Developer tooling and AI-assisted workflows" },
  ];

  return (
    <section className="py-12 md:py-20 w-full">
      <motion.div
        className="space-y-10 md:space-y-16 w-full min-w-0 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center space-y-4" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-2">
            <span className="text-primary text-sm font-semibold tracking-wider">WHO I AM</span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: fonts.PlayfairDisplay }}
          >
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary/40 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start min-w-0">
          {/* About Text */}
          <motion.div className="space-y-6 min-w-0" variants={itemVariants}>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 md:p-8 border border-primary/10 overflow-hidden">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">Background</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4 break-words">
                I&apos;m{" "}
                <span className="text-primary font-semibold">Sudharsan GS</span>
                , a full stack engineer who tends to build things end-to-end rather than hand them off. Five years of that across startups, scale, and a lot of solo shipping.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed mb-4 break-words">
                Currently I&apos;m a{" "}
                <span className="text-primary font-semibold">
                  Software Engineer at Fubo
                </span>
                , working on technical SEO and front-end performance for{" "}
                <a
                  href="https://molotov.tv"
                  target="_blank"
                  className="text-accent underline"
                >
                  molotov.tv
                </a>
                . Before this, I was on the VideoAI team building AI-driven sports features and real-time highlight systems at scale.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed mb-4 break-words">
                Outside of work, I built{" "}
                <span className="text-primary font-semibold">FactoStack</span>, an ERP built from scratch for Indian MSME manufacturers because nothing out there quite fit their needs. It covers production, procurement, inventory, GST and finance in a single platform.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed break-words">
                Before that, I led frontend development at Winuall across several products serving thousands of tutors and learners. That&apos;s where I got comfortable shipping fast and seeing things through.
              </p>

              <div className="border-t border-primary/10 my-6" />

              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">How I Work</p>
              <p className="text-base text-muted-foreground leading-relaxed break-words">
                I use AI-assisted engineering tools like{" "}
                <span className="text-primary font-semibold">Claude Code</span>{" "}
                and{" "}
                <span className="text-primary font-semibold">Codex</span> to
                speed up implementation, iteration, and debugging, while I stay
                responsible for architecture, product judgment, and final code
                quality.
              </p>
            </div>
            <motion.div>
              <div className="relative aspect-video w-full rounded-2xl border border-primary/10 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <Image
                  src="/desktop.jpg"
                  alt="My development setup"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">My development setup</p>
            </motion.div>
          </motion.div>

          {/* Skills & Info */}
          <motion.div className="space-y-8 min-w-0" variants={itemVariants}>
            {/* Location & Role */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-border/50 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold text-foreground">
                  Based in Bengaluru, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-accent" />
                <span className="text-lg font-semibold text-foreground">
                  Software Engineer at Fubo
                </span>
              </div>
            </div>

            {/* Core Skills */}
            <div className="rounded-[28px] bg-[#fcfcf7] p-4 md:p-6 border border-slate-200 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)]">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                      <Code className="w-5 h-5 text-primary" />
                    </span>
                    Technical Expertise
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Core languages, frameworks, and backend systems I use in production work.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md min-w-0"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                      <Image
                        src={skill.iconPath}
                        alt={`${skill.name} icon`}
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <div className="font-semibold text-slate-900 text-xs truncate">
                        {skill.name}
                      </div>
                      <div className="text-[10px] font-medium uppercase tracking-wide text-slate-500 truncate">
                        {skill.category}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-4 border border-primary/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3">AI-Assisted Tooling</p>
              <div className="flex gap-3">
                {aiTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-1 items-center gap-3 rounded-xl border border-primary/15 bg-white/80 px-3 py-3"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/8 border border-primary/15">
                      <Image
                        src={tool.iconPath}
                        alt={`${tool.name} icon`}
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain"
                      />
                    </div>
                    <span className="font-semibold text-sm text-slate-800">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Interests &amp; Focus Areas
              </h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="text-primary">{interest.icon}</div>
                    <span className="text-sm">{interest.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Value Propositions */}
        <motion.div
          className="grid md:grid-cols-3 gap-4"
          variants={itemVariants}
        >
          {/* For Recruiters */}
          <div className="group relative bg-white rounded-2xl p-5 border border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30 rounded-t-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary flex-shrink-0" />
                </div>
                <h3 className="text-base font-bold text-foreground">For Recruiters</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 pl-10">Full-time Opportunities</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  5+ years as a full stack engineer at Fubo and Winuall
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Full stack across React, TypeScript, Node and cloud infra
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Shipped products used by millions, solo and in teams
                </li>
              </ul>
            </div>
          </div>

          {/* For Founders */}
          <div className="group relative bg-white rounded-2xl p-5 border border-accent/25 shadow-sm hover:shadow-lg hover:border-accent/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/30 rounded-t-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-accent flex-shrink-0" />
                </div>
                <h3 className="text-base font-bold text-foreground">For Founders & Ideas</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 pl-10">Freelance & Consulting</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  From rough idea to deployed product, fast
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  Full-stack execution without needing a team
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span>AI-assisted development for faster delivery and lower cost</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  Hourly, project-based, or retainer engagements
                </li>
              </ul>
            </div>
          </div>

          {/* For MSME Owners */}
          <div className="group relative bg-white rounded-2xl p-5 border border-emerald-500/25 shadow-sm hover:shadow-lg hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-500/30 rounded-t-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <div className="relative w-4 h-4 flex-shrink-0">
                    <Image src="/factostack.svg" alt="FactoStack" fill className="object-contain" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-foreground">For MSMEs</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 pl-10">Owners, Traders & Manufacturers</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span>Replace Excel & WhatsApp with <a href="https://factostack.com" target="_blank" className="text-emerald-600 underline font-medium hover:text-emerald-700">FactoStack</a></span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  WIP tracking, procurement, GST compliance in one platform
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  Purpose-built for Indian factories, not a generic ERP
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Achievement Highlights */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/8 rounded-2xl p-5 md:p-8 border border-primary/15 shadow-lg"
          variants={itemVariants}
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, hsl(220 70% 50%) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent/10 rounded-full blur-[50px] pointer-events-none" />

          <h3 className="text-2xl font-bold text-foreground mb-8 text-center relative z-10" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-4 relative z-10">
            <div className="text-center space-y-2 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-primary/15 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200">
              <div className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">6-Module</div>
              <div className="text-sm font-medium text-foreground">ERP Platform</div>
              <div className="text-xs text-muted-foreground">Built for Indian MSMEs</div>
            </div>
            <div className="text-center space-y-2 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 shadow-sm hover:shadow-md hover:border-accent/35 transition-all duration-200">
              <div className="text-4xl font-bold bg-gradient-to-br from-accent to-accent/60 bg-clip-text text-transparent">5000+</div>
              <div className="text-sm font-medium text-foreground">Learners Served</div>
              <div className="text-xs text-muted-foreground">Across EdTech platforms</div>
            </div>
            <div className="text-center space-y-2 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-primary/15 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200">
              <div className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">20+</div>
              <div className="text-sm font-medium text-foreground">Projects Shipped</div>
              <div className="text-xs text-muted-foreground">Client & personal work</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center space-y-6" variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-foreground">
            Have an idea? Let&apos;s build it.
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I like working on hard problems and talking to people who are building things. If you&apos;re a founder, a business owner, or just have something interesting going on, get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <a href="https://cal.com/sudharsangs/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center gap-2 h-11">
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </Button>
            </a>
            <a href="mailto:sudharsangs.99@gmail.com">
              <Button variant="outline" className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2 h-11 transition-all duration-200">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
