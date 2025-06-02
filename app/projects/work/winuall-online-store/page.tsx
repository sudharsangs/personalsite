import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, ShoppingCart, Database, Zap } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Winuall Online Store | Sudharsan GS',
  description: 'Development of Winuall\'s e-commerce platform for educational content',
};

export default function WinuallOnlineStorePage() {
  const projectData = {
    title: "Winuall Online Store",
    description: "Developed Winuall's e-commerce platform enabling coaching centers to sell courses, study materials, and assessments online.",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg"
    },
    type: "work",
    date: "2021-2022",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Redux', icon: '/skills/redux.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' }
    ],
    keyHighlights: [
      "Built a comprehensive e-commerce solution tailored for educational products",
      "Implemented secure payment processing with multiple gateway integrations",
      "Created an intuitive product management system for coaching centers",
      "Developed analytics dashboard for tracking sales and customer behavior",
      "Integrated with the learning platform for seamless post-purchase access"
    ],
    features: [
      "Course and digital product listings with rich media support",
      "Secure checkout process with multiple payment options",
      "Discount and coupon management system",
      "Custom storefront branding for each coaching center",
      "Real-time inventory management for limited-seat courses",
      "Automated fulfillment and access provisioning",
      "Sales analytics and customer insights dashboard"
    ],
    challenges: [
      "Creating a unified product management system for diverse educational content types",
      "Implementing secure, compliant payment processing across different regions",
      "Optimizing the store performance for high-traffic sale events",
      "Ensuring seamless integration between the store and learning platform"
    ],
    outcomes: [
      "Enabled 500+ coaching centers to digitize and sell their educational content",
      "Processed over ₹10 million in transactions within the first six months",
      "Achieved 99.9% uptime during major sale events with thousands of concurrent users",
      "Reduced average checkout time by 40% through UI/UX optimizations"
    ],
    images: [
      {
        url: '/projects/winuall/online-store-1.png',
        alt: 'Winuall Online Store Product Listing',
        caption: 'Course catalog showing different educational products'
      },
      {
        url: '/projects/winuall/online-store-2.png',
        alt: 'Store Management Dashboard',
        caption: 'Admin interface for managing products and sales'
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

      {/* Store Architecture */}
      <ProjectSection 
        title="Store Architecture"
        icon={<Database className="w-5 h-5" />}
        iconBg="bg-purple-900/20"
        iconColor="text-purple-400" 
        iconBorder="border-purple-800/30"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Frontend</h3>
            <p className="text-gray-300">React-based storefront with dynamic theming, responsive design, and optimized for conversion. Used Redux for state management and React Router for navigation.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Backend</h3>
            <p className="text-gray-300">Node.js API server with MongoDB database, handling product management, user accounts, orders, and payment processing through secure microservices.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Integration</h3>
            <p className="text-gray-300">Custom API gateways connecting the store with the learning platform, payment processors, and analytics services for a seamless ecosystem.</p>
          </div>
        </div>
      </ProjectSection>

      {/* Features */}
      <ProjectSection 
        title="Store Features"
        icon={<ShoppingCart className="w-5 h-5" />}
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

      {/* Challenges */}
      <ProjectSection 
        title="Technical Challenges"
        icon={<Zap className="w-5 h-5" />}
        iconBg="bg-red-900/20"
        iconColor="text-red-400" 
        iconBorder="border-red-800/30"
        className="mb-12"
      >
        <FeatureList 
          items={projectData.challenges}
          iconBg="bg-red-900/20"
          iconColor="text-red-400"
        />
      </ProjectSection>

      {/* Outcomes */}
      <ProjectSection 
        title="Outcomes & Impact"
        icon={<BarChart className="w-5 h-5" />}
        iconBg="bg-emerald-900/20"
        iconColor="text-emerald-500" 
        iconBorder="border-emerald-800/20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectData.outcomes.map((outcome, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <p className="text-gray-300">{outcome}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}