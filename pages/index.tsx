import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Experiences } from "../app/components/Experiences";
import GetInTouch from "../app/components/GetInTouch";
import { HashnodeBlogs } from "../app/components/HashnodeBlogs";
import { Header } from "../app/components/Header";
import { Intro } from "../app/components/Intro";
import Services from "../app/components/Services";
import SkillsSection from "../app/components/SkillsSection";

const Home: NextPage = () => {
  return (
    <div className="w-full flex items-center flex-col h-full font-inter">
      <Head>
        <title>Sudharsan GS</title>
        <meta
          name="description"
          content="I am a Web Developer experienced in React and Svelte. Getting your business moving forward through code is what I can do for you."
        />
        <meta
          name="keywords"
          content="web development, full stack developer, javascript, typescript,  react, svelte, website, react developer, svelte developer, freelancer, bengaluru, india, krishnagiri,sudarshan, sudharshan"
        />
        <meta name="author" content="Sudharsan GS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sudharsan GS" />
        <meta property="og:url" content="https://sudharsangs.in" />
        <meta
          property="og:image"
          content="https://sudharsangs.in/og-image.jpeg"
        />
        <meta
          property="og:description"
          content="I am a Web Developer experienced in React and Svelte. Getting your business moving forward through code is what I can do for you."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-6xl sm:p-10">
        <Header navContents={["projects", "resume", "links"]} />
        <section>
          <div className="flex items-center sm:flex-row flex-col">
            <Intro />
            <div className="flex justify-center p-5 w-full">
              <Image
                src="/photo.jpeg"
                className="h-44 w-44 rounded-full"
                alt="sudharsan"
                loading="lazy"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-center w-full my-7"></div>
          <SkillsSection />
          <Services />
          <Experiences />
          <GetInTouch />
        </section>
        <footer></footer>
      </main>
    </div>
  );
};

export default Home;
