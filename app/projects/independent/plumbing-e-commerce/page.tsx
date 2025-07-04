import React from 'react';
import { Metadata } from 'next';
import {  Layers, Link as LinkIcon, ShoppingCart, Lightbulb, LineChart } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Plumbing E-Commerce | Sudharsan GS',
  description: 'A specialized e-commerce platform for plumbing supplies and services',
};

export default function PlumbingECommercePage() {
  const projectData = {
    title: "Plumbing E-Commerce Platform",
    description: "A specialized e-commerce solution developed for a plumbing supply business, providing both product sales and service bookings in one platform.",
    type: "independent",
    date: "2023",
    client: "Urban Plumbing Supplies",
    technologies: [
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgres.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' }
    ],
    features: [
      "Comprehensive product catalog with advanced filtering options",
      "Service booking system with availability calendar",
      "Product compatibility checker for plumbing components",
      "Customer account portal for order tracking and service history",
      "Professional plumber dashboard for service management",
      "Technical specification documentation for all products",
      "Quote generator for large projects"
    ],
    images: [
      {
        url: '/projects/plumbing/DYGUS-0.png',
        alt: 'Plumbing E-commerce homepage',
        caption: 'Main storefront showcasing products and services'
      },
      {
        url: '/projects/plumbing/DYGUS-17.png',
        alt: 'Service booking interface',
        caption: 'Interactive service booking calendar and form'
      }
    ],
    problemStatement: "Traditional plumbing supply businesses struggle with offering both products and services online. Their customers need technical compatibility information and often require professional installation, which typical e-commerce platforms don't support well.",
    solution: "This custom e-commerce platform combines product sales with service bookings, featuring compatibility checks and detailed technical specifications to ensure customers purchase the right products for their needs.",
    results: [
      "120% increase in online sales within the first six months",
      "35% of product orders now include installation service bookings",
      "Reduced product returns by 40% due to compatibility checker",
      "Expanded customer base beyond local service area through nationwide shipping"
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

      {/* Platform Components */}
      <ProjectSection 
        title="Platform Components"
        icon={<ShoppingCart className="w-5 h-5" />}
        iconBg="bg-purple-900/20"
        iconColor="text-purple-400" 
        iconBorder="border-purple-800/30"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Product Store</h3>
            <p className="text-gray-300">Comprehensive catalog with detailed specifications, compatibility information, and installation guides for all plumbing products.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Service Booking</h3>
            <p className="text-gray-300">Interactive scheduling system allowing customers to book installations, repairs, and maintenance with licensed plumbers.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Professional Portal</h3>
            <p className="text-gray-300">Dedicated dashboard for plumbers to manage appointments, update availability, and access customer project details.</p>
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
        title="Business Impact"
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