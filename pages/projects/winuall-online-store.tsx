import React from "react";
import Head from "next/head";
import { Header } from "../../app/components/Header";

const WinuallOnlineStore = () => {
  return (
    <div className="w-full flex items-center flex-col h-full">
      <Head>
        <title>Winuall Online Store</title>
      </Head>
      <main className="max-w-6xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5 mx-1">Winuall Online Store</h2>
          <section className="px-2">
            <p className="text-xl mt-4">
              &apos;Winuall Online Store&apos; is a dynamic e-commerce solution tailored for educational institutes to seamlessly market and sell their courses, books, and various products directly on their websites. This project encompasses a complete e-commerce flow with advanced features.
            </p>
            <p className="text-xl mt-4">
              Key highlights of this project include:
            </p>
            <ul className="list-disc list-inside text-lg mt-2 ml-4">
              <li>Implementation of Google OAuth for seamless user authentication, enhancing the user experience.</li>
              <li>Integration of Razorpay and Eazebuzz payment gateways to facilitate secure payments for users when purchasing products.</li>
              <li>Creation of a user-friendly interface for institutes to manage their product listings and online store effortlessly.</li>
              <li>Empowering institutes to maintain control over their branding and content while selling products online.</li>
            </ul>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, Styled Components
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
            <img src="/projects-assets/online-store/1.png" alt="Online Store Screenshot 1" className="mt-4" />
            <img src="/projects-assets/online-store/2.png" alt="Online Store Screenshot 2" className="mt-4" />
            <img src="/projects-assets/online-store/3.png" alt="Online Store Screenshot 3" className="mt-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default WinuallOnlineStore;
