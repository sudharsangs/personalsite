import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCardHorizontal from "./project-card-horizontal";
import type { Projects } from "@/types/projects";

export default function ProjectsPreview({ projects }: { projects: Projects }) {
  const featured = ["factostack-platform", "molotov-program-list-pages", "quickpicks"]
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean) as Projects;
  return (
    <section className="section-block" aria-labelledby="featured-projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="featured-projects">Products built for real constraints.</h2>
        </div>
        <Link href="/projects" className="text-link">All projects <ArrowRight aria-hidden="true" /></Link>
      </div>
      <div className="mt-10 space-y-8">
        {featured.map((project, index) => <ProjectCardHorizontal key={project.slug} {...project} index={index} reverse={index % 2 === 1} />)}
      </div>
    </section>
  );
}
