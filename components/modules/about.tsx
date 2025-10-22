"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Code,
  TabletSmartphone,
  Coffee,
  MapPin,
  Briefcase,
  Cloud,
  Zap,
  Brain,
  Monitor,
  Users,
  Trophy,
  Target,
  Rocket,
  ServerCog,
} from "lucide-react";
import { fonts } from "@/lib/constants";

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
      iconPath: "/skills/svelte.png",
      name: "Svelte",
      category: "Frontend",
    },
    { iconPath: "/skills/nodejs.svg", name: "NodeJS", category: "Backend" },
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

  const interests = [
    {
      icon: <Code className="w-5 h-5" />,
      text: "Building innovative web experiences",
    },
    {
      icon: <TabletSmartphone className="w-5 h-5" />,
      text: "Cross-platform mobile apps",
    },
    {
      icon: <ServerCog className="w-5 h-5" />,
      text: "Building scalable backend systems",
    },
    { icon: <Coffee className="w-5 h-5" />, text: "Exploring new tech stacks" },
  ];

  return (
    <section className="py-20 px-4 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        className="space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center space-y-4" variants={itemVariants}>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            style={{ fontFamily: fonts.PlayfairDisplay }}
          >
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Hi there! I&apos;m{" "}
                <span className="text-primary font-semibold">Sudharsan GS</span>
                , a passionate software engineer with over 5 years of experience
                building web and mobile applications.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Currently, I&apos;m a{" "}
                <span className="text-primary font-semibold">
                  Software Engineer at Fubo
                </span>
                , where I work on on improving technical SEO for the{" "}
                <a
                  href="https://molotov.tv"
                  target="_blank"
                  className="text-accent underline"
                >
                  molotov.tv
                </a>{" "}
                site.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I use to work at the VideoAI team at Fubo, where I specialized
                in building AI-driven features for sports content, creating
                real-time highlight systems, and optimizing video playback
                performance.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                My journey began in the EdTech space at Winuall, where I led
                frontend development for multiple projects serving thousands of
                tutors and learners. This experience taught me the importance of
                user-centered design and scalable architecture.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m driven by the challenge of solving complex problems and
                creating seamless user experiences.
              </p>
            </div>
            <motion.div>
              <div className="relative aspect-video w-full rounded-2xl border border-primary/10 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <Image
                  src="/desktop.jpg"
                  alt="desktop"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Skills & Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Location & Role */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
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
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technical Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-3 rounded-lg text-sm font-medium border border-primary/20 flex items-center gap-3 hover:shadow-md transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-primary/80 flex-shrink-0">
                      <Image
                        src={skill.iconPath}
                        alt={`${skill.name} icon`}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{skill.name}</div>
                      <div className="text-xs text-primary/70 font-normal">
                        {skill.category}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                What I Love
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
          className="grid md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          {/* For Recruiters */}
          <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  For Recruiters
                </h3>
                <p className="text-sm text-muted-foreground">
                  Full-time Opportunities
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  5+ years of proven experience in scalable web applications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Strong track record at growing companies (Fubo, Winuall)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Expert in modern frameworks and best practices
                </span>
              </li>
            </ul>
          </div>

          {/* For Founders */}
          <div className="bg-gradient-to-br from-accent/5 via-accent/3 to-transparent rounded-2xl p-8 border border-accent/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  For Founders
                </h3>
                <p className="text-sm text-muted-foreground">
                  Freelance & Consulting
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Rapid MVP development and technical validation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Full-stack solutions from concept to deployment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Monitor className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Flexible engagement: hourly, project-based, or retainer
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Achievement Highlights */}
        <motion.div
          className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 border border-primary/10"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Users Served</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center space-y-6" variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-foreground">
            Let&apos;s Build Something Amazing Together
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always excited to work on new challenges and collaborate
            with passionate teams. Feel free to reach out if you&apos;d like to
            discuss opportunities or just chat about tech!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
