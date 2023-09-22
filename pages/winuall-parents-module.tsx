import Head from "next/head";
import React from "react";
import { Header } from "../app/components/Header";

export const WinuallParentsModule = () => {
  return (
    <div className="w-full  flex items-center flex-col h-screen">
      <Head>
        <title>Winuall Parents Module</title>
      </Head>
      <main className="max-w-5xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5">Winuall Parents Module</h2>
          <section>
            <p className="text-xl mt-4">
              Built a feature in the Winuall LMS platform for parents to monitor
              their kids&apos; performance
            </p>
            <p className="text-xl mt-4">
              The features for parents module were
              <ul className="list-disc">
                <li>View score of all quizzes attended by the student</li>
                <li>Buy courses and books on behalf of the student</li>
                <li>Schedule a call with the faculty</li>
                <li>Communicate with the faculty through messages</li>
              </ul>
            </p>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, Styled Components
            </p>
            <p className="text-xl">
              <strong>Company:</strong>
              <a
                className="ml-2 text-sky-400"
                href="https://winuall.com"
                target="_blank"
                rel="noreferrer"
              >
                Winuall
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default WinuallParentsModule;
