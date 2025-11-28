import React from 'react';
import { Metadata } from 'next';
import { Layers, Link as LinkIcon, FileText, Shield, Database, Lightbulb, LineChart } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Next.js Multitenant SaaS Boilerplate | Sudharsan GS',
  description: 'Production-ready Next.js boilerplate for building multi-tenant SaaS applications with complete tenant isolation',
};

export default function NextJSMultitenantSaaSPage() {
  const projectData = {
    title: "Next.js Multitenant SaaS Boilerplate",
    description: "A production-ready, full-stack multi-tenant SaaS boilerplate built with modern web technologies. Enables rapid development of B2B SaaS applications with complete tenant isolation, subscription management, and role-based access control.",
    type: "personal",
    date: "2025",
    githubUrl: "https://github.com/sudharsangs/nextjs-multitenant-saas-boilerplate",
    technologies: [
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' }
    ],
    coreFeatures: [
      "Complete company/tenant management with isolated data",
      "Role-based access control (ADMIN, MANAGER, STAFF, VIEWER)",
      "Multiple subscription tiers (FREE, BASIC, PRO, ENTERPRISE)",
      "Payment processing and transaction tracking",
      "JWT-based authentication with HTTP-only cookies",
      "Two-factor authentication support",
      "Comprehensive audit logging (CREATE, UPDATE, DELETE, LOGIN, LOGOUT, EXPORT, IMPORT)",
      "Granular permission system",
      "API key management with secure key/secret pairs"
    ],
    businessFeatures: [
      "Multi-tier notification system (SYSTEM, ALERT, TASK, UPDATE, BILLING)",
      "API key management framework",
      "Integration support (Payment Gateways, Email, SMS, ERP, CRM)",
      "Email verification workflows",
      "Dark mode support with per-tenant theming",
      "Built-in reporting and Excel export functionality"
    ],
    architectureHighlights: [
      {
        title: "Multi-Tenancy Architecture",
        description: "Row-level isolation with automatic company ID validation on all requests. Every database query is filtered by tenant ID, and subscriptions enforce feature access control per tier."
      },
      {
        title: "Security Best Practices",
        description: "JWT secrets in environment variables, HTTPS for HTTP-only cookies, rate limiting on API endpoints, Zod schema validation, Content Security Policy headers, comprehensive audit logs, API key rotation, and 2FA support."
      },
      {
        title: "Database Schema",
        description: "Core tables include companies, users, subscriptions, payments, notifications, auditLogs, apiKeys, integrations, and integrationLogs with comprehensive relationship management using Drizzle ORM."
      },
      {
        title: "Developer Experience",
        description: "Full TypeScript type safety, Drizzle ORM with PostgreSQL, RESTful API architecture, Docker containerization for development and deployment, and modern tooling throughout."
      }
    ],
    techStackDetails: {
      frontend: "Next.js 15, React 19, TypeScript, Tailwind CSS 4",
      backend: "Next.js API Routes (RESTful)",
      database: "PostgreSQL 15+ with Drizzle ORM",
      authentication: "JWT via jose library with HTTP-only cookies",
      uiComponents: "shadcn/ui and Radix UI primitives",
      forms: "React Hook Form with Zod validation",
      charts: "Recharts",
      icons: "Lucide React",
      notifications: "Sonner (toast notifications)"
    },
    useCases: [
      "B2B SaaS platforms requiring tenant isolation",
      "Project management tools with team collaboration",
      "CRM and customer management systems",
      "Analytics and reporting platforms",
      "Workflow automation tools",
      "Team communication and collaboration apps"
    ]
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type as 'personal' | 'independent' | 'work'}
      date={projectData.date}
      githubUrl={projectData.githubUrl}
    >
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] mb-12">
        <Image
          src="/projects/personal/multi-tenant-saas.png"
          alt="Next.js Multitenant SaaS Boilerplate"
          fill
          className="object-contain"
        />
      </div>

      {/* Tech Stack */}
      <ProjectSection
        title="Tech Stack"
        icon={<Layers className="w-5 h-5" />}
      >
        <div className="flex flex-wrap gap-3 mb-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-2 text-amber-700">Frontend</h4>
            <p className="text-sm text-muted-foreground">{projectData.techStackDetails.frontend}</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-2 text-amber-700">Backend</h4>
            <p className="text-sm text-muted-foreground">{projectData.techStackDetails.backend}</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-2 text-amber-700">Database</h4>
            <p className="text-sm text-muted-foreground">{projectData.techStackDetails.database}</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-2 text-amber-700">Authentication</h4>
            <p className="text-sm text-muted-foreground">{projectData.techStackDetails.authentication}</p>
          </div>
        </div>
      </ProjectSection>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection
          title="What is it?"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-amber-100"
          iconColor="text-amber-700"
          iconBorder="border-amber-200"
          className="mb-6 md:mb-0"
        >
          <p className="text-muted-foreground">
            A production-ready, full-stack multi-tenant SaaS boilerplate that accelerates the development
            of B2B SaaS applications. It includes complete tenant isolation, subscription management,
            role-based access control, and all the essential features needed to launch a SaaS product quickly.
          </p>
        </ProjectSection>

        <ProjectSection
          title="Why use it?"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700"
          iconBorder="border-emerald-200"
          className="mb-0"
        >
          <p className="text-muted-foreground">
            Building a SaaS application from scratch takes months of development time. This boilerplate
            provides all the foundational features—authentication, multi-tenancy, subscriptions, and more—
            so you can focus on building your unique product features instead of reinventing the wheel.
          </p>
        </ProjectSection>
      </div>

      {/* Architecture Highlights */}
      <ProjectSection
        title="Architecture Highlights"
        icon={<Database className="w-5 h-5" />}
        iconBg="bg-purple-100"
        iconColor="text-purple-700"
        iconBorder="border-purple-200"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.architectureHighlights.map((highlight, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-amber-700">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Core Features */}
      <ProjectSection
        title="Core Features"
        icon={<Shield className="w-5 h-5" />}
        iconBg="bg-blue-100"
        iconColor="text-blue-700"
        iconBorder="border-blue-200"
        className="mb-12"
      >
        <FeatureList
          items={projectData.coreFeatures}
          iconBg="bg-blue-100"
          iconColor="text-blue-700"
        />
      </ProjectSection>

      {/* Business Features */}
      <ProjectSection
        title="Business Features"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-700"
        iconBorder="border-emerald-200"
        className="mb-12"
      >
        <FeatureList
          items={projectData.businessFeatures}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700"
        />
      </ProjectSection>

      {/* Use Cases */}
      <ProjectSection
        title="Perfect For"
        icon={<LinkIcon className="w-5 h-5" />}
        iconBg="bg-amber-100"
        iconColor="text-amber-700"
        iconBorder="border-amber-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectData.useCases.map((useCase, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-muted-foreground">{useCase}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Getting Started */}
      <ProjectSection
        title="Getting Started"
        icon={<FileText className="w-5 h-5" />}
        iconBg="bg-purple-100"
        iconColor="text-purple-700"
        iconBorder="border-purple-200"
      >
        <div className="bg-gray-900 rounded-lg p-6 text-gray-100 font-mono text-sm overflow-x-auto">
          <div className="mb-4">
            <span className="text-gray-500"># Clone and setup</span>
            <br />
            <span className="text-green-400">git clone</span> https://github.com/sudharsangs/nextjs-multitenant-saas-boilerplate
            <br />
            <span className="text-green-400">cd</span> nextjs-multitenant-saas-boilerplate
            <br />
            <span className="text-green-400">cp</span> .env.example .env
          </div>
          <div className="mb-4">
            <span className="text-gray-500"># Install dependencies</span>
            <br />
            <span className="text-green-400">npm install</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-500"># Setup database</span>
            <br />
            <span className="text-green-400">npm run</span> db:migrate
          </div>
          <div>
            <span className="text-gray-500"># Start development server</span>
            <br />
            <span className="text-green-400">npm run</span> dev
          </div>
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
