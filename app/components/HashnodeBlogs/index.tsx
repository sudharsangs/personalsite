import React, { useEffect, useState } from "react";
import { fetchHashnodeArticles } from "../../api";
import Link from "next/link";

type Props = {
  count?: number
}

export const HashnodeBlogs = ({ count }: Props) => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const getHashnodeArticles = async () => {
    const response = await fetchHashnodeArticles();
    if (response.success) {
      console.log(response)
      setBlogs(response?.response.data.user.publications.edges[0].node.posts.edges);
    } else {
      setBlogs([]);
    }
  };

  useEffect(() => {
    getHashnodeArticles();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-4">
        {blogs.slice(0, count)?.map((res) => (
          <Link
            href={`https://blog.sudharsangs.in/${res.node.slug}`}
            rel="noreferrer" key={res.node.slug}
            target="_blank"
          >
            <div className="bg-slate-800 gap-3 sm:flex-row flex-col flex shadow-md ring-1 ring-white/5 sm:rounded-lg overflow-hidden">
              <img className="sm:w-96 w-full" src={res?.node.coverImage?.url} alt={res.node.title} />
              <div className="mt-6 p-3">
                <div className="font-bold text-xl mb-2">{res.node.title}</div>
                <p className="text-base">{res.node.brief}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

interface BlogType {
  node: {
    slug: string;
    title: string;
    brief: string;
    coverImage: {
      url: string
    }
  }
}
