import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Github, Layers, Link as LinkIcon, Lightbulb, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'TapX | Sudharsan GS',
  description: 'A mobile app for contactless digital business card sharing',
};

export default function TapXPage() {
  const projectData = {
    title: "TapX",
    description: "A mobile application that allows professionals to share their digital business cards via NFC technology, eliminating the need for physical cards.",
    type: "personal",
    date: "2023",
    liveUrl: "https://tapx.sudharsangs.dev",
    githubUrl: "https://github.com/sudharsangs/tapx",
    technologies: [
      { name: 'React Native', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' }
    ],
    features: [
      "NFC-enabled digital business card sharing",
      "Customizable digital business card templates",
      "Integration with phone contacts for easy saving",
      "Analytics dashboard to track card sharing statistics",
      "QR code generation for devices without NFC capabilities",
      "Offline functionality for viewing saved cards"
    ],
    images: [
      {
        url: '/projects/personal/tapx.png',
        alt: 'TapX app showing a digital business card',
        caption: 'Digital business card interface in TapX'
      }
    ],
    problemStatement: "Traditional business cards are wasteful, easily lost, and don't provide insights on networking effectiveness. Additionally, manually entering contact details from paper cards is time-consuming and error-prone.",
    solution: "TapX digitizes the entire business card experience, allowing users to create and share digital cards via a simple tap of their phone. The app tracks sharing analytics and seamlessly integrates with phone contacts."
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

      {/* How It Works */}
      <ProjectSection 
        title="How It Works"
        icon={<Smartphone className="w-5 h-5" />}
        iconBg="bg-blue-900/20"
        iconColor="text-blue-400"
        iconBorder="border-blue-800/30"
        className="mb-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-emerald-400">Create</h3>
            <p className="text-gray-300">Design your personalized digital business card with your contact information, social links, and branding.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-emerald-400">Tap</h3>
            <p className="text-gray-300">Simply tap your phone to another NFC-enabled device to instantly share your digital card.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-emerald-400">Connect</h3>
            <p className="text-gray-300">The recipient saves your details directly to their contacts and can view your full profile in the app.</p>
          </div>
        </div>
      </ProjectSection>

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