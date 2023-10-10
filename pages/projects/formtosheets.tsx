import Head from "next/head";
import React from "react";
import { Header } from "../../app/components/Header";

export const Form2Sheets = () => {
    return (
        <div className="w-full flex items-center flex-col h-full min-h-screen">
            <Head>
                <title>Form2Sheets</title>
            </Head>
            <main className="max-w-6xl sm:p-10">
                <Header navContents={["projects"]} />
                <div className="px-2">
                    <h2 className="text-3xl font-semibold my-5 mx-1">Form2Sheets</h2>
                    <section className="px-2 text-xl">
                        <h3 className="text-2xl font-semibold mb-4">
                            Seamless Integration of Google Forms into Your Website
                        </h3>

                        <p className="text-gray-100 mb-4">
                            Form2Sheets is a powerful tool designed to effortlessly embed Google Forms into your website. It leverages the capabilities of Next.js, TypeScript, and Tailwind CSS to streamline your data collection and enhance your user experience.
                        </p>

                        <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                        <ul className="list-disc pl-6 text-gray-100 mb-4">
                            <li>Seamless integration of Google Forms into your website.</li>
                            <li>Support for multiple frameworks, including React, Vue, HTML, and Svelte.</li>
                            <li>Effortless code generation for easy embedding.</li>
                            <li>Developer-friendly and user-centric design.</li>
                            <li>Real-time data integration for efficient data management.</li>
                            <li>Secure and robust infrastructure for data protection.</li>
                        </ul>

                        <p className="text-gray-100">
                            Form2Sheets empowers your website with the ability to turn Google Forms into integral components of your web application. Say goodbye to manual data entry and hello to seamless integration, all backed by modern web technologies.
                        </p>
                        <p className="text-2xl my-3">
                            <strong className="text-white">Repository:</strong>
                            <a
                                className="ml-2 text-sky-400"
                                href="https://github.com/sudharsangs/formtosheets"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Form2Sheets on GitHub
                            </a>
                        </p>
                        <p className="text-2xl my-3">
                            <strong className="text-white">Deployment:</strong>
                            <a
                                className="ml-2 text-sky-400"
                                href="https://formtosheets.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Form2Sheets Demo
                            </a>
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Form2Sheets;
