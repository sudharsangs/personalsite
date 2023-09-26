import Head from "next/head";
import React from "react";
import { Header } from "../../app/components/Header";

const MemeWizard = () => {
  return (
    <div className="w-full flex items-center flex-col h-full">
      <Head>
        <title>Meme Wizard</title>
      </Head>
      <main className="max-w-6xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 mx-1">Meme Wizard</h2>
          <section className="px-2">
            <p className="text-xl mt-4">
              "Meme Wizard" is a fun and creative web application that allows users to create and share hilarious memes with ease. With a simple and intuitive interface, it's perfect for anyone looking to add some humor to their day.
            </p>
            <p className="text-xl mt-4">
              Key features of "Meme Wizard" include:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 ml-4">
              <li>Easy meme creation: Select from a library of popular meme templates or upload your own images to create custom memes.</li>
              <li>Text customization: Add and style text captions to your memes with various fonts, colors, and sizes.</li>
              <li>Instant sharing: Share your memes on social media platforms or download them to your device for sharing anywhere.</li>
              <li>Hosted on Netlify: The project is hosted on Netlify for seamless accessibility.</li>
            </ul>
            <p className="text-xl mt-4">
              <strong>Project URL:</strong>{" "}
              <a
                href="https://memewizard.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                https://memewizard.netlify.app/
              </a>
            </p>
            <p className="text-xl mt-4">
              <strong>Github URL:</strong>{" "}
              <a
                href="https://github.com/sudharsangs/meme-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                https://github.com/sudharsangs/meme-generator
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MemeWizard;
