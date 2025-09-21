"use client";

import Hero from "@/components/modules/hero";
import ProjectsPreview from "@/components/modules/projects-preview";
import CTASection from "@/components/modules/cta-section";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ProjectsPreview projects={projects} />
      <CTASection />
    </div>
  );
}
