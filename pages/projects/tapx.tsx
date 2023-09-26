import Head from "next/head";
import React from "react";
import { Header } from "../../app/components/Header";

const BrowserExtension = () => {
  return (
    <div className="w-full flex items-center flex-col h-full">
      <Head>
        <title>Tapx</title>
      </Head>
      <main className="max-w-6xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 mx-1">Tapx</h2>
          <section className="px-2">
            <p className="text-xl mt-4">
              The &quot;Tapx&quot; is a simple yet powerful tool designed to enhance your online shopping experience on Amazon.in. With this browser extension, you can search for products from Amazon.in directly from any webpage. It provides quick access to the top Amazon.in search results for selected text on the webpage.
            </p>
            <p className="text-xl mt-4">
              Key features of this browser extension include:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 ml-4">
              <li>Effortless searching: Simply select text on any webpage, right-click, and choose the &quot;Search on Amazon&quot; option to view relevant products.</li>
              <li>Top results: Instantly access the top Amazon.in search results to find the products you&apos;re looking for.</li>
              <li>Powered by Svelte: The frontend of this extension is built with Svelte for a smooth and responsive user interface.</li>
              <li>Backend with Go Fiber and Colly: Utilizes Go Fiber and Colly for efficient backend processing, ensuring accurate and up-to-date search results.</li>
            </ul>
            <p className="text-xl mt-4">
              <strong>Featured Technologies:</strong> Svelte, Go Fiber, Colly
            </p>
             <p className="text-xl mt-4">
              GitHub Repository:{" "}
              <a
                href="https://github.com/sudharsangs/tapx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                https://github.com/sudharsangs/tapx
              </a>
            </p>
            <img src="/projects-assets/tapx.png" className="mt-4"/>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BrowserExtension;
