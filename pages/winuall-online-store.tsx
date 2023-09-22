import Head from "next/head";
import React from "react";
import { Header } from "../app/components/Header";

export const WinuallOnlineStore = () => {
  return (
    <div className="w-full  flex items-center flex-col h-full">
      <Head>
        <title>Winuall Online Store</title>
      </Head>
      <main className="max-w-5xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5">Winuall Online Store</h2>
          <section>
            <p className="text-xl mt-4">
              Created a complete e-commerce store flow for institutes to sell
              their courses, books, and other suites of products on their own
              site. Implemented Google OAuth with the flow to give a seamless
              user authentication process. Integrated Razorpay and Eazebuzz
              payment gateways to handle payments while the user buys any
              product.
            </p>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, Styled Components
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
            <img src="/projects-assets/online-store/1.png" className="mt-4" />
            <img src="/projects-assets/online-store/2.png" className="mt-4" />
            <img src="/projects-assets/online-store/3.png" className="mt-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default WinuallOnlineStore;
