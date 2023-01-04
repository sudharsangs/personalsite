import Link from "next/link";
import React from "react";

export const Header = ({ navContents }: HeaderProps) => {
  return (
    <header>
      <nav className="flex items-center justify-between sm:m-0 mt-3 mx-2">
        <div className="flex gap-0.5">
          {navContents.includes("projects") ? (
            <Link
              href="/projects"
              className="mx-1 sm:text-xl text-md text-sky-500"
            >
              Projects
            </Link>
          ) : null}
          {navContents.includes("resume") ? (
            <a
              className="mx-1 sm:text-xl text-md text-sky-500"
              href="https://drive.google.com/file/d/1qIjJA2fQbAxpj1Sc7mGH-GmRz2UH1W8Y/view?usp=share_link"
              target="_blank"
            >
              Resume
            </a>
          ) : null}
          {navContents.includes("home") ? (
            <div className="flex gap-0.5">
              <Link href="/" className="mx-1 sm:text-xl text-md text-sky-500">
                Home
              </Link>
            </div>
          ) : null}
        </div>

        {navContents.includes("links") ? (
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/sudharsangs/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/github.svg"
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
                src="/twitter.svg"
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
                src="/linkedin.svg"
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
                src="/calendly.svg"
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
