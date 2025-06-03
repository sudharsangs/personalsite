import React from 'react';
import { Metadata } from 'next';
import { ExternalLink, Layers, Calculator, BarChart, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Production Cost Calculator | Sudharsan GS',
  description: 'A comprehensive tool for businesses to calculate and track production costs',
};

export default function ProductionCostCalculatorPage() {
  const projectData = {
    title: "Production Cost Calculator",
    description: "A comprehensive tool for manufacturing businesses to accurately calculate and optimize production costs.",
    type: "personal",
    date: "2024",
    liveUrl: "https://www.factostack.com/production-cost-calculator",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' }
    ],
    features: [
      "Material cost breakdown with quantity adjustments",
      "Labor cost calculation based on hourly rates and time estimates",
      "Overhead cost allocation with customizable categories",
      "Profit margin calculator with multiple pricing strategies",
      "Cost comparison across different production scenarios",
      "Export functionality for reports and estimates"
    ],
    benefits: [
      "Helps businesses accurately price their products for profitability",
      "Identifies cost-saving opportunities in the production process",
      "Enables data-driven decisions about material sourcing and labor allocation",
      "Provides transparency in cost structures for stakeholder communication"
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
        icon={<Calculator className="w-5 h-5" />}
        iconBg="bg-blue-900/20"
        iconColor="text-blue-400"
        iconBorder="border-blue-800/30"
      >
        <div className="space-y-4 text-gray-300">
          <p>
            The Production Cost Calculator was developed to address the challenges manufacturing businesses face in 
            accurately determining their production costs. Many businesses struggle with pricing their products
            correctly because they lack a systematic way to calculate all the components that contribute to the
            final production cost.
          </p>
          <p>
            This tool provides a comprehensive framework for breaking down costs into categories such as direct 
            materials, direct labor, manufacturing overhead, and administrative expenses. Users can input detailed
            information about their production process, and the calculator will generate an accurate cost per unit,
            helping businesses establish profitable pricing strategies.
          </p>
          <p>
            With its intuitive interface and detailed analysis capabilities, the Production Cost Calculator helps
            manufacturing businesses optimize their operations, identify inefficiencies, and make data-driven
            decisions about their production processes.
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

      {/* Business Benefits */}
      <ProjectSection 
        title="Business Benefits"
        icon={<BarChart className="w-5 h-5" />}
        iconBg="bg-amber-900/20"
        iconColor="text-amber-500"
        iconBorder="border-amber-800/30"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <p className="text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
