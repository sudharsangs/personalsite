import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Experiences } from "../app/components/Experiences";
import { HashnodeBlogs } from "../app/components/HashnodeBlogs";
import { Header } from "../app/components/Header";
import { Intro } from "../app/components/Intro";

const Home: NextPage = () => {
  return (
    <div className="w-full flex items-center flex-col bg-gradient-to-r from-slate-100 via-slate-200 to-gray-200 h-full">
      <Head>
        <title>Sudharsan GS | Frontend Engineer</title>
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
        <Header navContents={["projects","resume","links"]}/>
        <section>
          <div className="flex justify-center p-5 w-full">
            <img
              src="/photo.jpeg"
              className="h-44 w-44 rounded-full"
              alt="sudharsan"
              loading="lazy"
            />
          </div>
          <Intro />
          <div className="flex justify-center w-full my-7"></div>
          <Experiences />
        </section>
        <footer></footer>
      </main>
    </div>
  );
};

export default Home;
