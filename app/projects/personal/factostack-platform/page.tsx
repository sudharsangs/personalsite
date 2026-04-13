import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import {
  Layers,
  Link as LinkIcon,
  FileText,
  Lightbulb,
  LineChart,
  Target,
} from "lucide-react";
import ProjectPageLayout, {
  FeatureList,
  InfoCard,
  OutcomeList,
  ProjectImageGallery,
  ProjectSection,
} from "@/components/modules/project-page-layout";

export const metadata: Metadata = {
  title: "FactoStack Manufacturing Platform | Sudharsan GS",
  description:
    "A product engineering case study on building FactoStack for Indian MSMEs across production, inventory, procurement, GST, compliance, and owner-level visibility.",
};

const technologies = [
  { name: "React", icon: "/skills/react.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "TanStack Router", icon: "/skills/tanstack.png" },
  { name: "NestJS", icon: "/skills/nest-js.svg" },
  { name: "PostgreSQL", icon: "/skills/postgres.svg" },
  { name: "Amazon Lightsail Instance", icon: "/skills/lightsail.svg" },
  { name: "Amazon Lightsail DB", icon: "/skills/lightsail.svg" },
  { name: "Amazon Lightsail Storage", icon: "/skills/lightsail.svg" },
  { name: "Docker", icon: "/skills/docker.svg" },
  { name: "AWS ECR", icon: "/skills/ecr.svg" },
];

const aiTools = [
  { name: "Claude Code", icon: "/skills/claude.svg" },
  { name: "Codex", icon: "/skills/codex.png" },
];

const features = [
  "Sales workflows for quotes, customers, sales orders, and quote uploads inside the same operating system.",
  "Inventory workflows for items, stock, warehouses, batches, transactions, and scrap so factory teams can track material movement in one place.",
  "Production workflows for BOMs, production orders, WIP tracking, job cards, QR scanning, and material variance reporting.",
  "Finance workflows for invoices, payments, receivables aging, profit and loss, GSTR-1 export, and GST-aware reporting.",
  "Procurement workflows for vendors, purchase orders, ITC verification, and MSME 45-day payment tracking.",
  "Tenant-aware onboarding, feature flags, executive dashboards, and role-based views that let the same product fit different factory setups.",
];

const highlights = [
  {
    title: "Built around real MSME constraints",
    description:
      "The product engineering work goes beyond generic ERP screens. The implemented routes cover Indian factory issues such as MSME payment deadlines, ITC risk, GST exports, receivables aging, and lender-style credit scoring.",
  },
  {
    title: "Operator and owner workflows in one app",
    description:
      "The same platform handles shop-floor execution and management visibility: QR job card actions, WIP and variance dashboards for operators, plus executive, finance, and procurement views for owners.",
  },
  {
    title: "Tenant-aware product foundation",
    description:
      "The app uses a React and TypeScript client with TanStack Router and React Query, backed by NestJS and TypeORM, with tenant onboarding and feature-flag controls to support different plans and module combinations.",
  },
];

const results = [
  "The product is still early-stage, so I describe it as a platform in validation rather than claiming scaled business impact that does not exist yet.",
  "Mapped six factory workflow domains into one product without copying generic ERP patterns. The scope came from real constraints: GST exports, MSME payment deadlines, ITC tracking, receivables aging.",
  "Built a tenant-aware architecture so different factory configurations can onboard without rebuilding core flows.",
  "Validated that Indian MSME compliance requirements need product-level design decisions, not just UI implementation.",
];

const screenshots = [
  {
    url: "/projects/personal/factostack-platform/executive-dashboard.png",
    alt: "FactoStack executive dashboard",
    caption:
      "Owner-level summary across revenue, production, approvals, and top customers.",
  },
  {
    url: "/projects/personal/factostack-platform/production-dashboard.png",
    alt: "FactoStack production dashboard",
    caption:
      "Production-specific KPIs and throughput views for order execution.",
  },
  {
    url: "/projects/personal/factostack-platform/inventory-dashboard.png",
    alt: "FactoStack inventory dashboard",
    caption:
      "Inventory visibility with category-level values and low-stock alerts.",
  },
  {
    url: "/projects/personal/factostack-platform/purchase-orders.png",
    alt: "FactoStack purchase orders screen",
    caption:
      "Procurement workflows with PO tracking and ITC/MSME-related signals.",
  },
];

export default function FactoStackPlatformPage() {
  return (
    <ProjectPageLayout
      title="FactoStack Manufacturing Platform"
      description="The core product behind FactoStack: a product engineering effort focused on Indian MSME manufacturers who need production, inventory, procurement, GST, and owner visibility in one operating system."
      type="personal"
      date="2025-2026"
      liveUrl="https://app.factostack.com"
    >
      <div className="relative w-full h-[280px] md:h-[380px] mb-16 rounded-2xl overflow-hidden border border-primary/20 shadow-lg bg-slate-50">
        <Image
          src="/projects/personal/factostack-platform/executive-dashboard.png"
          alt="FactoStack executive dashboard"
          fill
          className="object-cover object-top"
        />
      </div>

      <ProjectSection title="Tech Stack" icon={<Layers className="w-5 h-5" />}>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center bg-white shadow-sm rounded-full px-4 py-2 text-sm border border-border/60"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={16}
                height={16}
                className="mr-2"
              />
              <span className="text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
          React + TypeScript client with TanStack Router and React Query, NestJS + TypeORM backend for operational and compliance workflows, deployed on Amazon Lightsail with Docker images shipped through AWS ECR.
        </p>
      </ProjectSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <ProjectSection
          title="The Problem"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-accent/10"
          iconColor="text-accent"
          iconBorder="border-accent/20"
          className="mb-0"
        >
          <p className="text-muted-foreground leading-relaxed">
            Indian MSMEs often run core factory work across Excel sheets,
            WhatsApp messages, paper slips, and separate accounting tools. In
            the platform repo, that pain shows up in the workflows I chose to
            build: WIP tracking, QR job cards, material variance, MSME payment
            compliance, ITC verification, receivables aging, GST exports, and
            owner dashboards.
          </p>
        </ProjectSection>

        <ProjectSection
          title="The Solution"
          icon={<Target className="w-5 h-5" />}
          className="mb-0"
        >
          <p className="text-muted-foreground leading-relaxed">
            I turned those operational gaps into a tenant-aware product.
            FactoStack brings together quotes, orders, stock, procurement,
            production, invoicing, finance, and compliance dashboards so owners
            and operators can work from the same system instead of stitching
            status together manually.
          </p>
        </ProjectSection>
      </div>

      <ProjectSection
        title="Core Modules"
        icon={<LinkIcon className="w-5 h-5" />}
      >
        <FeatureList items={features} />
      </ProjectSection>

      <ProjectSection
        title="Implementation Highlights"
        icon={<FileText className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((highlight) => (
            <InfoCard key={highlight.title} title={highlight.title}>
              {highlight.description}
            </InfoCard>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection
        title="AI-Assisted Engineering"
        icon={<FileText className="w-5 h-5" />}
        iconBg="bg-secondary"
        iconColor="text-foreground/70"
        iconBorder="border-border/60"
      >
        <div className="flex flex-wrap gap-3 mb-4">
          {aiTools.map((tool) => (
            <div
              key={tool.name}
              className="inline-flex items-center bg-white shadow-sm rounded-full px-4 py-2 text-sm border border-border/60"
            >
              <Image
                src={tool.icon}
                alt={tool.name}
                width={16}
                height={16}
                className="mr-2"
              />
              <span className="text-muted-foreground">{tool.name}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          I used Claude Code and Codex as AI-assisted engineering tools while
          building the platform. They helped me move faster on repetitive
          implementation work, route scaffolding, refactors, and edge-case
          exploration across modules, while product decisions, tradeoffs, and
          final code review stayed with me.
        </p>
      </ProjectSection>

      <ProjectSection
        title="Selected Screens"
        icon={<Layers className="w-5 h-5" />}
      >
        <ProjectImageGallery images={screenshots} columns={2} />
      </ProjectSection>

      <ProjectSection
        title="Current Product Status"
        icon={<LineChart className="w-5 h-5" />}
      >
        <OutcomeList items={results} />
      </ProjectSection>
    </ProjectPageLayout>
  );
}
