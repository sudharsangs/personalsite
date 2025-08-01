"use client";

import Experience from "@/components/modules/experience";
import Hero from "@/components/modules/hero";
import ProjectsPreview from "@/components/modules/projects-preview";
import CTASection from "@/components/modules/cta-section";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ProjectsPreview projects={projects} />
      <Experience experiences={experiences} />
      <CTASection />
    </div>
  );
}
