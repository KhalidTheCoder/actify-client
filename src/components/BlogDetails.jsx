import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Loading from "../components/Loading";
import NoBlog from "./NoBlog";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";

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
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

      <img
        src={blog.thumbnail || "https://via.placeholder.com/800x400"}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <p className="mb-6 font-medium whitespace-pre-line">{blog.content}</p>

      <div className="flex justify-between items-center text-sm font-semibold mb-6">
        <span className="flex items-center gap-1">
          <FaUserAlt />
          <span>Author: {blog.author}</span>
        </span>
        <span className="flex items-center gap-1">
          <FaCalendarAlt />
          <time dateTime={blog.date}>
            {new Date(blog.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center space-x-1 bg-gradient-to-r from-[#AB886D] to-[#8B6D54] text-white rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide shadow-md hover:brightness-110 transition duration-300 cursor-pointer select-none"
            title={`Tag: ${tag}`}
            aria-label={`Tag ${tag}`}
          >
            <svg
              className="w-3 h-3 text-white opacity-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927C9.324 2.271 10.676 2.271 10.951 2.927L12.363 7.06a1 1 0 00.95.69h4.518c.969 0 1.371 1.24.588 1.81l-3.655 2.658a1 1 0 00-.364 1.118l1.397 4.286c.3.92-.755 1.688-1.54 1.118L10 14.347l-3.456 2.133c-.784.57-1.838-.197-1.54-1.118l1.397-4.286a1 1 0 00-.364-1.118L2.282 9.56c-.783-.57-.38-1.81.588-1.81h4.518a1 1 0 00.95-.69l1.313-4.133z" />
            </svg>
            <span>{tag}</span>
          </span>
        ))}
      </div>

      <button
        onClick={() => navigate("/blogs")}
        className="mt-10 px-6 py-2 bg-[#AB886D] font-semibold text-white rounded hover:bg-[#8b6d4b] transition"
      >
        Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetails;
