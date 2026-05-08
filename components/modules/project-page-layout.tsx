import React from "react";
import {
  ArrowLeft,
  Calendar,
  Briefcase,
  User,
  Handshake,
  Github,
  ArrowUpRight,
  Globe2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { fonts } from "@/lib/constants";
import { ImageDetail } from "@/types/projects";

interface ProjectPageLayoutProps {
  title: string;
  description: string;
  type: "personal" | "independent" | "work";
  date?: string;
  company?: {
    name: string;
    url: string;
    logo: string;
  };
  client?: string;
  githubUrl?: string;
  liveUrl?: string;
  children: React.ReactNode;
}

const ProjectPageLayout: React.FC<ProjectPageLayoutProps> = ({
  title,
  description,
  type,
  date,
  company,
  client,
  githubUrl,
  liveUrl,
  children,
}) => {
  const typeConfig = {
    personal: {
      icon: User,
      label: "Personal",
      badgeBg: "bg-primary/10",
      badgeText: "text-primary",
      badgeBorder: "border-primary/20",
      accentBar: "from-primary to-primary/40",
    },
    independent: {
      icon: Handshake,
      label: "Freelance",
      badgeBg: "bg-violet-500/10",
      badgeText: "text-violet-400",
      badgeBorder: "border-violet-500/30",
      accentBar: "from-violet-500 to-violet-300",
    },
    work: {
      icon: Briefcase,
      label: "Work",
      badgeBg: "bg-primary/10",
      badgeText: "text-primary",
      badgeBorder: "border-primary/20",
      accentBar: "from-primary to-accent/60",
    },
  };

  const {
    icon: TypeIcon,
    label,
    badgeBg,
    badgeText,
    badgeBorder,
    accentBar,
  } = typeConfig[type];

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-border/45 bg-gradient-to-br from-primary/4 via-background to-accent/5">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-[8%] w-[520px] h-[520px] rounded-full bg-primary/8 blur-[100px]" />
          <div className="absolute -bottom-28 left-[8%] w-96 h-96 rounded-full bg-accent/8 blur-[90px]" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-primary/5 blur-[90px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.028]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(220 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 70% 50%) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Back Nav */}
          <div className="mb-10">
            <Link href="/projects">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/80 -ml-2 gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                All Projects
              </Button>
            </Link>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`inline-flex items-center gap-1.5 ${badgeBg} ${badgeText} border ${badgeBorder} px-3 py-1 rounded-full text-xs font-semibold`}
            >
              <TypeIcon className="w-3 h-3" />
              {label}
            </span>

            {date && (
              <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm bg-secondary/60 border border-border/60 px-3 py-1 rounded-full">
                <Calendar className="h-3.5 w-3.5" />
                {date}
              </span>
            )}

            {client && (
              <span className="inline-flex items-center text-muted-foreground text-sm bg-secondary/60 border border-border/60 px-3 py-1 rounded-full">
                Client: {client}
              </span>
            )}

            {company && (
              <Link
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary/60 border border-border/60 px-3 py-1 rounded-full hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                <span className="text-sm text-foreground/80">
                  {company.name}
                </span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </Link>
            )}
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: fonts.PlayfairDisplay }}
          >
            <span
              className={`bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent`}
            >
              {title}
            </span>
          </h1>

          {/* Accent bar */}
          <div
            className={`h-1.5 w-32 rounded-full bg-gradient-to-r ${accentBar} mb-6 shadow-sm`}
          />

          {/* Description */}
          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed border-l-4 border-primary/30 pl-5 py-1">
            {description}
          </p>

          {/* Action Buttons */}
          {(githubUrl || liveUrl) && (
            <div className="flex flex-wrap gap-3 mt-8">
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="bg-card/70 border border-border/70 text-foreground hover:bg-secondary/70 hover:border-primary/35 hover:text-foreground rounded-lg px-4 h-10 font-semibold text-sm shadow-sm transition-all duration-200 gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
              )}
              {liveUrl && (
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 h-10 font-semibold text-sm shadow-sm transition-all duration-200 gap-2 border border-primary/40">
                    <Globe2 className="h-4 w-4" />
                    Use Product
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Subtle content bg accents */}
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-primary/5 blur-[60px] pointer-events-none" />
        {children}

        {/* Bottom nav */}
        <div className="flex justify-center pt-8 mt-8 border-t border-border/40">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── Shared helper components ────────────────────────────────────────────────

export const ProjectSection: React.FC<{
  title: string;
  icon: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  iconBorder?: string;
  className?: string;
  children: React.ReactNode;
}> = ({
  title,
  icon,
  iconBg = "bg-primary/10",
  iconColor = "text-primary",
  iconBorder = "border-primary/20",
  className = "mb-16",
  children,
}) => (
  <div className={className}>
    <div className="flex items-center gap-3 mb-8">
      <div
        className={`${iconBg} p-2.5 rounded-xl border ${iconBorder} shadow-sm`}
      >
        <div className={iconColor}>{icon}</div>
      </div>
      <div>
        <h2
          className="text-2xl font-bold text-foreground"
          style={{ fontFamily: fonts.PlayfairDisplay }}
        >
          {title}
        </h2>
        <div className="h-0.5 w-full bg-gradient-to-r from-primary/40 to-transparent rounded-full mt-1" />
      </div>
    </div>
    {children}
  </div>
);

export const FeatureList: React.FC<{
  items: string[];
  iconBg?: string;
  iconColor?: string;
}> = ({
  items,
  iconBg = "bg-primary",
  iconColor = "text-primary-foreground",
}) => (
  <ul className="grid sm:grid-cols-2 gap-3">
    {items.map((item, index) => (
      <li
        key={index}
        className="flex items-start gap-3 group bg-card/60 hover:bg-card/90 border border-border/50 hover:border-primary/25 rounded-xl px-4 py-3 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <span
          className={`flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full ${iconBg} ${iconColor} mt-0.5 shadow-sm`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span className="text-foreground/80 leading-relaxed text-sm">
          {item}
        </span>
      </li>
    ))}
  </ul>
);

export const InfoCard: React.FC<{
  title: string;
  children: React.ReactNode;
  variant?: "default" | "accent" | "destructive" | "success";
}> = ({ title, children, variant = "default" }) => {
  const variantStyles = {
    default: "bg-primary/5 border-primary/15 [&_h3]:text-primary",
    accent: "bg-accent/8 border-accent/20 [&_h3]:text-accent",
    destructive:
      "bg-destructive/5 border-destructive/15 [&_h3]:text-destructive",
    success: "bg-primary/5 border-primary/20 [&_h3]:text-primary",
  };
  return (
    <div className={`rounded-2xl border p-6 ${variantStyles[variant]}`}>
      <h3 className="text-base font-semibold mb-3">{title}</h3>
      <div className="text-muted-foreground text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export const StatCard: React.FC<{
  number: string;
  label: string;
  description?: string;
}> = ({ number, label, description }) => (
  <div className="bg-card rounded-2xl border border-border/60 shadow-md hover:shadow-lg hover:border-primary/30 p-6 text-center transition-all duration-200 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent mb-1">
        {number}
      </div>
      <div className="text-sm font-semibold text-foreground mb-1">{label}</div>
      {description && (
        <div className="text-xs text-muted-foreground">{description}</div>
      )}
    </div>
  </div>
);

export const OutcomeList: React.FC<{
  items: string[];
}> = ({ items }) => (
  <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 rounded-2xl p-6">
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">{index + 1}</span>
          </div>
          <p className="text-foreground/80 leading-relaxed pt-1">{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

export const ProjectImageGallery: React.FC<{
  images: ImageDetail[];
  columns?: number;
}> = ({ images, columns = 1 }) => {
  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <div className={`grid ${gridCols} gap-5 mb-16`}>
      {images.map((image, index) => (
        <div key={index} className="group">
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src={image.url}
              alt={image.alt}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
          {image.caption && (
            <p className="text-muted-foreground text-xs mt-2.5 text-center">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectPageLayout;
