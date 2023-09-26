import React from "react";
import Head from "next/head";
import { Header } from "../../app/components/Header";

const WinuallParentsModule = () => {
  return (
    <div className="w-full flex items-center flex-col h-screen">
      <Head>
        <title>Winuall Parents Module</title>
      </Head>
      <main className="max-w-6xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 mx-1">Winuall Parents Module</h2>
          <section className="px-2">
            <p className="text-xl mt-4">
              The &quot;Winuall Parents Module&quot; is a significant addition to the Winuall Learning Management System (LMS), designed to empower parents to actively monitor and support their children&apos;s educational journey. This module offers a range of features that facilitate parental involvement in their child&apos;s education.
            </p>
            <p className="text-xl mt-4">
              Key features of the Parents Module include:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 ml-4">
              <li>Viewing scores of all quizzes attended by the student, enabling parents to track academic progress.</li>
              <li>Enabling parents to purchase courses and books on behalf of their child, simplifying the educational material acquisition process.</li>
              <li>Facilitating scheduled calls with faculty members to discuss the student&apos;s performance and address concerns.</li>
              <li>Providing a messaging platform for seamless communication between parents and faculty members.</li>
            </ul>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, Styled Components
            </p>
            <p className="text-xl mt-2">
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
