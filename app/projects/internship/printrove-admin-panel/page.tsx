import React from 'react';
import { Metadata } from 'next';
import { Layers, LineChart, Settings, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Printrove Admin Panel | Sudharsan GS',
  description: 'Development of an administration panel for Printrove\'s print-on-demand platform',
};

export default function PrintroveAdminPanelPage() {
  const projectData = {
    title: "Printrove Admin Panel",
    description: "Developed a comprehensive administration dashboard for Printrove's print-on-demand platform, enabling efficient management of merchants, orders, and platform operations.",
    company: {
      name: "Printrove",
      url: "https://printrove.com",
      logo: "/printrove.png"
    },
    type: "work", // Showing as work though it was an internship
    date: "2020",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'JavaScript', icon: '/skills/javascript.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' }
    ],
    keyHighlights: [
      "Developed an intuitive admin dashboard for platform management",
      "Created tools for merchant oversight and performance tracking",
      "Implemented order management and production workflow systems",
      "Built comprehensive reporting and analytics features",
      "Integrated user management with role-based access control"
    ],
    features: [
      "Merchant approval and verification workflow",
      "Comprehensive order tracking and management",
      "Financial reporting and payment reconciliation",
      "Product catalog management and approval system",
      "Customer support ticket management",
      "Platform analytics and performance metrics",
      "User administration with granular permission controls"
    ],
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
              className="inline-flex items-center bg-gray-800/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-gray-700/30"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Key Highlights */}
      <ProjectSection 
        title="Key Highlights"
        icon={<Zap className="w-5 h-5" />}
        iconBg="bg-blue-900/20"
        iconColor="text-blue-400" 
        iconBorder="border-blue-800/30"
      >
        <FeatureList 
          items={projectData.keyHighlights} 
          iconBg="bg-blue-900/20"
          iconColor="text-blue-400"
        />
      </ProjectSection>

      {/* Admin Modules */}
      <ProjectSection 
        title="Administration Modules"
        icon={<Settings className="w-5 h-5" />}
        iconBg="bg-purple-900/20"
        iconColor="text-purple-400" 
        iconBorder="border-purple-800/30"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Merchant Management</h3>
            <p className="text-gray-300">Comprehensive tools for onboarding, verifying, and managing merchants on the Printrove platform, including performance metrics and compliance tracking.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Order Processing</h3>
            <p className="text-gray-300">End-to-end order management system from receipt to fulfillment, with production tracking, quality control, and shipping integration.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Financial Operations</h3>
            <p className="text-gray-300">Financial reporting, payment processing, revenue distribution, and accounting tools for managing the platform&apos;s monetary aspects.</p>
          </div>
        </div>
      </ProjectSection>

      {/* Security Features */}
      <ProjectSection 
        title="Security & Permissions"
        icon={<ShieldCheck className="w-5 h-5" />}
        iconBg="bg-emerald-900/20"
        iconColor="text-emerald-500" 
        iconBorder="border-emerald-800/20"
        className="mb-12"
      >
        <div className="space-y-6">
          <p className="text-gray-300">
            Implemented a sophisticated role-based access control system to ensure administrators only accessed information relevant to their responsibilities. The system featured:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">Granular Permissions</h3>
              <p className="text-gray-300">Fine-grained control over feature access, with customizable permission sets for different administrative roles.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">Activity Logging</h3>
              <p className="text-gray-300">Comprehensive audit trail of all administrative actions for accountability and security monitoring.</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Features */}
      <ProjectSection 
        title="Platform Features"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-amber-900/20"
        iconColor="text-amber-500"
        iconBorder="border-amber-800/30"
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