import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/projects";

interface Props extends Project { index: number }

export default function ProjectCard({ title, description, image, technologies, type, path }: Props) {
  const external = Boolean(path && /^https?:\/\//.test(path));
  return (
    <article className="surface flex h-full flex-col overflow-hidden">
      <div className="relative h-48 bg-muted">
        {image ? <Image src={image} alt={`${title} interface screenshot`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /> : <div className="flex h-full items-center justify-center p-6 font-serif text-2xl text-muted-foreground">{title}</div>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{type === "independent" ? "Freelance" : type}</p>
        <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
        <p className="mt-4 text-xs text-muted-foreground">{technologies.slice(0, 3).map((tech) => tech.name).join(" · ")}</p>
        {path && <Link href={path} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="text-link mt-5 self-start">View project {external ? <ArrowUpRight aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}{external && <span className="sr-only">(opens in a new tab)</span>}</Link>}
      </div>
    </article>
  );
}
