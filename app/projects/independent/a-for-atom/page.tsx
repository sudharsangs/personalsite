import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Github, Layers, Link as LinkIcon, Smartphone, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'A for Atom | Sudharsan GS',
  description: 'An educational game to teach atomic structures and elements in an interactive way',
};

export default function AForAtomPage() {
  const projectData = {
    title: "A for Atom",
    description: "An educational game designed to teach students about atomic structures and the periodic table through interactive gameplay and challenges.",
    type: "independent",
    date: "2022",
    liveUrl: "https://afotatom.sudharsangs.dev",
    githubUrl: "https://github.com/sudharsangs/a-for-atom",
    client: "SciEdu Academy",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'JavaScript', icon: '/skills/javascript.svg' },
      { name: 'HTML5', icon: '/skills/html.svg' },
      { name: 'CSS3', icon: '/skills/css.svg' }
    ],
    features: [
      "Interactive 3D models of atoms and molecular structures",
      "Engaging quizzes and challenges about the periodic table",
      "Progressive learning path from basic to advanced concepts",
      "Real-time feedback and scoring system",
      "Virtual laboratory for conducting simple chemical experiments",
      "Achievement system to motivate continued learning"
    ],
    images: [
      {
        url: '/projects/independent/a-for-atom-1.png',
        alt: 'A for Atom game interface showing periodic table',
        caption: 'Interactive periodic table exploration'
      },
      {
        url: '/projects/independent/a-for-atom-2.png',
        alt: 'Atom building challenge',
        caption: 'Atom building challenge where players construct atom models'
      }
    ],
    problemStatement: "Traditional methods of teaching chemistry concepts like atomic structure are often abstract and fail to engage students, leading to difficulties in understanding fundamental principles.",
    solution: "A for Atom transforms learning about chemistry into an interactive gaming experience, where students can visualize and manipulate atomic structures while completing fun challenges that reinforce key concepts."
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type as 'personal' | 'independent' | 'work'}
      date={projectData.date}
      client={projectData.client}
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
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Try the Game
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
      <ProjectImageGallery images={projectData.images} columns={2} />

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection 
          title="The Problem"
          icon={<Rocket className="w-5 h-5" />}
          iconBg="bg-amber-900/20"
          iconColor="text-amber-500"
          iconBorder="border-amber-800/30"
          className="mb-6 md:mb-0"
        >
          <p className="text-gray-300">{projectData.problemStatement}</p>
        </ProjectSection>

        <ProjectSection 
          title="The Solution"
          icon={<Rocket className="w-5 h-5" />}
          iconBg="bg-emerald-900/20"
          iconColor="text-emerald-500" 
          iconBorder="border-emerald-800/20"
          className="mb-0"
        >
          <p className="text-gray-300">{projectData.solution}</p>
        </ProjectSection>
      </div>

      {/* Game Components */}
      <ProjectSection 
        title="Game Components"
        icon={<Smartphone className="w-5 h-5" />}
        iconBg="bg-purple-900/20"
        iconColor="text-purple-400" 
        iconBorder="border-purple-800/30"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Atom Builder</h3>
            <p className="text-gray-300">Interactive tool for building atom models by adding protons, neutrons, and electrons while learning about atomic structure.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Element Explorer</h3>
            <p className="text-gray-300">Gamified periodic table where players discover element properties, uses, and interesting facts through exploration.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Reaction Lab</h3>
            <p className="text-gray-300">Virtual laboratory where students can conduct simple chemical reactions and observe molecular behavior in real-time.</p>
          </div>
        </div>
      </ProjectSection>

      {/* Features */}
      <ProjectSection 
        title="Key Features"
        icon={<LinkIcon className="w-5 h-5" />}
      >
        <FeatureList 
          items={projectData.features}
          iconBg="bg-amber-900/20"
          iconColor="text-amber-500"
        />
      </ProjectSection>
    </ProjectPageLayout>
  );
}