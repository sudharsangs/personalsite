import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Header } from '../../app/components/Header'
import Head from 'next/head'
import { fetchPostFromSlug } from '../../app/api'

const BlogURLPage = () => {
    const router = useRouter();
    const [postInfo, setPostInfo] = useState<PostInfo>({
        title: "",
        content: {
            html: "",
            markdown: ""
        },
        brief: ""
    })
    const getPostInfo = async () => {
        if (router.query && router.query.slug && router.query.slug?.length > 0 && (router.query.slug instanceof String || typeof router.query.slug === "string")) {
            const response = await fetchPostFromSlug(router.query.slug as string);
            setPostInfo(response.response.data?.publication?.post)
            console.log(response.response.data?.publication?.post)
        }
    };

    useEffect(() => {
        getPostInfo()
    }, [])


    return (
        <div className="w-full  flex items-center flex-col h-full min-h-[100vh]">
            <Head>
                <title>{postInfo.title}</title>
            </Head>
            <main className="max-w-6xl sm:p-10 p-4">
                <Header navContents={["home", "links", "resume"]} />
                <div className="flex flex-col items-center justify-center p-7">
                    <h1 className="md:leading-tight md:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 font-semibold text-center">{postInfo.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postInfo.content.html }} />
            </main>
        </div>
    )
}

export default BlogURLPage

interface PostInfo {
    title: string,
    content: {
        html: string,
        markdown: string
    },
    brief: string
}
