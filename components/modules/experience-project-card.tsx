import React from "react";
import { cn } from "@/lib/utils"; // Utility for conditional classnames (if you're using Shadcn's boilerplate)

interface ExperienceProjectCardProps {
  title: string;
  description: string;
  link?: string;
  techStack: string[];
}

const ExperienceProjectCard: React.FC<ExperienceProjectCardProps> = ({ title, description, link, techStack }) => {
  return (
    <div className={cn("border border-border/50 rounded-lg p-4 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-md hover:border-primary/30 hover:shadow-primary/20 transition-all duration-300")}>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-muted/40 text-muted-foreground px-2 py-1 rounded-full border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline mt-3 inline-block"
        >
          View Project &rarr;
        </a>
      )}
    </div>
  );
};

export default ExperienceProjectCard;
