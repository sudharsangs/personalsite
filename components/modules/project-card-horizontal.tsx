import React, { useRef } from 'react';
import { Github, Briefcase, User, LoaderPinwheel, ExternalLink } from 'lucide-react';
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
  index,
  reverse = false
}: Props) {
  const typeIcons = {
    personal: User,
    independent: LoaderPinwheel,
    work: Briefcase
  };

  const TypeIcon = typeIcons[type];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isExternal = typeof path === 'string' && /^https?:\/\//.test(path);
  const isLiveExternal = typeof liveUrl === 'string' && /^https?:\/\//.test(liveUrl);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="w-full"
    >
      <Card className="overflow-hidden bg-white/95 backdrop-blur-sm border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 rounded-3xl transition-all duration-500 group">
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
                <Badge className="flex items-center gap-2 w-fit"
                  variant={type === "personal" ? "default" : type === "independent" ? "destructive" : "secondary"}
                  style={{
                    backgroundColor: type === "personal" ? "hsl(var(--primary) / 0.15)" :
                      type === "independent" ? "hsl(var(--accent) / 0.15)" :
                        "hsl(180 40% 60% / 0.15)",
                    color: type === "personal" ? "hsl(var(--primary))" :
                      type === "independent" ? "hsl(var(--accent))" :
                        "hsl(180 40% 40%)",
                    borderColor: type === "personal" ? "hsl(var(--primary) / 0.3)" :
                      type === "independent" ? "hsl(var(--accent) / 0.3)" :
                        "hsl(180 40% 60% / 0.3)",
                    backdropFilter: "blur(4px)"
                  }}
                >
                  <TypeIcon className="w-4 h-4" />
                  <span className="capitalize font-medium">{type}</span>
                </Badge>
              </motion.div>

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
                {technologies.slice(0, 4).map((tech, i) => {
                  const techColors = [
                    "bg-primary/10 border-primary/30 text-primary hover:bg-primary/15 hover:border-primary/40",
                    "bg-accent/10 border-accent/30 text-accent hover:bg-accent/15 hover:border-accent/40",
                    "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300",
                    "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300"
                  ];
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className={`inline-flex items-center ${techColors[i % techColors.length]} backdrop-blur-sm rounded-full px-4 py-2 text-sm border shadow-sm transition-all duration-300`}
                    >
                      <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
                      <span className="font-medium">{tech.name}</span>
                    </motion.div>
                  );
                })}
                {technologies.length > 4 && (
                  <Badge variant="outline" className="text-sm bg-muted/60 text-muted-foreground border-border hover:bg-muted shadow-sm px-4 py-2">
                    +{technologies.length - 4} more
                  </Badge>
                )}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
              >
                {path && <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link href={path} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                    <Button className="h-11 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 group bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/60">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </motion.div>}

                {liveUrl && (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href={liveUrl} target={isLiveExternal ? "_blank" : undefined} rel={isLiveExternal ? "noopener noreferrer" : undefined}>
                      <Button className="h-11 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 group bg-accent text-accent-foreground hover:bg-accent/90 border border-accent/60">
                        <span>Visit Site</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </motion.div>
                )}

                {github && (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href={github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="h-11 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 text-foreground hover:bg-white hover:text-foreground border border-border hover:border-primary/40">
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
                <div className="bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-border/50 overflow-hidden group-hover:shadow-3xl group-hover:shadow-primary/20 transition-all duration-500">
                  {image ? (
                    <div className="relative w-full aspect-[4/3] bg-slate-50">
                      <Image
                        src={image}
                        alt={`${title} project screenshot`}
                        fill
                        className="object-contain object-center p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
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
