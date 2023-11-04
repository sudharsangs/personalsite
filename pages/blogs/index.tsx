import React from 'react'
import { Header } from '../../app/components/Header';
import Head from 'next/head';
import { HashnodeBlogs } from '../../app/components/HashnodeBlogs';

const BlogsPage = () => {
    return (
        <div className="w-full  flex items-center flex-col h-full min-h-[100vh]">
            <Head>
                <title>Sudharsan | Blogs</title>
            </Head>
            <main className="max-w-6xl sm:p-10 p-4">
                <Header navContents={["home", "links", "resume"]} />
                <div className="flex flex-col items-center justify-center p-7">
                    <h1 className="md:leading-tight md:text-5xl text-4xl font-semibold">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Blogs</span></h1>
                    <p className="mt-3 sm:text-lg text-md text-gray-300">Small place in the internet where I write down what I learn</p>
                </div>
                <HashnodeBlogs />
            </main>
        </div>
    )
}

export default BlogsPage;