import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Layers, FileText, DollarSign, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Invoice Generator | Sudharsan GS',
  description: 'A simple and efficient invoice generation tool for businesses',
};

export default function InvoiceGeneratorPage() {
  const projectData = {
    title: "Invoice Generator",
    description: "A simple yet powerful tool for businesses to quickly create professional invoices.",
    type: "personal",
    date: "2023",
    liveUrl: "https://www.factostack.com/invoice-generator",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' }
    ],
    features: [
      "Clean, professional invoice templates",
      "Customizable company branding and details",
      "Line item management with tax calculation",
      "PDF export functionality for easy sharing",
      "Save and load invoice drafts",
      "Mobile-responsive design for on-the-go invoice creation"
    ],
    keyPoints: [
      "Streamlines the invoicing process for small businesses",
      "Reduces administrative overhead with reusable templates",
      "Ensures accuracy in billing with automatic calculations",
      "Maintains professional appearance with consistent formatting"
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
        icon={<FileText className="w-5 h-5" />}
        iconBg="bg-blue-900/20"
        iconColor="text-blue-400"
        iconBorder="border-blue-800/30"
      >
        <div className="space-y-4 text-gray-300">
          <p>
            The Invoice Generator is designed to address a common pain point for freelancers and small businesses: 
            creating professional invoices quickly without expensive accounting software. This tool provides a
            user-friendly interface where users can input client details, itemize services or products, and generate
            a clean, professional invoice ready for distribution.
          </p>
          <p>
            The application features responsive design, allowing users to create invoices on any device. Invoices
            can be customized with company logos, contact information, payment terms, and notes to clients. The
            system automatically calculates subtotals, taxes, and final amounts to ensure accuracy.
          </p>
          <p>
            This tool saves businesses time and helps maintain a professional appearance with clients, contributing
            to better business relationships and timely payments.
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

      {/* Implementation Details */}
      <ProjectSection 
        title="Implementation Highlights"
        icon={<DollarSign className="w-5 h-5" />}
        iconBg="bg-emerald-900/20"
        iconColor="text-emerald-500"
        iconBorder="border-emerald-800/30"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.keyPoints.map((point, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <p className="text-gray-300">{point}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
