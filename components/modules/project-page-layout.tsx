import React from 'react';
import { ArrowLeft, Calendar, Briefcase, User, LoaderPinwheel } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fonts } from '@/lib/constants';
import { ImageDetail } from '@/types/projects';

interface ProjectPageLayoutProps {
  title: string;
  description: string;
  type: 'personal' | 'independent' | 'work';
  date?: string;
  company?: {
    name: string;
    url: string;
    logo: string;
  };
  client?: string;
  children: React.ReactNode;
}

const ProjectPageLayout: React.FC<ProjectPageLayoutProps> = ({
  title,
  description,
  type,
  date,
  company,
  client,
  children
}) => {
  // Configure type-specific colors and icons
  const typeConfig = {
    personal: {
      icon: User,
      badgeBg: "bg-primary/10",
      badgeText: "text-primary",
      badgeBorder: "border",
      headingGradient: "from-primary to-secondary"
    },
    independent: {
      icon: LoaderPinwheel,
      badgeBg: "bg-secondary/10",
      badgeText: "text-secondary",
      badgeBorder: "border",
      headingGradient: "from-secondary to-primary"
    },
    work: {
      icon: Briefcase,
      badgeBg: "bg-accent/10",
      badgeText: "text-accent",
      badgeBorder: "border",
      headingGradient: "from-accent to-secondary"
    }
  };

  const { icon: TypeIcon, badgeBg, badgeText, badgeBorder } = typeConfig[type];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-4 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge 
              className={`${badgeBg} ${badgeText} ${badgeBorder} px-3 py-1 text-xs flex items-center gap-1`}
            >
              <TypeIcon className="w-3 h-3" />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>

            {date && (
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {date}
              </div>
            )}

            {client && (
              <Badge 
                variant="outline" 
                className="text-muted-foreground border-border px-3 py-1"
              >
                Client: {client}
              </Badge>
            )}
            
            {company && (
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">Company:</span>
                <Link href={company.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 ${badgeText} hover:opacity-80`}>
                  <Image 
                    src={company.logo} 
                    alt={company.name} 
                    width={20} 
                    height={20} 
                    className="rounded-full"
                  />
                  <span>{company.name}</span>
                </Link>
              </div>
            )}
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground" 
            style={{ fontFamily: fonts.PlayfairDisplay }}
          >
            {title}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            {description}
          </p>
        </div>

        {/* Project Content */}
        {children}

        {/* Navigate Back */}
        <div className="text-center pb-8 mt-16">
          <Link href="/projects">
            <Button variant="outline" className="border-border hover:bg-gray-100 hover:text-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Helper components for project pages

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
  iconBg = "bg-secondary/10", 
  iconColor = "text-secondary", 
  iconBorder = "border",
  className = "mb-12", 
  children 
}) => (
  <div className={className}>
    <div className="flex items-center gap-3 mb-6">
      <div className={`${iconBg} p-2 rounded-lg border ${iconBorder} backdrop-blur-sm`}>
        <div className={iconColor}>
          {icon}
        </div>
      </div>
      <h2 className="text-2xl font-bold" style={{ fontFamily: fonts.PlayfairDisplay }}>
        {title}
      </h2>
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
  iconBg = "bg-secondary/10", 
  iconColor = "text-secondary" 
}) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <span className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${iconBg} ${iconColor} mr-3 mt-0.5`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </span>
        <span className="text-muted-foreground">{item}</span>
      </li>
    ))}
  </ul>
);

export const ProjectImageGallery: React.FC<{
  images: ImageDetail[];
  columns?: number;
}> = ({ 
  images, 
  columns = 1 
}) => {
  const gridCols = columns === 1 
    ? "grid-cols-1" 
    : columns === 2 
      ? "grid-cols-1 md:grid-cols-2" 
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  
  return (
    <div className={`grid ${gridCols} gap-6 mb-16`}>
      {images.map((image, index) => (
        <div key={index} className="relative">
          <div className="rounded-lg overflow-hidden border border-border/50 shadow-xl">
            <Image
              src={image.url}
              alt={image.alt}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
          {image.caption && (
            <p className="text-muted-foreground text-sm mt-2 text-center">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectPageLayout;
