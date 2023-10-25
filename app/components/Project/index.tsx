import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export const Project = ({
  projectTitle,
  projectDescription,
  detailsPagePath,
  featuredSkills,
  projectType,
  hideAnchor,
  imagePath
}: ProjectProps) => {
  const router = useRouter();
  return (
    <div
      className={`${hideAnchor ? "" : "cursor-pointer "
        }relative bg-gray-700  shadow-xl ring-1 ring-gray-900/5 rounded-lg sm:w-[32%] w-full overflow-hidden`}
      onClick={() => (detailsPagePath ? router.push(detailsPagePath) : "")}
    >
      {imagePath ?
        <div
          className="flex justify-center items-center w-full bg-center	bg-cover mb-4 h-60 bg-gray-300 overflow-hidden relative">
          <Image alt=""
            className="absolute"
            src={imagePath}
            width={400}
            height={400}
          />
        </div>
        :
        <div
          className="flex justify-center items-center w-full bg-center	bg-cover mb-4 h-60 bg-gray-300" />
      }
      <div className="ml-2 flex flex-col px-6 py-2 mb-2">
        <div className="flex justify-between">
          <h3 className="sm:text-2xl text-xl text-gray-100 w-3/5 overflow-hidden text-ellipsis">{projectTitle}</h3>
          {projectType}
        </div>

        <div className="sm:text-md text-s text-gray-200">{projectDescription}</div>
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
  imagePath?: string
}
