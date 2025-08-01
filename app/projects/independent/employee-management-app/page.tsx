import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Github, Layers, PenTool, BarChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Employee Management Mobile App | Sudharsan GS',
  description: 'A mobile app for managing employees and their details',
};

export default function EmployeeManagementAppPage() {
  const projectData = {
    title: "Employee Management Mobile App",
    description: "A mobile app for managing employees and their details.",
    client: "BuildTek Construction",
    type: "independent",
    date: "2023",
    liveUrl: null,
    githubUrl: null,
    technologies: [
      { name: 'React Native', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' },
      { name: 'ExpressJS', icon: '/skills/express.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' }
    ],
    features: [
      "Employee profile management with comprehensive details",
      "Daily attendance tracking with geolocation verification",
      "Project task assignments and progress monitoring",
      "Document storage for employee certifications and IDs",
      "Real-time notifications for approvals and task updates",
      "Analytics dashboard for workforce management"
    ],
    problemStatement: "BuildTek Construction needed a streamlined way to manage their growing workforce across multiple construction sites. Their paper-based systems were inefficient, leading to communication delays and difficulty tracking employee attendance and task completion.",
    solution: "I developed a comprehensive mobile application allowing supervisors to track attendance, assign tasks, and manage employee documentation. The app includes geolocation for site check-ins, push notifications for urgent updates, and a central database for all employee information.",
    images: [
      {
        url: '/projects/buildtek/login.png',
        alt: 'Employee Management App Login Screen',
        caption: 'Secure authentication for different user roles'
      },
      {
        url: '/projects/buildtek/dayplan1.png',
        alt: 'Daily Planning Interface',
        caption: 'Daily task planning and assignment interface'
      },
      {
        url: '/projects/buildtek/chat.png',
        alt: 'In-app Communication',
        caption: 'Built-in messaging system for team communication'
      },
      {
        url: '/projects/buildtek/notifications.png',
        alt: 'Notification Center',
        caption: 'Real-time notification system for important updates'
      }
    ],
    results: [
      "50% reduction in administrative time spent on employee management",
      "Improved workforce visibility with real-time location tracking",
      "Enhanced project management with clear task assignments and progress tracking",
      "Streamlined document management and compliance verification"
    ]
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type as 'independent'}
      date={projectData.date}
      client={projectData.client}
    >
      {/* Problem Statement */}
      <div className="mb-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-amber-700">
          Problem Statement
        </h2>
        <p className="text-muted-foreground">
          {projectData.problemStatement}
        </p>
      </div>

      {/* Solution */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Solution
        </h2>
        <p className="text-muted-foreground mb-6">
          {projectData.solution}
        </p>
      </div>
      
      {/* Tech Stack */}
      <ProjectSection 
        title="Tech Stack"
        icon={<Layers className="w-5 h-5" />}
        iconBg="bg-amber-100"
        iconColor="text-amber-700"
        iconBorder="border-amber-200"
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
      {(projectData.liveUrl || projectData.githubUrl) && (
        <div className="flex flex-wrap gap-4 mb-12">
          {projectData.liveUrl && (
            <Link href={projectData.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                View Live App
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
      )}

      {/* Features */}
      <ProjectSection 
        title="Key Features"
        icon={<PenTool className="w-5 h-5" />}
        iconBg="bg-amber-100"
        iconColor="text-amber-700"
        iconBorder="border-amber-200"
      >
        <FeatureList 
          items={projectData.features}
          iconBg="bg-amber-100"
          iconColor="text-amber-700"
        />
      </ProjectSection>

      {/* Project Images */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          App Screenshots
        </h2>
        <ProjectImageGallery images={projectData.images} columns={4} />
      </div>

      {/* Results */}
      <ProjectSection 
        title="Results & Impact"
        icon={<BarChart className="w-5 h-5" />}
        iconBg="bg-amber-100"
        iconColor="text-amber-700"
        iconBorder="border-amber-200"
      >
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <ul className="space-y-4">
            {projectData.results.map((result, index) => (
              <li key={index} className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <span className="text-amber-700 font-bold">{index + 1}</span>
                </div>
                <p className="text-muted-foreground">{result}</p>
              </li>
            ))}
          </ul>
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}