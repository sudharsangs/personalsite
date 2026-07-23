import React from 'react';
import { Metadata } from 'next';
import { ArrowUpRight, Github, Globe2, Layers, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Form to Sheets | Sudharsan GS',
  description: 'Seamlessly integrate Google Forms into websites with code snippets for multiple frameworks',
};

export default function FormToSheetsPage() {
  const projectData = {
    title: "Form to Sheets",
    description: "A tool to seamlessly integrate Google Forms into websites with code snippets for multiple frameworks.",
    type: "personal",
    date: "2023",
    liveUrl: "https://formtosheets.vercel.app/",
    githubUrl: "https://github.com/sudharsangs/formtosheets",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' }
    ],
    features: [
      "Seamless integration of Google Forms into any website",
      "Support for multiple frameworks, including React, Vue, HTML, and Svelte",
      "Effortless code generation for easy embedding",
      "Developer-friendly and user-centric design",
      "Real-time data integration for efficient data management",
      "Secure and robust infrastructure for data protection"
    ],
    images: [
      {
        url: '/projects/personal/form-to-sheets-screenshot.png',
        alt: 'Form to Sheets homepage showing the interface',
        caption: 'The main homepage of Form to Sheets'
      }
    ]
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type as 'personal' | 'independent' | 'work'}
      date={projectData.date}
    >
      {/* Tech Stack */}
      <ProjectSection 
        title="Tech Stack"
        icon={<Layers className="w-5 h-5" />}
      >
        <div className="flex flex-wrap gap-3">
          {projectData.technologies.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center bg-card/80 shadow-sm rounded-full px-4 py-2 text-sm border border-primary/20"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-foreground/80">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4 mb-12">
        {projectData.liveUrl && (
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 h-10 font-semibold text-sm shadow-sm transition-all duration-200 gap-2 border border-primary/40">
          <Link href={projectData.liveUrl} target="_blank" rel="noopener noreferrer">
              <Globe2 className="h-4 w-4" />
              View Live Site
              <ArrowUpRight className="h-4 w-4" />
          </Link>
            </Button>
        )}
        
        {projectData.githubUrl && (
            <Button asChild variant="outline" className="bg-card/70 border border-border/70 text-foreground hover:bg-secondary/70 hover:border-primary/35 hover:text-foreground rounded-lg px-4 h-10 font-semibold text-sm shadow-sm transition-all duration-200 gap-2">
          <Link href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View Source Code
          </Link>
            </Button>
        )}
      </div>

      {/* Project Images */}
      <ProjectImageGallery images={projectData.images} />

      {/* Features */}
      <ProjectSection 
        title="Key Features"
        icon={<LinkIcon className="w-5 h-5" />}
      >
        <FeatureList items={projectData.features} />
      </ProjectSection>
    </ProjectPageLayout>
  );
}
