import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Github, Layers, Link as LinkIcon, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'MemeWizard | Sudharsan GS',
  description: 'A fun tool to create and share memes with your friends',
};

export default function MemeWizardPage() {
  const projectData = {
    title: "MemeWizard",
    description: "A web application that allows users to create, customize, and share memes with friends across various social platforms.",
    type: "personal",
    date: "2022",
    liveUrl: "https://memewizard.sudharsangs.dev",
    githubUrl: "https://github.com/sudharsangs/memewizard",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' }
    ],
    features: [
      "Choose from a curated collection of popular meme templates",
      "Add custom text with adjustable font styles and positions",
      "Upload your own images to create unique memes",
      "One-click sharing to social media platforms",
      "Save memes to your personal gallery for later use",
      "Dark mode interface for comfortable editing"
    ],
    images: [
      {
        url: '/projects/personal/memewizard.png',
        alt: 'MemeWizard interface showing meme creation tool',
        caption: 'MemeWizard meme creation interface'
      }
    ],
    problemStatement: "Creating memes often requires image editing software or using multiple platforms with limited customization. There was a need for a simple, all-in-one solution for creating and sharing memes.",
    solution: "MemeWizard offers an intuitive interface that requires no design experience. Users can quickly create customized memes with just a few clicks and immediately share them across their social networks."
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
              className="inline-flex items-center bg-gray-800/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-gray-700/30"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4 mb-12">
        {projectData.liveUrl && (
          <Link href={projectData.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View Live Site
            </Button>
          </Link>
        )}
        
        {projectData.githubUrl && (
          <Link href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-gray-700 hover:bg-gray-800 flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Source Code
            </Button>
          </Link>
        )}
      </div>

      {/* Project Images */}
      <ProjectImageGallery images={projectData.images} />

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection 
          title="The Problem"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-amber-900/20"
          iconColor="text-amber-500"
          iconBorder="border-amber-800/20"
          className="mb-6 md:mb-0"
        >
          <p className="text-gray-300">{projectData.problemStatement}</p>
        </ProjectSection>

        <ProjectSection 
          title="The Solution"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-emerald-900/20"
          iconColor="text-emerald-500" 
          iconBorder="border-emerald-800/20"
          className="mb-0"
        >
          <p className="text-gray-300">{projectData.solution}</p>
        </ProjectSection>
      </div>

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