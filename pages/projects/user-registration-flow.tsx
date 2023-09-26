import React from "react";
import Head from "next/head";
import { Header } from "../../app/components/Header";

const UserRegFlow = () => {
  return (
    <div className="w-full flex items-center flex-col h-full">
      <Head>
        <title>Winuall New Users Registration Flow</title>
      </Head>
      <main className="max-w-6xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 mx-1">Winuall New Users Registration Flow</h2>
          <section className="px-2">
            <p className="text-xl mt-4">
              The &quot;Winuall New Users Registration Flow&quot; project is a transformative initiative aimed at simplifying and accelerating the onboarding process for new users on the platform. This streamlined approach led to the successful onboarding of over 3000 paying users.
            </p>
            <p className="text-xl mt-4">
              Key highlights of this project include:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 ml-4">
              <li>Creation of a user-friendly landing page using Next.js.</li>
              <li>Empowering users to create their institute&apos;s website within minutes.</li>
              <li>Enabling users to upload their institute&apos;s logo for a personalized touch.</li>
              <li>Seamless onboarding process, making it easy for users to get started.</li>
            </ul>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, Next.js, Styled Components, Context API
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
            <div className="mt-4">
              <img src="/projects-assets/user-reg-flow/1.png" alt="Registration Flow Screenshot 1" className="my-2" />
              <img src="/projects-assets/user-reg-flow/2.png" alt="Registration Flow Screenshot 2" className="my-2" />
              <img src="/projects-assets/user-reg-flow/3.png" alt="Registration Flow Screenshot 3" className="my-2" />
              <img src="/projects-assets/user-reg-flow/4.png" alt="Registration Flow Screenshot 4" className="my-2" />
              <img src="/projects-assets/user-reg-flow/5.png" alt="Registration Flow Screenshot 5" className="my-2" />
              <img src="/projects-assets/user-reg-flow/6.png" alt="Registration Flow Screenshot 6" className="my-2" />
              <img src="/projects-assets/user-reg-flow/7.png" alt="Registration Flow Screenshot 7" className="my-2" />
              <img src="/projects-assets/user-reg-flow/8.png" alt="Registration Flow Screenshot 8" className="my-2" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserRegFlow;
