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
      badgeBg: "bg-emerald-900/20",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-800/30",
      headingGradient: "from-emerald-400 to-teal-600"
    },
    independent: {
      icon: LoaderPinwheel,
      badgeBg: "bg-amber-900/20",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-800/30",
      headingGradient: "from-amber-400 to-orange-600"
    },
    work: {
      icon: Briefcase,
      badgeBg: "bg-blue-900/20",
      badgeText: "text-blue-400",
      badgeBorder: "border-blue-800/30",
      headingGradient: "from-blue-400 to-cyan-600"
    }
  };

  const { icon: TypeIcon, badgeBg, badgeText, badgeBorder, headingGradient } = typeConfig[type];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-emerald-400 transition-colors">
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
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {date}
              </div>
            )}

            {client && (
              <Badge 
                variant="outline" 
                className="text-gray-300 border-gray-700/50 px-3 py-1"
              >
                Client: {client}
              </Badge>
            )}
            
            {company && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Company:</span>
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
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${headingGradient}`} 
            style={{ fontFamily: fonts.SpaceGrotesk }}
          >
            {title}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl">
            {description}
          </p>
        </div>

        {/* Project Content */}
        {children}

        {/* Navigate Back */}
        <div className="text-center pb-8 mt-16">
          <Link href="/projects">
            <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
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
  iconBg = "bg-emerald-900/20", 
  iconColor = "text-emerald-500", 
  iconBorder = "border-emerald-800/20",
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
      <h2 className="text-2xl font-bold" style={{ fontFamily: fonts.SpaceGrotesk }}>
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
  iconBg = "bg-emerald-900/20", 
  iconColor = "text-emerald-500" 
}) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <span className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${iconBg} ${iconColor} mr-3 mt-0.5`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </span>
        <span className="text-gray-300">{item}</span>
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
          <div className="rounded-lg overflow-hidden border border-gray-800/50 shadow-xl">
            <Image
              src={image.url}
              alt={image.alt}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
          {image.caption && (
            <p className="text-sm text-gray-400 mt-2 text-center">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectPageLayout;
