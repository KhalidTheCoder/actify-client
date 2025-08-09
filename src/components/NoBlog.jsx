import React from "react";
import { Link } from "react-router";


const NoBlog = () => {
  



  return (
    <div
      style={{ minHeight: "calc(100vh - 300px)" }}
      className="flex flex-col items-center justify-center w-full h-full px-4 text-center"
    >
      <h2 className="text-2xl font-semibold mb-4 text-[#493628]">
        No Blogs Found
      </h2>
      <p className="mb-6 text-gray-700 max-w-md">
         Sorry, there are no blog articles available right now. Please check back soon or explore other sections to stay updated.
      </p>
      <Link to="/blogs"
        
        className="px-6 py-2 rounded-md bg-[#AB886D] text-white font-semibold hover:bg-[#8B6D54] focus:outline-none focus:ring-2 focus:ring-[#AB886D]"
      >
        See All Blogs
      </Link>
    </div>
  );
};

export default NoBlog;
