"use client";

import Experience from "@/components/experience";
import Hero from "@/components/hero";
import ProjectsSection from "@/components/projects-section";
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
