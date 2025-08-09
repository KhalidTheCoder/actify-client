import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Loading from "../components/Loading";
import NoBlog from "./NoBlog";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((b) => b._id === id);
        setBlog(foundBlog || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blog:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  if (!blog) return <NoBlog></NoBlog>;

  return (
    <div className="min-h-screen py-12 px-6 sm:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#493628] mb-6">{blog.title}</h1>

      <img
        src={blog.thumbnail || "https://via.placeholder.com/800x400"}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <p className="text-gray-700 mb-6 whitespace-pre-line">{blog.content}</p>

      <div className="flex justify-between text-sm text-[#AB886D] font-semibold mb-6">
        <span>Author: {blog.author}</span>
        <span>Date: {new Date(blog.date).toLocaleDateString()}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#AB886D] text-white rounded-full px-3 py-1 text-xs font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => navigate("/blogs")}
        className="mt-10 px-6 py-2 bg-[#AB886D] text-white rounded hover:bg-[#8b6d4b] transition"
      >
        Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetails;
