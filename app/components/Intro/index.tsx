import React from "react";

export const Intro = () => {
  return (
    <div className="p-4 mt-4">
      <h1 className="md:text-5xl text-4xl font-semibold leading-normal">Hey there, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Sudharsan</span></h1>
      <p className="mt-3 sm:text-lg text-md text-gray-300">Living in Bengaluru,India</p>
      <p className="mt-3 sm:text-lg text-md text-gray-300">
        Experienced Software engineer with 2+ years, specializing in user-centric features and passionate about web development.
      </p>
      <div className="mt-8 flex items-center justify-start w-full gap-4">
        <a
          href="#get-in-touch"
          className="text-white bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-ou"
        >
          Get In Touch
        </a>
        <a
          href="/projects"
          className="text-white bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
        >
          Explore My Work
        </a>
      </div>
    </div>
  );
};
