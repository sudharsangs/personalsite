"use client";

import Experience from "@/components/modules/experience";
import Hero from "@/components/modules/hero";
import ProjectsSection from "@/components/modules/projects-section";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience experiences={experiences} />
      <ProjectsSection projects={projects} />
    </div>
  );
}
