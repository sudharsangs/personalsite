import React from "react";
import Head from "next/head";
import { Header } from "../../app/components/Header";

const AForAtom = () => {
  return (
    <div className="w-full flex items-center flex-col h-full">
      <Head>
        <title>A For Atom</title>
      </Head>
      <main className="max-w-6xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 mx-1">A For Atom</h2>
          <section className="p-2 text-gray-300">
            <p className="text-xl mt-4">
              &quot;A For Atom&quot; is a project dedicated to promoting environmental awareness through the concept of seed balls and their ecological advantages.
            </p>
            <p className="text-xl mt-4">
              <strong className="text-white">Featured Skills:</strong> HTML, CSS
            </p>
            <p className="text-xl mt-4">
              Seed balls are a simple yet effective way to restore vegetation in barren or degraded areas. This static website was designed to educate visitors about the benefits of seed balls and encourage eco-friendly practices.
            </p>
            <p className="text-xl mt-4">
              The website provides comprehensive information on:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 ml-4">
              <li>The science behind seed balls and their role in reforestation.</li>
              <li>Step-by-step instructions for making seed balls.</li>
              <li>Testimonials and success stories from environmental enthusiasts.</li>
              <li>Resources and links for further exploration.</li>
            </ul>
            <p className="text-xl mt-4">
              The design of the website is visually appealing, with a focus on eco-friendly colors and elements that align with the project&apos;s environmental theme. It ensures a user-friendly experience, making information easily accessible.
            </p>
            <img src="/projects-assets/aforatom.png" alt="A For Atom Screenshot" className="mt-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default AForAtom;
