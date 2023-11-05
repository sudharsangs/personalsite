import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Experiences } from "../app/components/Experiences";
import GetInTouch from "../app/components/GetInTouch";
import { HashnodeBlogs } from "../app/components/HashnodeBlogs";
import { Header } from "../app/components/Header";
import { Intro } from "../app/components/Intro";
import SkillsSection from "../app/components/SkillsSection";
import TechnologyList from "../app/components/Project/TechnologyList";
import { CompanyHyperLink, FullTime, Personal, Project } from "../app/components/Project";

const Home: NextPage = () => {
  const projectsArray = [
    {
      projectTitle: "Form To Sheets",
      projectDescription: "Seamlessly integrate Google Forms into websites with code snippets for multiple frameworks",
      detailsPagePath: "/projects/formtosheets",
      featuredSkills: <TechnologyList technologies={["NextJS", "TailwindCSS", "Typescript"]} />,
      imagePath: "/projects-assets/formtosheets.png",
      projectType: Personal,
    },
    {
      projectTitle: "Winuall Online Store",
      projectDescription: "Developed Online Store for tutors to create an E-Commerce store to sell books and courses",
      detailsPagePath: "/projects/winuall-online-store",
      featuredSkills: (
        <>
          <TechnologyList technologies={["React", "Styled Components", "Payment Gateways"]} />
          <CompanyHyperLink name="Winuall" url="https://winuall.com" />
        </>
      ),
      projectType: FullTime,
      imagePath: "/projects-assets/online-store/1.png",
    },
    {
      projectTitle: "New User Onboarding Flow",
      projectDescription: "Created a growth site for onboarding new users to the platform in a few clicks using NextJS",
      detailsPagePath: "/projects/user-registration-flow",
      featuredSkills: (
        <>
          <TechnologyList technologies={["React", "NextJS", "Styled Components", "Context API"]} />
          <CompanyHyperLink name="Winuall" url="https://winuall.com" />

        </>
      ),
      projectType: FullTime,
      imagePath: "/projects-assets/user-reg-flow/1.png",
    },
  ];

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
          content="https://sudharsangs.in/og-image.png"
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
          <div className="flex items-center sm:flex-row gap-5 flex-col">
            <Intro />
            <div className="flex justify-center sm:justify-end w-full">
              <Image
                src="/photo.jpeg"
                className="sm:h-48 md:h-56 sm:w-48 md:w-56 w-44 h-44 rounded-full"
                alt="sudharsan"
                loading="lazy"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-center w-full my-7"></div>
          <SkillsSection />
          <Experiences />
          <section className="my-4">
            <div className="flex my-10 items-center justify-between px-4 sm:p-0">
              <h2 className="text-2xl">Projects</h2>
              <Link href={"/projects"} className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-red-400 to-red-600 hover:underline underline-offset-4 flex items-center">View All Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="#f87171"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                >
                  <path d="M5 12h14M13 18l6-6M13 6l6 6" />
                </svg>
              </Link></div>
            <div className="flex flex-wrap justify-between gap-4	my-4">
              {projectsArray.map((project, index) => (
                <Project
                  key={index}
                  projectTitle={project.projectTitle}
                  projectDescription={project.projectDescription}
                  featuredSkills={project.featuredSkills}
                  projectType={project.projectType}
                  imagePath={project.imagePath}
                  detailsPagePath={project.detailsPagePath}
                />
              ))}
            </div>
          </section>
          <div className="flex my-10 items-center justify-between px-4 sm:p-0">
              <h2 className="text-2xl">Blogs</h2>
              <Link href={"/blogs"} className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-red-400 to-red-600 hover:underline underline-offset-4 flex items-center">View All Blogs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="#f87171"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                >
                  <path d="M5 12h14M13 18l6-6M13 6l6 6" />
                </svg>
              </Link></div>
          <HashnodeBlogs count={2} />
          <GetInTouch />
        </section>
        <footer></footer>
      </main>
    </div>
  );
};

export default Home;
