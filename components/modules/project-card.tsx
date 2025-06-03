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
      <Card className="h-full transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20">
        <div className='relative overflow-hidden group h-48'>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70 z-10"
            whileHover={{ opacity: 0.4 }}
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
            <h3 className="font-bold text-xl text-white drop-shadow-md" style={{ fontFamily: fonts.SpaceGrotesk }}>
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
                backgroundColor: type === "personal" ? "rgba(16, 185, 129, 0.2)" : 
                               type === "independent" ? "rgba(245, 158, 11, 0.2)" : 
                               "rgba(14, 165, 233, 0.2)",
                color: type === "personal" ? "#10b981" : 
                      type === "independent" ? "#f59e0b" : 
                      "#0ea5e9",
                borderColor: type === "personal" ? "rgba(16, 185, 129, 0.3)" : 
                            type === "independent" ? "rgba(245, 158, 11, 0.3)" : 
                            "rgba(14, 165, 233, 0.3)",
                backdropFilter: "blur(4px)"
              }}
            >
              <TypeIcon className="w-3 h-3" />
              <span className="capitalize">{type}</span>
            </Badge>
          </motion.div>
        </div>

        <CardContent className="px-6 py-5">
          <motion.p
            className="text-sm text-muted-foreground mb-4 line-clamp-3"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            {technologies.slice(0, 3).map((tech, i) => {
              // Assign different colors based on index for variety
              const techColors = [
                "bg-amber-500/20 border-amber-500/30 text-amber-400",
                "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
                "bg-orange-500/20 border-orange-500/30 text-orange-400"
              ];
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className={`inline-flex items-center ${techColors[i % techColors.length]} backdrop-blur-sm rounded-full px-3 py-1 text-xs border`}
                >
                  <Image src={tech.icon} alt={tech.name} width={12} height={12} className="mr-1" />
                  <span>{tech.name}</span>
                </motion.div>
              );
            })}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs bg-indigo-500/20 text-indigo-400 border-indigo-500/30 backdrop-blur-sm">
                +{technologies.length - 3} more
              </Badge>
            )}
          </motion.div>

          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          >
            <Link href={path} className="flex-1">
              <Button variant="default" className="w-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center gap-1">
                <span>View Details</span>
                <ExternalLink className="w-3 h-3" />
              </Button>
            </Link>
            {github && (
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-indigo-700/50 bg-indigo-900/20 hover:bg-indigo-800/30 text-indigo-300 hover:text-white">
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
