import Hero from "@/components/modules/hero";
import Capabilities from "@/components/modules/capabilities";
import ProjectsPreview from "@/components/modules/projects-preview";
import WritingPreview from "@/components/modules/writing-preview";
import CTASection from "@/components/modules/cta-section";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <Capabilities />
      <ProjectsPreview projects={projects} />
      <WritingPreview />
      <CTASection />
    </main>
  );
}
