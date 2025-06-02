import React from 'react';
import { Metadata } from 'next';
import { Layers, Link as LinkIcon, FileText, Lightbulb, LineChart } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'No Paper Exams | Sudharsan GS',
  description: 'A digital examination platform for educational institutions to conduct paperless tests',
};

export default function NoPaperExamsPage() {
  const projectData = {
    title: "No Paper Exams",
    description: "A comprehensive examination platform that enables educational institutions to conduct secure, paperless assessments with advanced analytics and anti-cheating measures.",
    type: "independent",
    date: "2023",
    client: "Regional Education Board",
    technologies: [
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' }
    ],
    features: [
      "Secure examination environment with browser lockdown functionality",
      "AI-powered proctoring system to detect suspicious behavior",
      "Flexible question formats including MCQ, subjective, and diagram-based questions",
      "Automated grading with manual override options for educators",
      "Comprehensive analytics dashboard for performance tracking",
      "Randomized question ordering and timing controls",
      "Accessibility features for students with special needs",
      "Offline examination mode with automatic sync when connection returns"
    ],
    images: [
      {
        url: '/projects/independent/nopaperexams-1.png',
        alt: 'No Paper Exams dashboard showing exam analytics',
        caption: 'Administrator dashboard with exam analytics'
      },
      {
        url: '/projects/independent/nopaperexams-2.png',
        alt: 'Student examination interface',
        caption: 'Secure examination interface for students'
      }
    ],
    problemStatement: "Traditional paper-based examinations are resource-intensive, environmentally unfriendly, and difficult to manage at scale. They also pose logistical challenges in remote learning scenarios and lack sophisticated analysis capabilities.",
    solution: "No Paper Exams provides a secure, scalable digital platform that eliminates paper waste, simplifies exam administration, and offers rich analytics while maintaining assessment integrity through advanced anti-cheating measures.",
    results: [
      "90% reduction in paper usage across participating institutions",
      "75% decrease in administrative time spent on exam management",
      "Improved data security with end-to-end encryption of examination content",
      "Enhanced ability to identify learning gaps through detailed performance analytics"
    ]
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


      {/* Project Images */}
      <ProjectImageGallery images={projectData.images} columns={2} />

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection 
          title="The Problem"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-amber-900/20"
          iconColor="text-amber-500"
          iconBorder="border-amber-800/30"
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

      {/* System Modules */}
      <ProjectSection 
        title="System Modules"
        icon={<FileText className="w-5 h-5" />}
        iconBg="bg-purple-900/20"
        iconColor="text-purple-400" 
        iconBorder="border-purple-800/30"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Exam Creator</h3>
            <p className="text-gray-300">Powerful tool for educators to design examinations with various question types, timing controls, and section organization.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Secure Test Environment</h3>
            <p className="text-gray-300">Browser lockdown system with AI-powered proctoring to ensure examination integrity and prevent unauthorized assistance.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Grading System</h3>
            <p className="text-gray-300">Automated assessment for objective questions and intuitive interfaces for manual grading of subjective responses.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Analytics Dashboard</h3>
            <p className="text-gray-300">Comprehensive reporting tools that provide insights into individual and group performance across different metrics.</p>
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

      {/* Results */}
      <ProjectSection 
        title="Results & Impact"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-emerald-900/20"
        iconColor="text-emerald-500" 
        iconBorder="border-emerald-800/20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.results.map((result, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <p className="text-gray-300">{result}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}