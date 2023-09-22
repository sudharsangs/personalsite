import React, { useEffect, useState } from "react";
import { fetchHashnodeArticles } from "../../api";

export const HashnodeBlogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const getHashnodeArticles = async () => {
    const response = await fetchHashnodeArticles();
    if (response.success) {
      setBlogs(response?.response?.data?.user?.publication?.posts);
    } else {
      setBlogs([]);
    }
  };

  useEffect(() => {
    getHashnodeArticles();
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-2xl mt-10">Articles</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
        {blogs?.map((res) => (
          <a
            href={`https://sudharsan.hashnode.dev/${res.slug}`}
            target="_blank" rel="noreferrer" key={res.slug}
          >
            <div className="bg-white max-w-sm text-clip h-full  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg mt-6 rounded overflow-hidden">
              <img className="w-full" src={res.coverImage} alt={res.title} />
              <div className="mt-6">
                <div className="font-bold text-xl mb-2">{res.title}</div>
                <p className="text-gray-700 text-base">{res.brief}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

interface BlogType {
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
}
