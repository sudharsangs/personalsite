import Head from 'next/head';
import React from 'react'
import { Header } from '../app/components/Header';

const Resume = () => {
    return (
        <div className="w-full  flex items-center flex-col h-full">
            <Head>
                <title>Sudharsan | Resume</title>
            </Head>
            <main className="max-w-6xl sm:p-10 p-4">
                <Header navContents={["home", "links", "projects"]} />
                <section className="flex flex-wrap gap-2 p-2">
                    <iframe src="https://drive.google.com/file/d/1qIjJA2fQbAxpj1Sc7mGH-GmRz2UH1W8Y/preview" style={{
                        height: "100vh",
                        width: "85vw"
                    }} allow="autoplay"></iframe>
                </section>
            </main>
        </div>
    )
}

export default Resume;
