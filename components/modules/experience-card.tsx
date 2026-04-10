"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Experience } from "@/types/experience";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { fonts } from "@/lib/constants";
import ExperienceProjectCard from "./experience-project-card";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden border border-border/50 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 rounded-2xl group">
        <CardContent className="p-4 sm:p-6 lg:p-10">
          <div className="flex items-start gap-4 min-w-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
              className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-border/30 bg-white shadow-lg hover:border-primary/50 transition-all duration-300 hover:shadow-xl group-hover:scale-105 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={experience.companyLogo}
                alt={`${experience.company} logo`}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div className="min-w-0 flex-1">
                  <motion.h3
                    className="text-lg sm:text-2xl font-bold text-foreground mb-1 leading-tight"
                    style={{ fontFamily: fonts.PlayfairDisplay }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  >
                    {experience.title}
                  </motion.h3>
                  <motion.a
                    target="_blank"
                    href={experience.companyUrl}
                    className="font-semibold text-primary flex items-center gap-1.5 hover:text-primary/80 transition-colors text-base sm:text-lg"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    whileHover={{ x: 2 }}
                  >
                    {experience.company}
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  </motion.a>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="flex-shrink-0"
                >
                  <Badge
                    variant={
                      experience.type === "Full Time" ? "default" : "secondary"
                    }
                    className="bg-primary hover:bg-primary/90 text-white border-none shadow-sm text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 whitespace-nowrap"
                  >
                    {experience.type}
                  </Badge>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-start gap-3 sm:gap-6 mt-4 text-sm">
            <motion.div
              className="flex items-center gap-1 text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
              <MapPin size={16} className="text-primary" />
              <span>{experience.location}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-1 text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
            >
              <CalendarDays size={16} className="text-primary" />
              <span>
                {experience.period.start} - {experience.period.end}
              </span>
            </motion.div>
          </div>

          {/* Description section - added at the top */}
          {experience.description &&
            (experience.id === "fubo" ? (
              <motion.div
                className="mt-4 space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <a
                    href="https://molotov.tv/"
                    target="_blank"
                    className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-black/10 block"
                  >
                    <Image
                      src="/molotov.png"
                      alt="Molotov TV Logo"
                      fill
                      className="object-contain p-1.5"
                    />
                  </a>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Currently on the{" "}
                    <a href="https://www.molotov.tv/" target="_blank" className="text-primary hover:text-primary/80 underline font-medium">
                      Molotov
                    </a>{" "}
                    team, improving technical SEO and building features for live sports streaming.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed border-l-4 border-accent/40 pl-4 bg-accent/5 py-3 rounded-r-lg">
                  Previously on the VideoAI team, building AI-driven real-time highlight systems and video playback features.
                </p>
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                className="mt-4 text-sm text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-4 bg-primary/5 py-3 rounded-r-lg"
              >
                {experience.description}
              </motion.p>
            ))}

          <motion.ul className="mt-6 space-y-2">
            {experience.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + i * 0.1 + 0.5,
                }}
                className="text-sm text-muted-foreground flex gap-3 items-start p-2 rounded-lg transition-colors duration-200"
              >
                <span className="text-primary text-base font-bold flex-shrink-0 mt-0.5">•</span>
                <span className="leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex flex-wrap gap-3 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
          >
            {experience.technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ delay: index * 0.1 + i * 0.05 + 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="text-xs bg-white/80 hover:bg-primary/5 text-muted-foreground hover:text-primary backdrop-blur-sm border-border/50 hover:border-primary/30 shadow-sm px-3 py-1 transition-all duration-200"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Section */}
          {experience.projects && experience.projects.length > 0 && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-base font-semibold text-foreground uppercase tracking-wide text-muted-foreground">
                  Related Projects
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {experience.projects.map((project, i) => {
                  const projectTech = experience.technologies.slice(0, 3);
                  const isWorkProject = experience.type === "Full Time" || experience.type === "Internship";

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.1 + 0.8,
                      }}
                    >
                      <ExperienceProjectCard
                        title={project
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                        description={
                          experience.projectDescriptions?.[project] ||
                          "Project developed during my time at " +
                            experience.company
                        }
                        techStack={projectTech}
                        link={isWorkProject ? `/projects/work/${project.toLowerCase()}` : undefined}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
