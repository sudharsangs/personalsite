import React from "react";
import Head from "next/head";
import { Header } from "../../app/components/Header";

const WinuallLearnersModule = () => {
  return (
    <div className="w-full flex items-center flex-col h-full">
      <Head>
        <title>Winuall Learners Module</title>
      </Head>
      <main className="max-w-6xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 mx-1">Winuall Learners Module</h2>
          <section className="px-2">
            <p className="text-xl mt-4">
              The "Winuall Learners Module" is a comprehensive platform empowering users to enhance their learning experience through a variety of resources and interactive features. Users can access videos, download files, attend live classes, take quizzes, read e-books, and monitor their learning progress—all in one place.
            </p>
            <p className="text-xl mt-4">
              Key highlights of this project include:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 ml-4">
              <li>Creation of a user-friendly learner's module with a wide range of learning resources.</li>
              <li>Implementation of interactive features such as live classes and quizzes for an engaging learning experience.</li>
              <li>Incorporation of user tracking capabilities to help learners monitor their progress and achievements.</li>
            </ul>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, Styled Components, Redux
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
            <img src="/projects-assets/learners-module/1.png" alt="Learners Module Screenshot 1" className="mt-4" />
            <img src="/projects-assets/learners-module/2.png" alt="Learners Module Screenshot 2" className="mt-4" />
            <img src="/projects-assets/learners-module/3.png" alt="Learners Module Screenshot 3" className="mt-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default WinuallLearnersModule;
