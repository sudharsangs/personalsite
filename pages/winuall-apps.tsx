import Head from "next/head";
import React from "react";
import { Header } from "../app/components/Header";

export const WinuallApps = () => {
  return (
    <div className="w-full  flex items-center flex-col bg-gradient-to-r from-slate-100 via-slate-200 to-gray-200 h-screen">
      <Head>
        <title>Winuall Apps</title>
      </Head>
      <main className="max-w-5xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5">Winuall Apps</h2>
          <section>
            <p className="text-xl mt-4">
              Built a feature to make the whole platform pluggable using Micro
              Frontend Architecture which can help in integrate any Single Page
              Application become part of the main project and helped developers
              write federated code which in turn increased developer experience.
              Built plugins like Google Analytics, Facebook Pixel, Google Drive
              and custom user facing plugins for users to make integrations
              easier.
            </p>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, Styled Components, Micro
              Frontends
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
            <img src="/projects-assets/winuall-apps/1.png" className="mt-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default WinuallApps;
