import Link from 'next/link';
import React from 'react';

const GetInTouch = () => {
    return (
        <section className="bg-gray-700 shadow-xl ring-1 px-6 pt-10 pb-8  ring-white/5 sm:rounded-lg mt-6" id="get-in-touch">
            <div className='flex flex-col sm:flex-row items-start justify-center w-full'>
                <div className='flex flex-col'>
                    <h2 className="md:text-4xl text-3xl font-semibold leading-normal">Let&apos;s get <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">in touch</span></h2>
                    <p className='mt-3'>I&apos;m interested in learning about new opportunities. If you have a question or want to say hi, please don&apos;t hesitate to contact me!</p>
                </div>
                <div className="mt-8 flex items-center justify-center w-full gap-4">
                    <a
                        href="https://calendly.com/sudharsangs/call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-center bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
                    >
                        Start a Conversation
                    </a>
                    <Link
                        href="/projects"
                        className="text-white text-center bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
                    >
                        Explore My Work
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
