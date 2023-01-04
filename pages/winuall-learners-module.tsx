import Head from "next/head";
import React from "react";
import { Header } from "../app/components/Header";

export const WinuallLearnersModule = () => {
  return (
    <div className="w-full  flex items-center flex-col bg-gradient-to-r from-slate-100 via-slate-200 to-gray-200 h-full">
      <Head>
        <title>Winuall Learners Module</title>
      </Head>
      <main className="max-w-5xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5">Winuall Learners Module</h2>
          <section>
            <p className="text-xl mt-4">
              Created a learner&apos;s module where users can watch videos, download files, attend live classes, give a quiz, read E-books and track the progress of their learning. 
            </p>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, Styled Components, Redux
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
            <img src="/projects-assets/online-store/1.png" className="mt-4" />
            <img src="/projects-assets/online-store/2.png" className="mt-4" />
            <img src="/projects-assets/online-store/3.png" className="mt-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default WinuallLearnersModule;
