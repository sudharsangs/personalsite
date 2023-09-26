import Head from "next/head";
import React from "react";
import { Header } from "../../app/components/Header";

export const InstantHighlights = () => {
    return (
        <div className="w-full  flex items-center flex-col h-full min-h-screen">
            <Head>
                <title>Instant Highlights</title>
            </Head>
            <main className="max-w-6xl sm:p-10">
                <Header navContents={["projects"]} />
                <div className="px-2">
                    <h2 className="text-3xl my-5 mx-1 font-semibold">Instant Highlights</h2>
                    <section className="px-2">
                        <h3 className="text-2xl font-semibold mb-4">
                            Elevating NBA Game Viewing with Real-Time AI Highlights
                        </h3>

                        <p className="text-gray-100 mb-4 text-xl">
                            As a software engineer, I've harnessed the power of ReactJS, Emotion, and RxJS to create a groundbreaking feature for NBA fans of Fubo. This feature delivers real-time, AI-generated highlights during live games, enriching the viewing experience in unprecedented ways.
                        </p>

                        <h2 className="text-2xl font-semibold mb-2">The Challenge:</h2>
                        <p className="text-gray-100 mb-4 text-xl">
                            Live NBA games are thrilling, but fans often miss key moments. Our goal was to automate highlight detection and display these moments in real-time.
                        </p>

                        <h2 className="text-2xl font-semibold mb-2">The Technologies:</h2>
                        <ul className="list-disc pl-6 text-gray-100 mb-4 text-xl">
                            <li>ReactJS: The foundation for dynamic and responsive UI.</li>
                            <li>Emotion: Efficient CSS-in-JS styling for dynamic content.</li>
                            <li>RxJS: Key for managing real-time data streams.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mb-2">Implementation:</h2>
                        <ol className="list-decimal pl-6 text-gray-100 mb-4 text-xl">
                            <li>Real-Time Updates: RxJS managed live data, triggering UI updates for detected highlights.</li>
                            <li>React Components: Created interactive components for seamless highlight display.</li>
                            <li>Emotion Styling: Dynamically styled highlights with animations.</li>
                            <li>User Control: Included user-friendly preferences for highlight customization.</li>
                            <li>Performance Optimization: Ensured responsiveness through optimization.</li>
                        </ol>

                        <h2 className="text-2xl font-semibold mb-2">Benefits:</h2>
                        <ul className="list-disc pl-6 text-gray-100 mb-4 text-xl">
                            <li>Enhanced viewer experience with real-time highlights.</li>
                            <li>Improved game understanding through key moment detection.</li>
                            <li>Personalized viewing options for users.</li>
                            <li>Seamless and responsive performance.</li>
                        </ul>

                        <p className="text-gray-100 text-xl">
                            The project combines ReactJS, Emotion, and RxJS to create a cutting-edge NBA viewing experience. It's a testament to my technical skills, innovation, and dedication to solving real-world challenges, making sports more engaging and interactive for Fubo users.
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
                    </section>
                </div>
            </main>
        </div>
    );
};

export default InstantHighlights;
