import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/projects";

interface Props extends Project { index: number }

const typeLabels = {
  work: "Work project",
  personal: "Personal project",
  independent: "Freelance project",
};

export default function ProjectCard({ title, description, image, technologies, type, path }: Props) {
  const external = Boolean(path && /^https?:\/\//.test(path));
  return (
    <article className="surface flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/9] bg-muted">
        {image ? <Image src={image} alt={`${title} interface screenshot`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" /> : <div className="flex h-full items-center justify-center p-6 font-serif text-2xl text-muted-foreground">{title}</div>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{typeLabels[type]}</p>
        <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {technologies.slice(0, 3).map((tech) => (
            <li key={tech.name} className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {tech.icon && <Image src={tech.icon} alt="" width={11} height={11} className="h-2.5 w-2.5 shrink-0 object-contain" />}
              {tech.name}
            </li>
          ))}
        </ul>
        {path && <Link href={path} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="text-link mt-5 self-start">{external ? "Visit project" : "Read case study"} {external ? <ArrowUpRight aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}{external && <span className="sr-only">(opens in a new tab)</span>}</Link>}
      </div>
    </article>
  );
}
