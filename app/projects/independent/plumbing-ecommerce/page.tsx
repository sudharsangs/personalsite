import React from 'react';
import { Metadata } from 'next';
import { Layers, Link as LinkIcon, FileText, Lightbulb, LineChart, Target } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Plumbing E-commerce Platform | Sudharsan GS',
  description: 'Full-featured e-commerce platform for a plumbing supply store with 300% increase in online orders',
};

export default function PlumbingEcommercePage() {
  const projectData = {
    title: "Plumbing E-commerce Platform",
    description: "A comprehensive e-commerce platform that transformed a 15-year-old physical plumbing supply store into a thriving online business with 24/7 sales availability and advanced inventory management.",
    type: "independent",
    date: "2023",
    client: "Plumbing & Hardware Supply Store",
    technologies: [
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' }
    ],
    features: [
      "Product Catalog with 500+ items including images, detailed descriptions, and bulk pricing tiers",
      "Online Ordering system with guest checkout, account-based ordering, and multiple payment options",
      "Flexible Delivery and Pickup scheduling with real-time availability",
      "Admin Dashboard with real-time inventory tracking, order management, and sales analytics",
      "Customer Portal featuring order history, contractor pricing tiers, and saved preferences",
      "Inventory Integration with seamless POS sync and automatic reorder alerts",
      "Analytics & Reporting with sales metrics, customer behavior tracking, and product performance insights",
      "Stripe payment integration for secure online transactions"
    ],
    problemStatement: "A 15-year-old physical plumbing supply store faced pandemic-driven challenges including no online sales channel, manual inventory tracking, limited after-hours sales opportunities, 40% revenue decline during lockdowns, and customer migration to online competitors.",
    solution: "A full-featured e-commerce platform that digitized the entire product catalog, integrated with existing POS systems, and provided 24/7 online ordering capabilities with real-time inventory management and comprehensive analytics.",
    systemModules: [
      {
        title: "Product Management",
        description: "Comprehensive catalog system supporting multiple product variants, bulk pricing, inventory tracking, and dynamic pricing rules for different customer tiers."
      },
      {
        title: "Order Processing",
        description: "Automated order workflow from placement to fulfillment with email notifications, payment processing, and integrated shipping/pickup scheduling."
      },
      {
        title: "Customer Accounts",
        description: "Tiered customer system with contractor pricing, order history, saved addresses, and personalized product recommendations based on purchase patterns."
      },
      {
        title: "Admin Dashboard",
        description: "Real-time operational visibility with inventory alerts, sales reporting, customer management, and performance analytics for data-driven decisions."
      }
    ],
    results: [
      "300% increase in online orders within 3 months of launch",
      "24/7 sales availability expanding revenue opportunities",
      "60% reduction in order processing time through automation",
      "40% increased average order value through personalized recommendations",
      "80% reduction in manual order entry errors"
    ],
    keyLearnings: [
      "System integration with existing POS was critical for staff adoption and seamless operations",
      "Mobile-first design essential for field contractors placing orders on-site",
      "Staff training and change management drove successful platform adoption",
      "Data analytics informed inventory optimization and marketing improvements"
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
      {/* Hero Image */}
      <div className="mb-12">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-primary/20 shadow-lg">
          <Image
            src="/projects/independent/plumbing-ecommerce/DYGUS-15.png"
            alt="Plumbing E-commerce Homepage"
            fill
            className="object-cover"
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
              className="inline-flex items-center bg-white/80 shadow-sm backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-primary/20"
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
          iconBg="bg-amber-100"
          iconColor="text-amber-700"
          iconBorder="border-amber-200"
          className="mb-6 md:mb-0"
        >
          <p className="text-muted-foreground">{projectData.problemStatement}</p>
        </ProjectSection>

        <ProjectSection
          title="The Solution"
          icon={<Target className="w-5 h-5" />}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700"
          iconBorder="border-emerald-200"
          className="mb-0"
        >
          <p className="text-muted-foreground">{projectData.solution}</p>
        </ProjectSection>
      </div>

      {/* Screenshots Grid */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-primary/20 shadow-sm">
          <Image
            src="/projects/independent/plumbing-ecommerce/DYGUS-14.png"
            alt="Product Categories"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-primary/20 shadow-sm">
          <Image
            src="/projects/independent/plumbing-ecommerce/DYGUS-0.png"
            alt="Product Detail Page"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* System Modules */}
      <ProjectSection
        title="System Modules"
        icon={<FileText className="w-5 h-5" />}
        iconBg="bg-purple-100"
        iconColor="text-purple-700"
        iconBorder="border-purple-200"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.systemModules.map((module, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-amber-700">{module.title}</h3>
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
          iconBg="bg-amber-100"
          iconColor="text-amber-700"
        />
      </ProjectSection>

      {/* More Screenshots */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative w-full h-[250px] rounded-lg overflow-hidden border border-primary/20 shadow-sm">
          <Image
            src="/projects/independent/plumbing-ecommerce/DYGUS-1.png"
            alt="Shopping Cart"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[250px] rounded-lg overflow-hidden border border-primary/20 shadow-sm">
          <Image
            src="/projects/independent/plumbing-ecommerce/DYGUS-7.png"
            alt="User Account Dashboard"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[250px] rounded-lg overflow-hidden border border-primary/20 shadow-sm">
          <Image
            src="/projects/independent/plumbing-ecommerce/DYGUS-17.png"
            alt="Admin Dashboard"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Results */}
      <ProjectSection
        title="Results & Impact"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-700"
        iconBorder="border-emerald-200"
        className="mb-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.results.map((result, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-muted-foreground">{result}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Key Learnings */}
      <ProjectSection
        title="Key Learnings"
        icon={<Lightbulb className="w-5 h-5" />}
        iconBg="bg-blue-100"
        iconColor="text-blue-700"
        iconBorder="border-blue-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.keyLearnings.map((learning, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-muted-foreground">{learning}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
