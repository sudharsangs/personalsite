import React from "react";

export const Intro = () => {
  return (
    <div className="p-4 mt-4">
      <h1 className="sm:text-2xl text-xl">Hi, I&apos;m Sudharsan</h1>
      <p className="mt-3 sm:text-lg text-md text-slate-600">Living in Bengaluru,India</p>
      <p className="mt-3 sm:text-lg text-md">
        A passionate Frontend engineer with over two years of experience, I have
        developed user-driven features for data-intensive applications using
        React, Redux, Javascript, and Typescript. As a product builder and
        developer, I am excited about experimenting with Javascript and Web
        Development. On the side, I explore Svelte, Golang, and similar
        languages.
      </p>
      <p className="mt-3 sm:text-lg text-md">
        Currently I am working as a Web Engineer at{" "}
        <a href="https://fubo.tv/" className="text-sky-500">
          Fubo TV
        </a>
        , a live TV streaming platform based out of NYC.
      </p>
    </div>
  );
};
