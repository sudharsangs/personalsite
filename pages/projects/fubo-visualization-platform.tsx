import Head from "next/head";
import React from "react";
import { Header } from "../../app/components/Header";

export const FuboInternalTool = () => {
    return (
        <div className="w-full  flex items-center flex-col h-full min-h-screen">
            <Head>
                <title>Fubo Visualization Platform</title>
            </Head>
            <main className="max-w-6xl sm:p-10">
                <Header navContents={["projects"]} />
                <div className="px-2">
                    <h2 className="text-3xl font-semibold my-5 mx-1">Fubo Visualization Platform</h2>
                    <section className="px-2">
                        <h3 className="text-2xl font-semibold mb-4">
                            Visualization Platform for AI-Generated Sports Videos
                        </h3>

                        <p className="text-gray-100 mb-4">
                            I built visualization platform that revolutionizes the way we analyze and evaluate AI-generated sports videos and clips. This tool leverages the power of ReactJS, VideoJS, Emotion, and Firebase to streamline our processes and enhance our insights.
                        </p>

                        <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                        <ul className="list-disc pl-6 text-gray-100 mb-4">
                            <li>Effortless visualization of AI-generated sports content.</li>
                            <li>Optimized analysis and evaluation procedures.</li>
                            <li>Seamless integration with Firebase for data management.</li>
                            <li>Dynamic and user-friendly interface built with ReactJS.</li>
                            <li>Enhanced video playback experience using VideoJS.</li>
                            <li>Stylish and responsive design powered by Emoyion.</li>
                        </ul>

                        <p className="text-gray-100">
                            This tool empowers our team to make data-driven decisions and gain deeper insights into AI-generated sports content. It represents a fusion of cutting-edge technologies and user-centric design, ensuring that our analysis and evaluation procedures are more efficient and effective than ever before.
                        </p>
                        <p className="text-xl">
                            <strong className="text-white">Company:</strong>
                            <a
                                className="ml-2 text-sky-400"
                                href="https://fubo.tv"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Fubo
                            </a>
                        </p>
                        <img src="/projects-assets/internal-tool/1.jpeg" className="mt-4"/>
                        <img src="/projects-assets/internal-tool/2.jpeg" className="mt-4"/>
                        <img src="/projects-assets/internal-tool/3.jpeg" className="mt-4"/>

                    </section>
                </div>
            </main>
        </div>
    );
};

export default FuboInternalTool;
