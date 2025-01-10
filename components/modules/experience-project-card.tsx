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
    <div className={cn("border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow")}>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full shadow-sm"
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
          className="text-sm text-blue-500 hover:underline mt-3 inline-block"
        >
          View Project &rarr;
        </a>
      )}
    </div>
  );
};

export default ExperienceProjectCard;
