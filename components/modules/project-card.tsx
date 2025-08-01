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
  index: number
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  type,
  github,
  path,
  index
}: Props) {
  const typeIcons = {
    personal: User,
    independent: LoaderPinwheel,
    work: Briefcase
  };

  const TypeIcon = typeIcons[type];
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
      <Card className="h-full transition-all duration-500 overflow-hidden bg-white/95 backdrop-blur-sm border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 rounded-2xl group">
        <div className='relative overflow-hidden group h-56'>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.div 
            className="absolute inset-0 z-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            {image ? (
              <Image
                src={image}
                alt={`${title} project screenshot`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <h3 className="text-2xl font-bold">{title}</h3>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            className="absolute bottom-4 left-4 z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h3 className="font-bold text-xl lg:text-2xl text-white drop-shadow-2xl" style={{ fontFamily: fonts.PlayfairDisplay }}>
              {title}
            </h3>
          </motion.div>

          <motion.div 
            className="absolute top-4 right-4 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          >
            <Badge className="flex items-center gap-1" 
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
              <TypeIcon className="w-3 h-3" />
              <span className="capitalize">{type}</span>
            </Badge>
          </motion.div>
        </div>

        <CardContent className="px-4 py-6">
          <motion.p
            className="text-sm lg:text-base text-muted-foreground mb-5 line-clamp-3 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2.5 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            {technologies.slice(0, 3).map((tech, i) => {
              // Elegant tech colors matching the new color scheme
              const techColors = [
                "bg-primary/10 border-primary/30 text-primary hover:bg-primary/15 hover:border-primary/40",
                "bg-accent/10 border-accent/30 text-accent hover:bg-accent/15 hover:border-accent/40",
                "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
              ];
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className={`inline-flex items-center ${techColors[i % techColors.length]} backdrop-blur-sm rounded-full px-3 py-1.5 text-xs lg:text-sm border shadow-sm transition-all duration-300`}
                >
                  <Image src={tech.icon} alt={tech.name} width={14} height={14} className="mr-1.5" />
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs lg:text-sm bg-muted/60 text-muted-foreground border-border hover:bg-muted shadow-sm px-3 py-1.5">
                +{technologies.length - 3} more
              </Badge>
            )}
          </motion.div>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          >
            <Link href={path} className="flex-1">
              <Button variant="outline" className="w-full bg-white/80 border-2 border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-3 text-sm lg:text-base">
                <span>View Details</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
            {github && (
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-border bg-white/70 hover:bg-white text-muted-foreground hover:text-foreground hover:border-primary/40 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl px-4">
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
