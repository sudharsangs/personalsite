import React from "react";
import Head from "next/head";
import { Header } from "../app/components/Header";

export const AForAtom = () => {
  return (
    <div className="w-full  flex items-center flex-col h-full">
      <Head>
        <title>A For Atom</title>
      </Head>
      <main className="max-w-5xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 mx-1">A For Atom</h2>
          <section className="p-2 text-gray-300">
            <p className="text-xl mt-4">
              Built a static site to show information regarding seed balls and their advantages.
            </p>
            <p className="text-xl mt-4">
              <strong className="text-white">Featured Skills:</strong> HTML, CSS
            </p>
            <img src="/projects-assets/aforatom.png" className="mt-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default AForAtom;
