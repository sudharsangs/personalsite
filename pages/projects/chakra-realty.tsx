import Head from "next/head";
import React from "react";
import { Header } from "../../app/components/Header";

export const ChakraRealty = () => {
    return (
        <div className="w-full  flex items-center flex-col h-full">
            <Head>
                <title>Chakra Realty</title>
            </Head>
            <main className="max-w-6xl sm:p-10">
                <Header navContents={["projects"]} />
                <div className="px-2">
                    <h2 className="text-3xl my-5 mx-1">Chakra Realty</h2>
                    <section className="px-2">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full  pr-4 mb-8">
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Technology Stack
                                    </h3>
                                    <p >
                                        Chakra Realty is built on a cutting-edge technology stack designed to provide a seamless and efficient real estate experience. Our tech stack includes:
                                    </p>
                                    <ul className="list-disc list-inside ml-6 mt-2">
                                        <li>Frontend: NextJS and React for responsive and fast user interfaces.</li>
                                        <li>Backend: NextJS for efficient RESTful APIs.</li>
                                        <li>Database: PostgreSQL for secure and scalable data storage.</li>
                                        <li>Data Collection: Used Python Scrapy to get information from multiple sites</li>
                                    </ul>
                                </div>
                                <div className="w-full  pr-4 mb-8">
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Scalability and Security
                                    </h3>
                                    <p>
                                        We prioritize scalability and security in our technical implementation:
                                    </p>
                                    <ul className="list-disc list-inside ml-6 mt-2">
                                        <li>Designed for high scalability to handle a large number of concurrent users.</li>
                                        <li>Implement secure authentication and authorization mechanisms.</li>
                                        <li>Data encryption in transit and at rest for enhanced security.</li>
                                    </ul>
                                </div>
                                <div className="w-full  pr-4 mb-8">
                                    <p className="text-2xl">Deployed at <a className="underline" href="https://chakrarealty.in" target="_blank" rel="noreferrer">chakrarealty.in</a></p>
                                </div>
                            </div>
                        </div>
                        <img src="/projects-assets/chakrarealty.jpeg"/>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ChakraRealty;
