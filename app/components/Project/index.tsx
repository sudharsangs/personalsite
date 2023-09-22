import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export const Project = ({
  projectTitle,
  projectDescription,
  detailsPagePath,
  featuredSkills,
  projectType,
  hideAnchor,
}: ProjectProps) => {
  const router = useRouter();
  return (
    <div
      className={`${
        hideAnchor ? "" : "cursor-pointer "
      }relative bg-gray-700 px-6 pt-4 pb-4 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg sm:w-[49%] w-full`}
      onClick={() => (detailsPagePath ? router.push(detailsPagePath) : "")}
    >
      <div className="ml-2 flex flex-col h-full">
        <div className="flex justify-between">
          <h3 className="sm:text-2xl text-xl text-gray-100">{projectTitle}</h3>
          {projectType}
        </div>

        <p className="sm:text-md text-s text-gray-300">{projectDescription}</p>
        {featuredSkills}
      </div>
    </div>
  );
};

interface ProjectProps {
  projectTitle: string;
  projectDescription: string;
  detailsPagePath?: string;
  featuredSkills: ReactNode;
  projectType: ReactNode;
  hideAnchor?: boolean;
}
