import React, { useRef } from 'react';
import { Github, Briefcase, User, LoaderPinwheel, ExternalLink, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from '@/types/projects';
import { motion, useInView } from 'motion/react';
import { fonts } from '@/lib/constants';

interface Props extends Project {
  index: number
}

const typeConfig = {
  personal: {
    Icon: User,
    label: 'Personal',
    stripe: 'from-primary to-primary/50',
    badge: { bg: 'hsl(220 70% 92% / 0.95)', text: 'hsl(220 70% 28%)', border: 'hsl(220 70% 75%)' },
  },
  independent: {
    Icon: LoaderPinwheel,
    label: 'Independent',
    stripe: 'from-violet-500 to-violet-300',
    badge: { bg: 'hsl(270 60% 92% / 0.95)', text: 'hsl(270 55% 35%)', border: 'hsl(270 55% 70%)' },
  },
  work: {
    Icon: Briefcase,
    label: 'Work',
    stripe: 'from-primary via-accent/60 to-primary/30',
    badge: { bg: 'hsl(220 70% 92% / 0.95)', text: 'hsl(220 70% 28%)', border: 'hsl(220 70% 75%)' },
  },
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  type,
  github,
  path,
  liveUrl,
  company,
  date,
  index,
}: Props) {
  const { Icon: TypeIcon, label, stripe, badge } = typeConfig[type];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const isExternal = typeof path === 'string' && /^https?:\/\//.test(path);
  const isLiveExternal = typeof liveUrl === 'string' && /^https?:\/\//.test(liveUrl);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <div className="h-full flex flex-col bg-white/95 backdrop-blur-sm border border-border/70 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 rounded-2xl overflow-hidden transition-all duration-400 group">

        {/* Colored top stripe */}
        <div className={`h-1 w-full bg-gradient-to-r ${stripe} flex-shrink-0`} />

        {/* Image / Placeholder */}
        <div className="relative overflow-hidden h-48 flex-shrink-0 bg-slate-50">
          {image ? (
            <>
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image}
                  alt={`${title} screenshot`}
                  fill
                  className="object-cover"
                />
              </motion.div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent z-10" />
              {/* Title on image */}
              <div className="absolute bottom-3 left-4 z-20">
                <h3 className="font-bold text-lg text-white drop-shadow-lg leading-tight" style={{ fontFamily: fonts.PlayfairDisplay }}>
                  {title}
                </h3>
                {company && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <Image src={company.logo} alt={company.name} width={14} height={14} className="rounded-sm opacity-90" />
                    <span className="text-white/75 text-xs font-medium">{company.name}</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/12 via-primary/6 to-accent/8 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, hsl(220 70% 50%) 1.5px, transparent 1.5px)', backgroundSize: '22px 22px' }} />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white/80 border border-primary/20 shadow-md flex items-center justify-center">
                  <TypeIcon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-primary/50 text-xs font-semibold uppercase tracking-widest">{label}</span>
              </div>
            </div>
          )}

          {/* Type badge — top-right */}
          <div className="absolute top-3 right-3 z-20">
            <Badge
              className="flex items-center gap-1 font-semibold text-xs px-2.5 py-1 border shadow-sm"
              style={{
                backgroundColor: badge.bg,
                color: badge.text,
                borderColor: badge.border,
                backdropFilter: 'blur(8px)',
              }}
            >
              <TypeIcon className="w-3 h-3" />
              <span className="capitalize">{label}</span>
            </Badge>
          </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 px-5 py-5">
          {/* Title (only when no image) */}
          {!image && (
            <h3 className="font-bold text-xl text-foreground leading-tight mb-2" style={{ fontFamily: fonts.PlayfairDisplay }}>
              {title}
            </h3>
          )}

          {/* Date + company (no image path) */}
          {!image && (company || date) && (
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {company && (
                <div className="flex items-center gap-1.5">
                  <Image src={company.logo} alt={company.name} width={14} height={14} className="rounded-sm" />
                  <span className="text-xs text-muted-foreground font-medium">{company.name}</span>
                </div>
              )}
              {date && <span className="text-xs text-muted-foreground/60">{date}</span>}
            </div>
          )}

          {image && date && (
            <span className="text-xs text-muted-foreground/60 mb-2 block">{date}</span>
          )}

          <p className="text-sm text-foreground/70 line-clamp-3 leading-relaxed mb-4 flex-1">
            {description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.slice(0, 3).map((tech, i) => (
              <div
                key={i}
                className="inline-flex items-center bg-secondary/80 border border-border/60 rounded-full px-2.5 py-1 text-xs font-medium text-foreground/70 hover:bg-secondary transition-colors duration-150"
              >
                <Image src={tech.icon} alt={tech.name} width={12} height={12} className="mr-1.5 flex-shrink-0" />
                {tech.name}
              </div>
            ))}
            {technologies.length > 3 && (
              <div className="inline-flex items-center bg-muted/60 border border-border/40 rounded-full px-2.5 py-1 text-xs text-muted-foreground">
                +{technologies.length - 3}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            {path && (
              <Link href={path} className="flex-1" target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                <Button className="w-full h-10 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-1.5 font-semibold text-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                  View Project
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </Link>
            )}
            {liveUrl && (
              <Link href={liveUrl} target={isLiveExternal ? "_blank" : undefined} rel={isLiveExternal ? "noopener noreferrer" : undefined}>
                <Button className="h-10 w-10 p-0 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md transition-all duration-200" aria-label="Visit Site">
                  <Eye className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {github && (
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-10 w-10 p-0 border border-border/70 bg-white/80 hover:bg-white hover:border-primary/40 rounded-xl shadow-sm hover:shadow-md transition-all duration-200" aria-label="View Code">
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
