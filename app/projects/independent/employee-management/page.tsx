import React from 'react';
import { Metadata } from 'next';
import { Layers, Link as LinkIcon, FileText, Lightbulb, LineChart, Target } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Employee Management Mobile App | Sudharsan GS',
  description: 'Cross-platform mobile app for field service management with 50% reduction in admin overhead',
};

export default function EmployeeManagementPage() {
  const projectData = {
    title: "Employee Management Mobile App",
    description: "A cross-platform mobile application developed for a plumbing company to streamline field operations, eliminate paperwork, and provide real-time visibility into job status, achieving 95% staff adoption.",
    type: "independent",
    date: "2023",
    client: "Field Services Company",
    technologies: [
      { name: 'React Native', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' }
    ],
    features: [
      "Job Assignment System with intelligent routing based on technician location, skills, and availability",
      "Photo Documentation with before/after capture and automatic geotagging for accountability",
      "GPS Tracking with automatic check-in/out and mileage calculation for accurate billing",
      "Real-time Updates providing live status notifications for managers and customers",
      "Offline Functionality allowing app to operate without internet connectivity with automatic sync",
      "Manager Dashboard with analytics, reporting, and team oversight capabilities",
      "Push Notifications for job assignments, updates, and priority alerts",
      "Team Chat for instant communication between field technicians and office staff"
    ],
    problemStatement: "Field technicians relied on phone calls, paper forms, and text messages, resulting in constant phone calls for job updates, paper forms getting lost or damaged, no real-time visibility into job status, manual time tracking and reporting, and difficulty managing multiple job priorities.",
    solution: "A mobile-first application that digitized the entire field operations workflow, providing offline capabilities for technicians, real-time communication between field and office, automated time tracking and documentation, and a comprehensive manager dashboard for operational oversight.",
    systemModules: [
      {
        title: "Daily Planning",
        description: "Smart job scheduling with route optimization, skill matching, and workload balancing to maximize technician efficiency and minimize travel time."
      },
      {
        title: "Job Execution",
        description: "Complete job lifecycle management from check-in to completion with photo documentation, customer signatures, and material tracking."
      },
      {
        title: "Communication Hub",
        description: "Multi-channel communication system supporting team chat, customer notifications, and manager alerts for seamless coordination."
      },
      {
        title: "Lead Management",
        description: "In-app lead capture and conversion tools enabling technicians to identify upsell opportunities and create estimates on-site."
      }
    ],
    results: [
      "50% reduction in administrative overhead through automation",
      "25% faster job completion with optimized routing and workflow",
      "95% staff adoption rate within first month of rollout",
      "10-week development timeline from concept to production",
      "80% reduction in status-related phone calls",
      "90% reduction in paperwork and manual data entry"
    ],
    keyLearnings: [
      "Field research with actual users is essential for understanding real-world workflows and pain points",
      "Offline capability critical for field operations where internet connectivity is unreliable",
      "Gradual rollout with pilot group reduces adoption resistance and surfaces issues early",
      "Simple UI outperforms feature complexity for field workers focused on completing jobs"
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
      {/* Hero Images */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-primary/20">
          <Image
            src="/projects/independent/employee-management/login.png"
            alt="Login Screen"
            fill
            className="object-contain bg-muted"
          />
        </div>
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-primary/20">
          <Image
            src="/projects/independent/employee-management/dayplan1.png"
            alt="Daily Plan"
            fill
            className="object-contain bg-muted"
          />
        </div>
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-primary/20">
          <Image
            src="/projects/independent/employee-management/notifications.png"
            alt="Notifications"
            fill
            className="object-contain bg-muted"
          />
        </div>
      </div>

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
              <span className="text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection
          title="The Problem"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-primary/10"
          iconColor="text-primary"
          iconBorder="border-primary/20"
          className="mb-6 md:mb-0"
        >
          <p className="text-muted-foreground">{projectData.problemStatement}</p>
        </ProjectSection>

        <ProjectSection
          title="The Solution"
          icon={<Target className="w-5 h-5" />}
          iconBg="bg-primary/10"
          iconColor="text-primary"
          iconBorder="border-primary/20"
          className="mb-0"
        >
          <p className="text-muted-foreground">{projectData.solution}</p>
        </ProjectSection>
      </div>

      {/* System Modules */}
      <ProjectSection
        title="System Modules"
        icon={<FileText className="w-5 h-5" />}
        iconBg="bg-primary/10"
        iconColor="text-primary"
        iconBorder="border-primary/20"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.systemModules.map((module, index) => (
            <div key={index} className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-primary">{module.title}</h3>
              <p className="text-muted-foreground">{module.description}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Features */}
      <ProjectSection
        title="Key Features"
        icon={<LinkIcon className="w-5 h-5" />}
      >
        <FeatureList
          items={projectData.features}
          iconBg="bg-primary/10"
          iconColor="text-primary"
        />
      </ProjectSection>

      {/* More Screenshots */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-primary/20 shadow-sm">
          <Image
            src="/projects/independent/employee-management/chat.png"
            alt="Team Chat"
            fill
            className="object-contain bg-muted"
          />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-primary/20 shadow-sm">
          <Image
            src="/projects/independent/employee-management/approvals.png"
            alt="Approvals"
            fill
            className="object-contain bg-muted"
          />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-primary/20 shadow-sm">
          <Image
            src="/projects/independent/employee-management/lead1.png"
            alt="Lead Management"
            fill
            className="object-contain bg-muted"
          />
        </div>
      </div>

      {/* Results */}
      <ProjectSection
        title="Results & Impact"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-primary/10"
        iconColor="text-primary"
        iconBorder="border-primary/20"
        className="mb-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.results.map((result, index) => (
            <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-muted-foreground">{result}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Key Learnings */}
      <ProjectSection
        title="Key Learnings"
        icon={<Lightbulb className="w-5 h-5" />}
        iconBg="bg-primary/10"
        iconColor="text-primary"
        iconBorder="border-primary/20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.keyLearnings.map((learning, index) => (
            <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-muted-foreground">{learning}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
