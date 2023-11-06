import Link from "next/link";
import React from "react";

export const Header = ({ navContents }: HeaderProps) => {
  return (
    <header>
      <nav className="flex items-center justify-between sm:m-0 mt-3 mx-2">
        <div className="flex gap-0.5 bg-slate-800 shadow-xl ring-1 ring-gray-900/5  px-4 py-1 rounded-full">
          {navContents.includes("home") ? (
            <div className="flex gap-0.5">
              <Link href="/" className="mx-1 sm:text-xl text-md text-gray-100 hover:text-sky-200">
                Home
              </Link>
            </div>
          ) : null}
          {navContents.includes("projects") ? (
            <Link
              href="/projects"
              className="mx-1 sm:text-xl text-md text-gray-100 hover:text-sky-200"
            >
              Projects
            </Link>
          ) : null}
          {navContents.includes("resume") ? (
            <Link
              className="mx-1 sm:text-xl text-md text-gray-100 hover:text-sky-200"
              href="/resume"
            >
              Resume
            </Link>
          ) : null}

        </div>

        {navContents.includes("links") ? (
          <div className="flex items-center gap-1 bg-slate-50 shadow-xl ring-1 ring-gray-900/5  px-4 py-1 rounded-full">
            <a
              href="https://github.com/sudharsangs/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/social/github.svg"
                className="sm:h-10 h-8"
                alt="github"
                loading="lazy"
              />
            </a>
            <a
              href="https://twitter.com/gssudharsan"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/social/twitter.svg"
                className="sm:h-10 h-8"
                alt="twitter"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sudharsangs/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/social/linkedin.svg"
                className="sm:h-10 h-8"
                alt="linkedin"
                loading="lazy"
              />
            </a>
            <a
              href="https://calendly.com/sudharsangs/call"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/social/calendly.svg"
                className="sm:h-9 h-7"
                alt="calendly"
                loading="lazy"
              />
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

type NavContent = "home" | "projects" | "resume" | "links";

interface HeaderProps {
  navContents: NavContent[];
}
