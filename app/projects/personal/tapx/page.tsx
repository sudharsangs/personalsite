import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Github, Layers, Link as LinkIcon, Lightbulb, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'TapX | Sudharsan GS',
  description: 'A browser extension for searching Amazon.in products from any webpage',
};

export default function TapXPage() {
  const projectData = {
    title: "TapX",
    description: "A simple yet powerful browser extension designed to enhance your online shopping experience on Amazon.in, allowing you to search for products directly from any webpage.",
    type: "personal",
    date: "2023",
    liveUrl: null,
    githubUrl: "https://github.com/sudharsangs/tapx",
    technologies: [
      { name: 'Svelte', icon: '/skills/svelte.png' },
      { name: 'Go Fiber', icon: '/skills/go-fiber.svg' },
      { name: 'Colly', icon: '/skills/go.svg' }
    ],
    features: [
      "Effortless searching: Select text on any webpage, right-click, and choose the \"Search on Amazon\" option",
      "Top results: Instantly access the top Amazon.in search results",
      "Powered by Svelte for a smooth and responsive user interface",
      "Backend with Go Fiber and Colly for efficient processing and accurate search results"
    ],
    images: [
      {
        url: '/projects/personal/tapx.png',
        alt: 'TapX browser extension',
        caption: 'TapX browser extension interface'
      }
    ],
    problemStatement: "Online shopping often requires navigating to Amazon.in separately when you find a product mentioned on other websites, breaking your browsing flow and making comparison shopping more time-consuming.",
    solution: "TapX streamlines the process by allowing users to search for products on Amazon.in directly from any webpage with a simple text selection and right-click, saving time and enhancing the shopping experience."
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
              className="inline-flex items-center bg-white/80 shadow-sm backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-primary/20"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4 mb-12">
        {projectData.liveUrl && (
          <Link href={projectData.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View Live Site
            </Button>
          </Link>
        )}
        
        {projectData.githubUrl && (
          <Link href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-border hover:bg-muted/10 flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Source Code
            </Button>
          </Link>
        )}
      </div>

      {/* Project Images */}
      <ProjectImageGallery images={projectData.images} />

      {/* How It Works */}
      <ProjectSection 
        title="How It Works"
        icon={<Smartphone className="w-5 h-5" />}
        iconBg="bg-blue-100"
        iconColor="text-blue-700"
        iconBorder="border-blue-200"
        className="mb-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Select</h3>
            <p className="text-muted-foreground">Highlight the text of the product you are interested in on any webpage.</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Right-Click</h3>
            <p className="text-muted-foreground">Use the right-click context menu to select the &quot;Search on Amazon&quot; option.</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Shop</h3>
            <p className="text-muted-foreground">View the top search results on Amazon.in and find the best deals.</p>
          </div>
        </div>
      </ProjectSection>

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection 
          title="The Problem"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-amber-100"
          iconColor="text-amber-700"
          iconBorder="border-amber-200"
          className="mb-6 md:mb-0"
        >
          <p className="text-muted-foreground">{projectData.problemStatement}</p>
        </ProjectSection>

        <ProjectSection 
          title="The Solution"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700" 
          iconBorder="border-emerald-200"
          className="mb-0"
        >
          <p className="text-muted-foreground">{projectData.solution}</p>
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