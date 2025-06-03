import React from 'react';
import { Metadata } from 'next';
import { BarChart3, Building2, QrCode, LineChart, Layers, RefreshCw } from 'lucide-react';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Inventory Management | Sudharsan GS',
  description: 'A comprehensive inventory management system for manufacturing businesses',
};

export default function InventoryManagementPage() {
  const projectData = {
    title: "Inventory Management System",
    description: "A comprehensive inventory management solution built specifically for manufacturing businesses with real-time tracking, multi-location support, and intelligent forecasting.",
    type: "independent" as const,
    date: "2025",
    client: "FactoStack",
    technologies: [
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgres.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' }
    ],
    features: [
      "Real-time inventory tracking with stock movement history",
      "Multi-location warehouse management from a single interface",
      "Advanced tracking with batch numbers, serial numbers, and barcode support",
      "Data-driven demand forecasting and inventory analytics",
      "Purchase order management with automated workflows",
      "Comprehensive vendor management system",
      "Professional invoicing linked to inventory transactions",
      "Production order management with materials planning",
      "Quality control system for manufacturing processes",
      "Detailed reporting with sales and tax compliance features"
    ],
    liveUrl: "https://www.factostack.com/inventory-management",
    problemStatement: "Manufacturing businesses struggle with inventory management across multiple locations, leading to stockouts, overstocking, and production delays. Traditional inventory systems lack manufacturing-specific features and real-time visibility.",
    solution: "A specialized inventory management system designed specifically for manufacturing businesses, offering real-time tracking, multi-location support, production order management, and intelligent forecasting to optimize stock levels."
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type}
      date={projectData.date}
      client={projectData.client}
    >
      <ProjectSection title="Overview" icon={<LineChart size={24} />}>
        <p>
          The Inventory Management System is a comprehensive solution designed specifically for manufacturing businesses. 
          It offers real-time tracking of inventory across multiple locations, advanced analytics for demand forecasting, 
          and integrated production planning capabilities.
        </p>

        <p>
          Built with a modern, intuitive interface, this system simplifies complex inventory management tasks while 
          providing powerful features like batch tracking, barcode support, and quality control integration that are 
          essential for manufacturing operations.
        </p>
      </ProjectSection>

      <ProjectSection title="Problem" icon={<RefreshCw size={24} />}>
        <p>{projectData.problemStatement}</p>
      </ProjectSection>

      <ProjectSection title="Solution" icon={<Layers size={24} />}>
        <p>{projectData.solution}</p>

        <ProjectImageGallery 
          images={[
            {
              url: 'https://www.factostack.com/images/inventory-saas/inventory-dashboard.jpeg',
              alt: 'Inventory Management Dashboard',
              caption: 'Comprehensive dashboard with real-time inventory status'
            },
            {
              url: 'https://www.factostack.com/images/inventory-saas/inventory-products.jpeg',
              alt: 'Product Management',
              caption: 'Product catalog with detailed specifications and variants'
            },
            {
              url: 'https://www.factostack.com/images/inventory-saas/inventory-locations.jpeg',
              alt: 'Multi-location Management',
              caption: 'Manage inventory across multiple warehouses and locations'
            }
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Key Features" icon={<BarChart3 size={24} />}>
        <FeatureList items={projectData.features} />
      </ProjectSection>

      <ProjectSection title="Client" icon={<Building2 size={24} />}>
        <p>
          This inventory management system was developed by FactoStack, providing software solutions 
          for Indian manufacturing businesses. The system helps manufacturing companies optimize their inventory management, 
          reduce costs, and improve operational efficiency with features specifically designed for the manufacturing industry.
        </p>
      </ProjectSection>

      <ProjectSection title="Technical Details" icon={<QrCode size={24} />}>
        <p>
          The solution is built using a modern tech stack including NextJS for the full-stack framework with TypeScript for type safety, 
          and PostgreSQL for reliable data storage. The application architecture follows best practices 
          for scalability and performance, allowing it to handle large inventory databases across multiple locations.
        </p>
        
        <p>
          Key technical features include real-time data synchronization between locations, optimized database queries for 
          inventory reporting, and integration capabilities with other business systems like accounting software and 
          e-commerce platforms.
        </p>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
