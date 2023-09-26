import React from "react";
import Head from "next/head";
import { Header } from "../../app/components/Header";

const WinuallApps = () => {
  return (
    <div className="w-full flex items-center flex-col min-h-screen h-full">
      <Head>
        <title>Winuall Apps</title>
      </Head>
      <main className="max-w-6xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 mx-1">Winuall Apps</h2>
          <section>
            <p className="text-xl mt-4">
              "Winuall Apps" represents a transformative project that introduced the concept of Micro Frontend Architecture to the platform, making it highly pluggable and extensible. This architectural innovation allowed the integration of various Single Page Applications (SPAs) into the main project seamlessly.
            </p>
            <p className="text-xl mt-4">
              Key accomplishments and contributions include:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 ml-4">
              <li>Implementation of Micro Frontend Architecture to enable the integration of external SPAs.</li>
              <li>Development of federated code to enhance the developer experience.</li>
              <li>Creation of essential plugins such as Google Analytics, Facebook Pixel, Google Drive integration, and user-facing plugins for simplified integrations.</li>
            </ul>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, Styled Components, Micro Frontends
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
            <img src="/projects-assets/winuall-apps/1.png" alt="Winuall Apps Screenshot 1" className="mt-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default WinuallApps;
