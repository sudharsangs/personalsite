import React, { useRef } from 'react';
import { ArrowRight, ArrowUpRight, Github, Briefcase, User, Handshake, Globe2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from '@/types/projects';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'motion/react';
import { fonts } from '@/lib/constants';

interface Props extends Project {
  index: number;
  reverse?: boolean;
}

export default function ProjectCardHorizontal({
  title,
  description,
  image,
  technologies,
  type,
  github,
  path,
  liveUrl,
  company,
  index,
  reverse = false
}: Props) {
  const typeIcons = {
    personal: User,
    independent: Handshake,
    work: Briefcase
  };

  const TypeIcon = typeIcons[type];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isExternal = typeof path === 'string' && /^https?:\/\//.test(path);
  const isLiveExternal = typeof liveUrl === 'string' && /^https?:\/\//.test(liveUrl);
  const ProjectActionIcon = isExternal ? ArrowUpRight : ArrowRight;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="w-full"
    >
      <Card className="overflow-hidden bg-card/95 backdrop-blur-sm border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 rounded-3xl transition-all duration-500 group">
        <CardContent className="p-0 h-full">
          <div className={`grid lg:grid-cols-2 gap-0 items-stretch min-h-[400px] h-full ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>

            {/* Content Section */}
            <div className={`p-4 lg:p-8 flex flex-col justify-center space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}>

              {/* Type Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                className="flex justify-start"
              >
                <Badge
                  className={`flex items-center gap-2 w-fit border ${
                    type === "independent"
                      ? "bg-violet-500/10 text-violet-400 border-violet-500/30"
                      : "bg-primary/10 text-primary border-primary/30"
                  }`}
                >
                  <TypeIcon className="w-4 h-4" />
                  <span className="capitalize font-medium">
                    {type === "independent" ? "freelance" : type}
                  </span>
                </Badge>
              </motion.div>

              {/* Company Logo */}
              {company && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.15 }}
                  className="flex items-center gap-2"
                >
                  <Image src={company.logo} alt={company.name} width={28} height={28} className="rounded-md" />
                  <span className="text-sm text-muted-foreground font-medium">{company.name}</span>
                </motion.div>
              )}

              {/* Title */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-foreground leading-tight"
                style={{ fontFamily: fonts.PlayfairDisplay }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              >
                {title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-lg text-foreground/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                {description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              >
                {technologies.slice(0, 4).map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="inline-flex items-center bg-secondary text-secondary-foreground border border-border backdrop-blur-sm rounded-full px-4 py-2 text-sm shadow-sm transition-all duration-300 hover:bg-secondary/80"
                  >
                    <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
                {technologies.length > 4 && (
                  <Badge variant="outline" className="text-sm bg-muted/60 text-muted-foreground border-border hover:bg-muted shadow-sm px-4 py-2">
                    +{technologies.length - 4} more
                  </Badge>
                )}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="grid grid-cols-2 gap-3 pt-4 sm:flex sm:flex-row sm:flex-wrap sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
              >
                {path && <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='w-full sm:w-auto'>
                  <Link href={path} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                    <Button className="w-full justify-center h-10 px-4 rounded-lg font-semibold shadow-sm transition-all duration-200 group bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/40">
                      <span>View Project</span>
                      <ProjectActionIcon className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </motion.div>}

                {liveUrl && (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='w-full sm:w-auto'>
                    <Link href={liveUrl} target={isLiveExternal ? "_blank" : undefined} rel={isLiveExternal ? "noopener noreferrer" : undefined}>
                      <Button className="w-full justify-center h-10 px-4 rounded-lg font-semibold shadow-sm transition-all duration-200 group bg-accent/12 text-accent hover:bg-accent/18 border border-accent/30">
                        <Globe2 className="w-4 h-4 mr-1" />
                        <span>Visit Site</span>
                        <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Button>
                    </Link>
                  </motion.div>
                )}

                {github && (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='w-full sm:w-auto'>
                    <Link href={github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-center h-10 px-4 rounded-lg font-semibold shadow-sm transition-all duration-200 bg-card/70 text-muted-foreground hover:bg-secondary/70 hover:text-foreground border border-border/70 hover:border-primary/35">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Image Section */}
            <div className={`relative flex items-center justify-center p-4 lg:p-12  ${reverse ? 'lg:col-start-1' : ''}`}>
              <motion.div
                className="relative w-full max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="bg-card rounded-2xl shadow-2xl shadow-primary/10 border border-border/50 overflow-hidden group-hover:shadow-3xl group-hover:shadow-primary/20 transition-all duration-500">
                  {image ? (
                    <div className="relative w-full aspect-[4/3] bg-muted">
                      <Image
                        src={image}
                        alt={`${title} project screenshot`}
                        fill
                        className="object-contain object-center p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/40 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, hsl(220 70% 50%) 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-card/80 border border-primary/20 shadow-lg flex items-center justify-center">
                          <TypeIcon className="w-8 h-8 text-primary" />
                        </div>
                        <span className="text-primary/60 text-xs font-medium uppercase tracking-widest">Project</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative elements around the card */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/20 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
