import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, ShoppingCart, Database, Zap } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, InfoCard, OutcomeList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Winuall Online Store | Sudharsan GS',
  description: 'A multi-tenant storefront that enabled tutors to sell courses, materials, assessments, and physical products online.',
};

export default function WinuallOnlineStorePage() {
  const projectData = {
    title: "Winuall Online Store",
    description: "Built Winuall's multi-tenant commerce product, enabling tutors and coaching centers to launch branded storefronts and sell courses, study materials, assessments, and physical products.",
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
    architecture: [
      { title: "Frontend", body: "React-based storefront with dynamic theming, responsive design, and optimized for conversion. Used Redux for state management and React Router for navigation." },
      { title: "Backend", body: "Golang API server with MongoDB database, handling product management, user accounts, orders, and payment processing through secure microservices." },
      { title: "Integration", body: "Custom API gateways connecting the store with the learning platform, payment processors, and analytics services for a seamless ecosystem." },
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
        url: '/projects/winuall/winuall-store-1.png',
        alt: 'Winuall Online Store Product Listing',
        caption: 'Course catalog showing different educational products'
      },
      {
        url: '/projects/winuall/winuall-store-2.png',
        alt: 'Course Viewer Interface',
        caption: 'Detailed course viewer with interactive content and purchase options'
      },
      {
        url: '/projects/winuall/winuall-store-3.png',
        alt: 'Detailed Course Information',
        caption: 'Detailed view of a course with pricing and enrollment options'
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
              className="inline-flex items-center bg-card/80 shadow-sm rounded-full px-4 py-2 text-sm border border-primary/20"
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
        icon={<Zap className="w-5 h-5" />}
      >
        <FeatureList items={projectData.keyHighlights} />
      </ProjectSection>

      {/* Store Architecture */}
      <ProjectSection
        title="Store Architecture"
        icon={<Database className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projectData.architecture.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              {item.body}
            </InfoCard>
          ))}
        </div>
      </ProjectSection>

      {/* Features */}
      <ProjectSection
        title="Store Features"
        icon={<ShoppingCart className="w-5 h-5" />}
      >
        <FeatureList items={projectData.features} />
      </ProjectSection>

      {/* Challenges */}
      <ProjectSection
        title="Technical Challenges"
        icon={<Zap className="w-5 h-5" />}
        iconBg="bg-destructive/10"
        iconColor="text-destructive"
        iconBorder="border-destructive/20"
      >
        <FeatureList
          items={projectData.challenges}
          iconBg="bg-destructive/10"
          iconColor="text-destructive"
        />
      </ProjectSection>

      {/* Outcomes */}
      <ProjectSection
        title="Outcomes & Impact"
        icon={<BarChart className="w-5 h-5" />}
      >
        <OutcomeList items={projectData.outcomes} />
      </ProjectSection>
    </ProjectPageLayout>
  );
}
