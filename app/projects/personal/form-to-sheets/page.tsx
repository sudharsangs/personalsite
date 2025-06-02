import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Github, Layers, Link as LinkIcon } from 'lucide-react';
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
    liveUrl: "https://formtosheets.sudharsangs.dev",
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
        url: '/projects/personal/form-to-sheets.png',
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