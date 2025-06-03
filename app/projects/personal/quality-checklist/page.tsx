import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Layers, CheckSquare, Award, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Quality Checklist | Sudharsan GS',
  description: 'A comprehensive quality assurance tool for manufacturing processes',
};

export default function QualityChecklistPage() {
  const projectData = {
    title: "Quality Checklist",
    description: "A digital quality assurance tool that streamlines the inspection process for manufacturing businesses.",
    type: "personal",
    date: "2024",
    liveUrl: "https://www.factostack.com/quality-checklist",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' }
    ],
    features: [
      "Customizable checklist templates for different product types",
      "Digital inspection forms with pass/fail criteria",
      "Photo documentation capabilities for issues",
      "Real-time quality metrics and analytics dashboard",
      "Issue tracking and resolution workflow",
      "Mobile-friendly interface for on-floor inspections"
    ],
    impacts: [
      "Reduced defect rates by standardizing quality inspection procedures",
      "Improved accountability with tracked inspections and digital signatures",
      "Enhanced communication between quality and production teams",
      "Data-driven quality improvement with historical inspection analysis"
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
              View Live Tool
            </Button>
          </Link>
        )}
      </div>

      {/* Project Description */}
      <ProjectSection 
        title="About the Project"
        icon={<CheckSquare className="w-5 h-5" />}
        iconBg="bg-blue-900/20"
        iconColor="text-blue-400"
        iconBorder="border-blue-800/30"
      >
        <div className="space-y-4 text-gray-300">
          <p>
            The Quality Checklist tool was developed to modernize quality control processes in manufacturing 
            environments. Traditional paper-based quality inspection systems are prone to inconsistencies, 
            data loss, and inefficient reporting. This digital solution transforms that approach with a 
            comprehensive system for ensuring product quality at every stage of production.
          </p>
          <p>
            The application enables quality managers to create standardized inspection protocols tailored to 
            specific product lines or manufacturing processes. Quality inspectors can then access these digital 
            checklists from any device, complete inspections efficiently, and document any issues with photos and 
            notes directly in the system.
          </p>
          <p>
            Beyond just facilitating inspections, the tool provides valuable analytics on quality trends, 
            helping businesses identify recurring issues and implement process improvements. This data-driven 
            approach to quality management helps manufacturers reduce defect rates, minimize waste, and maintain 
            consistent product quality.
          </p>
        </div>
      </ProjectSection>

      {/* Key Features */}
      <ProjectSection 
        title="Key Features"
        icon={<LinkIcon className="w-5 h-5" />}
      >
        <FeatureList items={projectData.features} />
      </ProjectSection>

      {/* Quality Impact */}
      <ProjectSection 
        title="Quality Impact"
        icon={<Award className="w-5 h-5" />}
        iconBg="bg-indigo-900/20"
        iconColor="text-indigo-400"
        iconBorder="border-indigo-800/30"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.impacts.map((impact, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <p className="text-gray-300">{impact}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
