import React, { Children } from "react";

export const Experience = ({
  companyName,
  companyLogo,
  companyWebsite,
  title,
  location,
  employmentType,
  employmentPeriod,
  children,
}: ExperienceProps) => {
  const renderEmploymentLabel = () => {
    switch (employmentType) {
      case "Internship":
        return (
          <div className="text-right">
            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Internship
            </span>
            <p className="flex items-center text-xs text-slate-400 mt-3">
              {employmentPeriod}
            </p>
          </div>
        );
      case "Full Time":
        return (
          <div className="text-right">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {employmentType}
            </span>
            <p className="flex items-center text-xs text-slate-400 mt-3">
              {employmentPeriod}
            </p>
          </div>
        );
    }
  };
  return (
    <div className="flex items-start mt-6">
      <div className="w-16 h-14 bg-slate-50 shadow-xl ring-1 ring-gray-900/5 rounded-md flex justify-center items-center">
        <img src={companyLogo} alt={companyName} loading="lazy" className="px-2"/>
      </div>

      <div className="w-full pl-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-semibold">{title}</p>
            <div className="flex items-center mt-3">
              <a
                className="flex items-center text-xs text-sky-400"
                href={companyWebsite}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="ml-1">{companyName}</span>
              </a>
              <p className="flex items-center text-xs text-slate-400 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>

                <span className="ml-1">{location}</span>
              </p>
            </div>
          </div>
          {renderEmploymentLabel()}
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

interface ExperienceProps {
  companyName: string;
  companyLogo: string;
  companyWebsite: string;
  employmentPeriod: string;
  title: string;
  location: string;
  employmentType: "Full Time" | "Internship";
  children?: JSX.Element;
}
