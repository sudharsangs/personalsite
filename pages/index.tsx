import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="w-full flex items-center flex-col bg-gradient-to-r from-slate-100 via-slate-200 to-gray-200 h-full">
      <Head>
        <title>Sudharsan GS</title>
        <meta
          name="description"
          content="I am a Web Developer experienced in React and Svelte. Getting your business moving forward through code is what I can do for you."
        />
        <meta
          name="keywords"
          content="web development, full stack developer, javascript, typescript,  react, svelte, website, react developer, svelte developer, freelancer, bengaluru, india, krishnagiri, "
        />
        <meta name="author" content="Sudharsan GS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sudharsan GS" />
        <meta property="og:url" content="https://sudharsangs.in" />
        <meta
          property="og:image"
          content="https://og-image.xyz/og/Sudharsan GS/Frontend Engineer/sudharsangs.in/https/atkinson/flawlessaffinity/{{h}}ffffff/data.png"
        />
        <meta
          property="og:description"
          content="I am a Web Developer experienced in React and Svelte. Getting your business moving forward through code is what I can do for you."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-5xl sm:p-10">
        <header>
          <nav className="flex items-center justify-between	">
            <div className="flex">
              <a
                href="https://github.com/sudharsangs/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/github.svg"
                  className="h-10"
                  alt="github"
                  loading="lazy"
                />
              </a>
              <a
                href="https://twitter.com/gssudharsan"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/twitter.svg"
                  className="h-10"
                  alt="twitter"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sudharsangs/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/linkedin.svg"
                  className="h-10"
                  alt="linkedin"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="w-96" />
          </nav>
        </header>
        <section>
          <div className="flex justify-center p-5 w-full">
            <img
              src="/photo.webp"
              className="h-44 w-44 rounded-full"
              alt="sudharsan"
              loading="lazy"
            />
          </div>
          <div className="p-4 mt-4">
            <h1 className="text-3xl">Hi, I&apos;m Sudharsan</h1>
            <p className="mt-3 text-xl text-slate-600">
              Based out of Bengaluru,India
            </p>
            <p className="mt-3 text-xl">
              A passionate Frontend engineer with over two years of experience,
              I have developed user-driven features using React, Redux,
              Javascript, and Typescript. As a product builder and developer, I
              am passionate about experimenting with Javascript and Web
              Development. On the side, I explore Svelte, Golang, and similar
              languages.
            </p>
            <p className="mt-3 text-xl">
              Currently I am working as a Frontend Engineer at{" "}
              <a href="https://winuall.com" className="text-sky-500">
                Winuall
              </a>
              , helping tutors and coaching institutes create an online
              presence.
            </p>
          </div>
          <div className="mt-5 p-4">
            <h2 className="text-2xl">Skills</h2>
            <div className="flex mt-4 flex-wrap justify-center">
              <img
                src="/html.svg"
                className="h-16 mt-2 mr-1"
                alt="html"
                loading="lazy"
              />
              <img
                src="/css.svg"
                className="h-16 mt-2 mr-1"
                alt="css"
                loading="lazy"
              />
              <img
                src="/js.svg"
                className="h-16 mt-2 mr-1"
                alt="js"
                loading="lazy"
              />
              <img
                src="/react.svg"
                className="h-16 mt-2 mr-1"
                alt="react"
                loading="lazy"
              />
              <img
                src="/next-js.svg"
                className="h-16 mt-2 mr-1"
                alt="next"
                loading="lazy"
              />
              <img
                src="/nodejs.svg"
                className="h-16 mt-2 mr-1"
                alt="node"
                loading="lazy"
              />
              <img
                src="/jest.svg"
                className="h-16 mt-2 mr-1"
                alt="jest"
                loading="lazy"
              />
              <img
                src="/docker.svg"
                className="h-16 mt-2 mr-1"
                alt="docker"
                loading="lazy"
              />
              <img
                src="/go.svg"
                className="h-16 mt-2 mr-1"
                alt="go"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex justify-center w-full my-7">
            <button
              className="bg-gradient-to-r from-cyan-100 via-sky-200 to-blue-200 flex p-4 mt-4 rounded-lg font-bold"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=1qIjJA2fQbAxpj1Sc7mGH-GmRz2UH1W8Y",
                  "_blank"
                )
              }
            >
              <img
                src="/download.svg"
                className="w-8 h-8 mr-2"
                alt="download"
                loading="lazy"
              />
              Download My Resume
            </button>
          </div>
          <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg mt-6">
            <h2 className="text-2xl">Experience</h2>
            <div className="flex items-start mt-6">
              <div className="w-16 h-14 bg-slate-50 shadow-xl ring-1 ring-gray-900/5 rounded-md flex justify-center items-center">
                <img
                  src="https://uploads-ssl.webflow.com/626105cd0597e61ef48a8c6d/6300af644b8b3acedcaa7922_Favicon%2032.png"
                  alt="winuall"
                  loading="lazy"
                />
              </div>

              <div className="w-full pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">
                      Software Development Engineer 1
                    </p>
                    <div className="flex items-center mt-3">
                      <a
                        className="flex items-center text-xs text-sky-400"
                        href="https://winuall.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span className="ml-1">Winuall</span>
                      </a>
                      <p className="flex items-center text-xs text-slate-400 ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>

                        <span className="ml-1">Bengaluru</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Full Time
                    </span>
                    <p className="flex items-center text-xs text-slate-400 mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>

                      <span className="ml-1">Dec 2020 - Present</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="list-disc">
                    <li>
                      Developed{" "}
                      <a
                        href="https://hello.winuall.com/online-store"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-400"
                      >
                        Online Store
                      </a>{" "}
                      for tutors to create an E Commerce store to sell books and
                      courses using{" "}
                      <strong className="font-bold">ReactJS</strong> and
                      <strong className="font-bold">
                        &nbsp;styled-components&nbsp;
                      </strong>
                      which is used by 2000+ tutors and coaching institutes.
                    </li>
                    <li className="mt-2">
                      Built{" "}
                      <a
                        href="https://register.winuall.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-400"
                      >
                        winuall.com/register
                      </a>{" "}
                      for onboarding new users to the platform in a few clicks
                      using <strong className="font-bold">NextJS</strong> which
                      helped onboarding 3000 paying users to the platform.
                    </li>
                    <li className="mt-2">
                      Implemented optimization techniques like{" "}
                      <strong className="font-bold">Code Splitting</strong> and{" "}
                      <strong className="font-bold">Lazy Loading</strong> to
                      improve the website’s performance by 30%
                    </li>
                    <li className="mt-2">
                      Migrated legacy client rendered React application to{" "}
                      <strong className="font-bold">SSR</strong> to increase{" "}
                      <strong className="font-bold">SEO</strong> score by 60%
                    </li>
                    <li className="mt-2">
                      Set up Continuous Deployment pipeline using{" "}
                      <strong className="font-bold">Github Actions</strong> and{" "}
                      <strong className="font-bold">Docker</strong> to automate
                      the deployment process of the frontend project.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 mt-5"></div>
            <div className="flex items-start mt-6">
              <div className="w-16 h-14 bg-slate-50 shadow-xl ring-1 ring-gray-900/5 rounded-md flex justify-center items-center">
                <img
                  src="https://tealindia.in/favicon.ico"
                  className="w-9"
                  alt="teal"
                  loading="lazy"
                />
              </div>

              <div className="w-full pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">Frontend Developer - Intern</p>
                    <div className="flex items-center mt-3">
                      <a
                        className="flex items-center text-xs text-sky-400"
                        href="https://www.tealindia.in"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span className="ml-1">
                          Terra Economics and Analytics Lab
                        </span>
                      </a>
                      <p className="flex items-center text-xs text-slate-400 ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>

                        <span className="ml-1">Bengaluru</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Internship
                    </span>
                    <p className="flex items-center text-xs text-slate-400 mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>

                      <span className="ml-1">Aug 2020 - Dec 2020</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="list-disc">
                    <li>
                      Involved in building Tealcheck (B2C product) from scratch.
                    </li>
                    <li className="mt-2">
                      Created and deployed Regcheck to show real-estate
                      regulations with{" "}
                      <strong className="font-bold">Ghost CMS</strong> and{" "}
                      <strong className="font-bold">Gatsby</strong>.
                    </li>
                    <li className="mt-2">
                      Wrote E2E test cases for TEAL Terminal (B2B) using{" "}
                      <strong className="font-bold">Cypress</strong> to increase
                      test coverage to 90%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 mt-5"></div>
            <div className="flex items-start mt-6">
              <div className="w-16 h-14 bg-slate-50 shadow-xl ring-1 ring-gray-900/5 rounded-md flex justify-center items-center">
                <img
                  src="https://printrove.com/wp-content/uploads/2017/12/favicon-1.png"
                  className="w-9"
                  alt="printrove"
                  loading="lazy"
                />
              </div>

              <div className="w-full pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">Frontend Developer - Intern</p>
                    <div className="flex items-center mt-3">
                      <a
                        className="flex items-center text-xs text-sky-400"
                        href="https://printrove.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span className="ml-1">Printrove Products</span>
                      </a>
                      <p className="flex items-center text-xs text-slate-400 ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>

                        <span className="ml-1">Chennai</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Internship
                    </span>
                    <p className="flex items-center text-xs text-slate-400 mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>

                      <span className="ml-1">Jun 2020 - Jul 2020</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="list-disc">
                    <li>
                      Migrated legacy{" "}
                      <a
                        href="https://merchants.printrove.com/"
                        target="_blank"
                        className="text-sky-400"
                        rel="noreferrer"
                      >
                        {" "}
                        Merchant Panel
                      </a>{" "}
                      and Admin Panel from Angular JS to{" "}
                      <strong className="font-bold">ReactJS</strong> and{" "}
                      <strong className="font-bold">Redux</strong>.
                    </li>
                    <li className="mt-2">
                      Developed a full-fledged accessory design simulation suite
                      that 15000+ designers and Shopify merchants use.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer></footer>
      </main>
    </div>
  );
};

export default Home;
