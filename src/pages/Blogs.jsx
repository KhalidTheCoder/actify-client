import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading></Loading>;

  return (
    <div className="min-h-screen py-12 px-6 sm:px-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Actify Blogs & Articles
      </h1>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={blog.thumbnail || "https://via.placeholder.com/400x250"}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-[#493628] mb-3 line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-gray-700 flex-grow line-clamp-4">
                {blog.excerpt || blog.content?.slice(0, 120) + "..."}
              </p>

              <Link
                to={`/blog/${blog._id}`}
                className="mt-6 block bg-[#AB886D] hover:bg-[#8b6d4b] text-white font-semibold py-2 rounded-full text-center transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
