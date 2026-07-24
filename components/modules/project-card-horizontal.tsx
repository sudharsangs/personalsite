import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/projects";

interface Props extends Project {
  index: number;
  reverse?: boolean;
}

const typeLabels = {
  work: "Work project",
  personal: "Personal project",
  independent: "Freelance project",
};

export default function ProjectCardHorizontal({ title, description, image, technologies, type, path, company, reverse = false }: Props) {
  const external = Boolean(path && /^https?:\/\//.test(path));
  return (
    <article className="surface overflow-hidden">
      <div className={`grid md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative min-h-56 bg-muted sm:min-h-72">
          {image ? (
            <Image src={image} alt={`${title} interface screenshot`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          ) : (
            <div className="flex h-full min-h-56 items-center justify-center p-8 font-serif text-3xl text-muted-foreground">{title}</div>
          )}
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-primary">
            <span>{typeLabels[type]}</span>
            {company && <span className="text-muted-foreground">{company.name}</span>}
          </div>
          <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight">{title}</h3>
          <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {technologies.slice(0, 5).map((tech) => (
              <li
                key={tech.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech.icon && (
                  <Image src={tech.icon} alt="" width={12} height={12} className="h-3 w-3 shrink-0 object-contain" />
                )}
                {tech.name}
              </li>
            ))}
          </ul>
          {path && (
            <Link href={path} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="text-link mt-6 self-start">
              {external ? "Visit project" : "Read case study"} {external ? <ArrowUpRight aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
              {external && <span className="sr-only">(opens in a new tab)</span>}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
