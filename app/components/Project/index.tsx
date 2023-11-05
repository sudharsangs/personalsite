import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export const FullTime = <p className="bg-indigo-100 h-6 flex items-center justify-center text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
  Full Time
</p>

export const Freelance = <p className="bg-teal-400 h-6 flex items-center text-cyan-900 text-xs font-semibold px-2.5 py-0.5 rounded">
  Freelance
</p>

export const internship = <p className="bg-gray-100 h-6 flex items-center text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
  Internship
</p>

export const Personal =
  <p className="bg-blue-200 h-6 flex items-center justify-center text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
    Personal
  </p>

export const CompanyHyperLink = ({ name, url }: { name: string, url: string }) =>
  <div className="text-md flex justify-end mt-4">
    <a className="text-white text-center bg-blue-500 hover:bg-blue-600 rounded-sm px-3 text-md transition duration-300 ease-in-out" href={url} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">
      {name}
    </a>
  </div>

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
          className="flex justify-center items-center w-full bg-center	bg-cover mb-4 h-60 bg-gray-700 overflow-hidden relative">
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
          <h3 className="sm:text-2xl text-xl text-gray-100 font-semibold w-3/5 overflow-hidden text-ellipsis">{projectTitle}</h3>
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
