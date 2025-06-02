import React from 'react';
import { Metadata } from 'next';
import { Book, Database, Globe, Layout } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Regcheck | Sudharsan GS',
  description: 'A comprehensive view of real estate regulations in metropolitan cities across India',
};

export default function RegcheckPage() {
  const projectData = {
    title: "Regcheck",
    description: "A revolutionary project that offers a comprehensive view of real estate regulations in metropolitan cities across India.",
    company: {
      name: "Terra Economics and Analytics Lab",
      url: "https://tealindia.in/",
      logo: "/teal.ico"
    },
    type: "work",
    date: "2020",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'GatsbyJS', icon: '/skills/gatsby.svg' },
      { name: 'GraphQL', icon: '/skills/graphql.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' }
    ],
    keyHighlights: [
      "Development of a dynamic Gatsby site for easy access to real estate regulations",
      "Integration with Ghost CMS for centralized content management",
      "Utilization of GraphQL and Gatsby to render content from CMS",
      "Custom functionality enhancements using Node.js Handlebars for CMS optimization"
    ],
    features: [
      "Comprehensive real estate regulation database for metropolitan cities",
      "Centralized content management via Ghost CMS",
      "Efficient data rendering using GraphQL and Gatsby",
      "Custom CMS enhancements with Node.js Handlebars"
    ],
    additionalImages: [
      {
        url: '/projects/internship/regcheck-1.png',
        alt: 'Regcheck Homepage',
        caption: 'Main landing page with real estate regulation information'
      },
      {
        url: '/projects/internship/regcheck-2.png',
        alt: 'Regulation Details',
        caption: 'Detailed view of real estate regulations'
      },
      {
        url: '/projects/internship/regcheck-3.png',
        alt: 'Metropolitan City Selection',
        caption: 'Interface for selecting metropolitan cities'
      },
      {
        url: '/projects/internship/regcheck-4.png',
        alt: 'Content Management',
        caption: 'Ghost CMS integration for content management'
      },
      {
        url: '/projects/internship/regcheck-5.png',
        alt: 'Analytics Dashboard',
        caption: 'Data analytics for real estate regulations'
      }
    ]
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type="work"
      date={projectData.date}
      company={projectData.company}
    >
      <div className="space-y-12">
        <ProjectSection title="Project Overview" icon={<Globe className="h-5 w-5" />}>
          <p className="text-muted-foreground">
            Regcheck is a revolutionary project that offers a comprehensive view of real estate regulations 
            in metropolitan cities across India. It was developed to provide easy access to complex real estate 
            regulations, making it easier for stakeholders to navigate the regulatory landscape.
          </p>
        </ProjectSection>

        <ProjectSection title="Key Features" icon={<Layout className="h-5 w-5" />}>
          <FeatureList items={projectData.keyHighlights} />
        </ProjectSection>

        <ProjectSection title="Technology Stack" icon={<Database className="h-5 w-5" />}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectData.technologies.map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-6 h-6 relative">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection title="Implementation Details" icon={<Book className="h-5 w-5" />}>
          <p className="text-muted-foreground mb-4">
            The project was implemented using a modern tech stack centered around Gatsby and Ghost CMS:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Gatsby Site Development:</span> Built a dynamic site 
              using Gatsby to provide fast, optimized access to real estate regulations.
            </li>
            <li>
              <span className="font-medium text-foreground">Ghost CMS Integration:</span> Implemented Ghost CMS 
              to enable centralized content management, allowing content teams to efficiently manage regulatory information.
            </li>
            <li>
              <span className="font-medium text-foreground">GraphQL Implementation:</span> Utilized GraphQL with Gatsby 
              to efficiently render content from the CMS, ensuring optimal performance.
            </li>
            <li>
              <span className="font-medium text-foreground">CMS Enhancement:</span> Developed custom functionality 
              using Node.js Handlebars to optimize the CMS for the specific needs of real estate regulation content.
            </li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Project Gallery" icon={<Layout className="h-5 w-5" />}>
          <ProjectImageGallery images={projectData.additionalImages} />
        </ProjectSection>
      </div>
    </ProjectPageLayout>
  );
}