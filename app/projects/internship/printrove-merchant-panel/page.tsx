import React from 'react';
import { Metadata } from 'next';
import { Layers, LineChart, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Printrove Merchant Panel | Sudharsan GS',
  description: 'Development of a merchant dashboard for Printrove\'s print-on-demand platform',
};

export default function PrintroveMerchantPanelPage() {
  const projectData = {
    title: "Printrove Merchant Panel",
    description: "Developed a comprehensive merchant dashboard for Printrove's print-on-demand platform, enabling sellers to efficiently manage their products, orders, and business operations.",
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
      { name: 'Redux', icon: '/skills/redux.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' }
    ],
    keyHighlights: [
      "Built a custom CMS for Printrove merchants to manage their storefront",
      "Created an intuitive product design and management interface",
      "Implemented comprehensive order tracking and fulfillment system",
      "Developed real-time analytics and business intelligence dashboard"
    ],
    features: [
      "Product upload and customization interface",
      "Order management and status tracking",
      "Sales analytics and performance metrics",
      "Customer information management",
      "Storefront customization tools",
      "Inventory management system",
      "Payment processing and financial reporting"
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
              className="inline-flex items-center bg-card/80 shadow-sm backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-primary/20"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Project Overview */}
      <ProjectSection 
        title="Project Overview" 
        icon={<ShoppingBag className="h-5 w-5" />}
      >
        <p className="text-muted-foreground">
          Printrove is a print-on-demand platform that enables merchants to create and sell custom-designed 
          products without maintaining inventory. As part of my internship, I developed the merchant panel 
          that serves as the central hub for sellers to manage their products, track orders, and analyze their 
          business performance.
        </p>
        <p className="text-muted-foreground mt-4">
          The merchant panel was built with a focus on usability and efficiency, enabling sellers to easily 
          upload designs, create product variations, manage their orders, and access comprehensive analytics 
          to make data-driven business decisions.
        </p>
      </ProjectSection>

      {/* Key Highlights */}
      <ProjectSection 
        title="Key Highlights"
        icon={<Zap className="w-5 h-5" />}
        iconBg="bg-primary/10"
        iconColor="text-primary"
        iconBorder="border-primary/20"
      >
        <FeatureList 
          items={projectData.keyHighlights} 
          iconBg="bg-primary/10"
          iconColor="text-primary"
        />
      </ProjectSection>

      {/* Features */}
      <ProjectSection 
        title="Key Features"
        icon={<ShieldCheck className="w-5 h-5" />}
        iconBg="bg-primary/10"
        iconColor="text-primary" 
        iconBorder="border-primary/20"
      >
        <FeatureList 
          items={projectData.features}
          iconBg="bg-primary/10"
          iconColor="text-primary"
        />
      </ProjectSection>

      {/* Implementation Details */}
      <ProjectSection
        title="Implementation Details"
        icon={<LineChart className="h-5 w-5" />}
        iconBg="bg-primary/10"
        iconColor="text-primary"
        iconBorder="border-primary/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-base font-semibold mb-2 text-primary">Product Design Studio</h3>
            <p className="text-muted-foreground text-sm">An intuitive interface for merchants to upload designs and apply them to various products, with real-time preview functionality.</p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-base font-semibold mb-2 text-primary">Order Management System</h3>
            <p className="text-muted-foreground text-sm">A comprehensive system for tracking orders from placement to fulfillment, with status updates and customer communication tools.</p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-base font-semibold mb-2 text-primary">Analytics Dashboard</h3>
            <p className="text-muted-foreground text-sm">Visual representation of sales data, product performance, and customer demographics to help merchants optimize their business.</p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-base font-semibold mb-2 text-primary">Storefront Customization</h3>
            <p className="text-muted-foreground text-sm">Tools for merchants to customize their online store&apos;s appearance, categories, and featured products.</p>
          </div>
        </div>
      </ProjectSection>

      {/* Outcomes */}
      <ProjectSection
        title="Outcomes"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-primary/10"
        iconColor="text-primary"
        iconBorder="border-primary/20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Successfully onboarded 100+ merchants to the platform within the first month of launch',
            'Reduced product listing time by 60% through an intuitive design interface',
            'Improved order fulfillment efficiency with real-time tracking and notification system',
            'Enhanced merchant decision-making with comprehensive analytics and reporting tools',
          ].map((outcome, index) => (
            <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-muted-foreground">{outcome}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}