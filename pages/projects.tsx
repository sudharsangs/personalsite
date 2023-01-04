import Head from "next/head";
import React from "react";
import { Header } from "../app/components/Header";
import { Project } from "../app/components/Project";

export const ProjectsPage = () => {
  return (
    <div className="w-full  flex items-center flex-col bg-gradient-to-r from-slate-100 via-slate-200 to-gray-200 sm:h-screen h-full">
      <Head>
        <title>Sudharsan | Projects</title>
      </Head>
      <main className="max-w-5xl sm:p-10 p-4">
        <Header navContents={["home", "links"]} />
        <h2 className="sm:text-3xl text-xl my-5">Projects</h2>
        <section className="flex flex-wrap gap-2">
          <Project
            projectTitle={"Winuall Apps"}
            projectDescription={
              "Built a feature to make the whole platform pluggable using Micro Frontend Architecture"
            }
            detailsPagePath={"/winuall-apps"}
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> React, Styled Components,
                  Micro Frontend Architecture
                </p>
                <p className="text-md">
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
              </>
            }
            projectType={
              <p className="bg-indigo-100 h-6 flex items-center justify-center text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Full Time
              </p>
            }
          />
          <Project
            projectTitle={"Online Store"}
            projectDescription={
              "Developed Online Store for tutors to create an E-Commerce store to sell books and courses"
            }
            detailsPagePath={"/winuall-online-store"}
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> React, Styled Components,
                  Payment Gateways
                </p>
                <p className="text-md">
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
              </>
            }
            projectType={
              <p className="bg-indigo-100 h-6 flex items-center justify-center text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Full Time
              </p>
            }
          />
          <Project
            projectTitle={"Learner's module"}
            projectDescription={
              "Single-handedly implemented a learner's module where students can learn the courses purchased by them"
            }
            detailsPagePath={"/winuall-learners-module"}
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> React, Styled Components,
                  Redux
                </p>
                <p className="text-md">
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
              </>
            }
            projectType={
              <p className="bg-indigo-100 h-6 flex items-center justify-center text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Full Time
              </p>
            }
          />
          <Project
            projectTitle={"New User Onboarding Flow"}
            projectDescription={
              "Created a growth site for onboarding new users to the platform in a few clicks using NextJS"
            }
            detailsPagePath={"/user-registration-flow"}
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> React, NextJS, Styled
                  Components, Context API
                </p>
                <p className="text-md">
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
              </>
            }
            projectType={
              <p className="bg-indigo-100 h-6 flex items-center justify-center text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Full Time
              </p>
            }
          />
          <Project
            projectTitle={"Winuall Parents Module"}
            projectDescription={
              "Built a feature for parents to monitor their kids' performance"
            }
            detailsPagePath={"/winuall-parents-module"}
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> React, NextJS, Styled
                  Components, Context API
                </p>
                <p className="text-md">
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
              </>
            }
            projectType={
              <p className="bg-indigo-100 h-6 flex items-center justify-center text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Full Time
              </p>
            }
          />
          <Project
            projectTitle={"Regcheck - Gatsby Site"}
            projectDescription={
              "Built a gatsby site to view real-estate regulations of all the metropolitan cities in India"
            }
            detailsPagePath={"/regcheck"}
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> React, GatsbyJS, GraphQL
                </p>
                <p className="text-md">
                  <strong>Company:</strong>
                  <a
                    className="ml-2 text-sky-400"
                    href="https://tealindia.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Terra Economics and Analytics Labs
                  </a>
                </p>
              </>
            }
            projectType={
              <p className="bg-gray-100 h-6 flex items-center text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Internship
              </p>
            }
          />
          <Project
            projectTitle={"Printrove Admin Panel"}
            projectDescription={
              "Built an internal tool for all the employees to update inventory and monitor incoming orders"
            }
            hideAnchor
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> React, Redux, Material UI
                </p>
                <p className="text-md">
                  <strong>Company:</strong>
                  <a
                    className="ml-2 text-sky-400"
                    href="https://printrove.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Printrove
                  </a>
                </p>
              </>
            }
            projectType={
              <p className="bg-gray-100 h-6 flex items-center text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Internship
              </p>
            }
          />
          <Project
            projectTitle={"Printrove Merchant Panel"}
            projectDescription={
              "Contributed to many features for the users to build their dropshipping business"
            }
            hideAnchor
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> React, Redux, Material UI
                </p>
                <p className="text-md">
                  <strong>Company:</strong>
                  <a
                    className="ml-2 text-sky-400"
                    href="https://printrove.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Printrove
                  </a>
                </p>
              </>
            }
            projectType={
              <p className="bg-gray-100 h-6 flex items-center text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Internship
              </p>
            }
          />
          <Project
            projectTitle={"No Paper Exams"}
            projectDescription={
              "Built a landing page and contributed to the main user dashboard for generating quiz from a set of questions in a spreadsheet"
            }
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> HTML, CSS, React, Redux
                </p>
              </>
            }
            projectType={
              <p className="bg-teal-400 h-6 flex items-center text-cyan-900	 text-xs font-semibold px-2.5 py-0.5 rounded">
                Freelance
              </p>
            }
          />
          <Project
            projectTitle={"A For Atom"}
            projectDescription={
              "Built a static site to show information regarding seed balls and their advantages."
            }
            detailsPagePath="/a-for-atom"
            featuredSkills={
              <>
                <p className="text-md">
                  <strong>Featured Skills:</strong> HTML, CSS
                </p>
              </>
            }
            projectType={
              <p className="bg-teal-400 h-6 flex items-center text-cyan-900	 text-xs font-semibold px-2.5 py-0.5 rounded">
                Freelance
              </p>
            }
          />
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
