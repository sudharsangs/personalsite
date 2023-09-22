import Head from "next/head";
import React from "react";
import { Header } from "../app/components/Header";

export const UserRegFlow = () => {
  return (
    <div className="w-full flex items-center flex-col h-full">
      <Head>
        <title>Winuall New Users Registration Flow</title>
      </Head>
      <main className="max-w-5xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5">Winuall New Users Registration Flow</h2>
          <section>
            <p className="text-xl mt-4">
              Created a landing page for onboarding new users to the platform in
              a few clicks using NextJS which helped onboarding 3000 paying
              users to the platform
            </p>
            <p className="text-xl mt-4">
              Users can upload their logo and create their own website for their
              institute in minutes.{" "}
            </p>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, NextJS, Styled
              Components, Context API
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
            <img src="/projects-assets/user-reg-flow/1.png" className="mt-4" />
            <img src="/projects-assets/user-reg-flow/2.png" className="mt-4" />
            <img src="/projects-assets/user-reg-flow/3.png" className="mt-4" />
            <img src="/projects-assets/user-reg-flow/4.png" className="mt-4" />
            <img src="/projects-assets/user-reg-flow/5.png" className="mt-4" />
            <img src="/projects-assets/user-reg-flow/6.png" className="mt-4" />
            <img src="/projects-assets/user-reg-flow/7.png" className="mt-4" />
            <img src="/projects-assets/user-reg-flow/8.png" className="mt-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserRegFlow;
