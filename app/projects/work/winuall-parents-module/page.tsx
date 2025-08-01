import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, Users, LineChart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Winuall Parents Module | Sudharsan GS',
  description: 'Development of a comprehensive parents module for tracking student progress and engagement',
};

export default function WinuallParentsModulePage() {
  const projectData = {
    title: "Parents Module",
    description: "Designed and implemented a dedicated module for parents to track their children's educational progress, attendance, and performance on the Winuall platform.",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg"
    },
    type: "work",
    date: "2022",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Redux', icon: '/skills/redux.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' }
    ],
    keyHighlights: [
      "Created a dedicated dashboard for parents to monitor their child's learning progress",
      "Implemented real-time notifications for important updates and performance insights",
      "Developed detailed analytics visualizations to track academic growth over time",
      "Built secure communication channels between parents and educators",
      "Integrated attendance and schedule management features"
    ],
    features: [
      "Comprehensive student performance dashboard with visual analytics",
      "Real-time attendance tracking and notification system",
      "Assignment and assessment progress monitoring",
      "Direct messaging with instructors and administrative staff",
      "Calendar integration for upcoming classes and events",
      "Fee payment history and upcoming payment reminders",
      "Student engagement metrics to identify learning patterns"
    ],
    outcomes: [
      "Increased parent engagement by 65% through transparent progress tracking",
      "Reduced administrative communication load by 40% through self-service features",
      "Improved student performance through closer parent-teacher collaboration",
      "Enhanced customer satisfaction, contributing to higher student retention rates"
    ],
    images: [
      {
        url: '/projects/winuall/parents-module-1.png',
        alt: 'Parents Dashboard Overview',
        caption: 'Main dashboard showing student performance metrics'
      },
      {
        url: '/projects/winuall/parents-module-2.png',
        alt: 'Progress Tracking Interface',
        caption: 'Detailed progress tracking with performance analytics'
      }
    ]
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type as 'personal' | 'independent' | 'work'}
      date={projectData.date}
      company={projectData.company}
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

      {/* Project Images */}
      <ProjectImageGallery images={projectData.images} columns={2} />

      {/* Key Highlights */}
      <ProjectSection 
        title="Key Highlights"
        icon={<Sparkles className="w-5 h-5" />}
        iconBg="bg-blue-100"
        iconColor="text-blue-700" 
        iconBorder="border-blue-200"
      >
        <FeatureList 
          items={projectData.keyHighlights} 
          iconBg="bg-blue-100"
          iconColor="text-blue-700"
        />
      </ProjectSection>

      {/* User Experience */}
      <ProjectSection 
        title="User Experience Focus"
        icon={<Users className="w-5 h-5" />}
        iconBg="bg-purple-100"
        iconColor="text-purple-700" 
        iconBorder="border-purple-200"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Accessibility</h3>
            <p className="text-muted-foreground">Designed with accessibility in mind, ensuring parents of all technical abilities could easily navigate and understand their child&apos;s performance data.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Simplicity</h3>
            <p className="text-muted-foreground">Created intuitive interfaces with clear data visualizations that transform complex educational metrics into easily understandable insights.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Engagement</h3>
            <p className="text-muted-foreground">Implemented features that encourage regular engagement, such as progress milestones, alerts for important events, and actionable insights.</p>
          </div>
        </div>
      </ProjectSection>

      {/* Features */}
      <ProjectSection 
        title="Module Features"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-700" 
        iconBorder="border-emerald-200"
      >
        <FeatureList 
          items={projectData.features}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700"
        />
      </ProjectSection>

      {/* Outcomes */}
      <ProjectSection 
        title="Outcomes & Impact"
        icon={<BarChart className="w-5 h-5" />}
        iconBg="bg-amber-100"
        iconColor="text-amber-700" 
        iconBorder="border-amber-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.outcomes.map((outcome, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-muted-foreground">{outcome}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}