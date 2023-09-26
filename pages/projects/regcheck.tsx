import React from "react";
import Head from "next/head";
import { Header } from "../../app/components/Header";

const Regcheck = () => {
  return (
    <div className="w-full flex items-center flex-col h-full">
      <Head>
        <title>Regcheck</title>
      </Head>
      <main className="max-w-6xl sm:p-10 text-gray-300">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 text-white mx-1">Regcheck</h2>
          <section className="px-2">
            <p className="text-xl mt-4">
              &quot;Regcheck&quot; is a revolutionary project that offers a comprehensive view of real estate regulations in metropolitan cities across India.
            </p>
            <p className="text-xl mt-4">
              The key features and achievements of this project include:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 ml-4">
              <li>Development of a dynamic Gatsby site for easy access to real estate regulations.</li>
              <li>Integration with Ghost CMS for centralized content management.</li>
              <li>Utilization of GraphQL and Gatsby to render content from CMS, enabling content teams to manage information efficiently.</li>
              <li>Custom functionality enhancements using Node.js Handlebars for CMS optimization.</li>
            </ul>
            <p className="text-xl mt-4">
              <strong className="text-white">Featured Skills:</strong> React, GatsbyJS, GraphQL
            </p>
            <p className="text-xl mt-2">
              <strong className="text-white">Company:</strong>
              <a
                className="ml-2 text-sky-400"
                href="https://tealindia.in"
                target="_blank"
                rel="noreferrer"
              >
                Terra Economics and Analytics Lab
              </a>
            </p>
            <div className="mt-4">
              <img src="/projects-assets/regcheck/1.png" alt="Regcheck Screenshot 1" className="my-2" />
              <img src="/projects-assets/regcheck/2.png" alt="Regcheck Screenshot 2" className="my-2" />
              <img src="/projects-assets/regcheck/3.png" alt="Regcheck Screenshot 3" className="my-2" />
              <img src="/projects-assets/regcheck/4.png" alt="Regcheck Screenshot 4" className="my-2" />
              <img src="/projects-assets/regcheck/5.png" alt="Regcheck Screenshot 5" className="my-2" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Regcheck;
