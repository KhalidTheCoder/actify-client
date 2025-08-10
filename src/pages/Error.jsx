import React, { useEffect } from "react";
import errImg from "../assets/err.jpg";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Error = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EFE6] to-white flex flex-col justify-center items-center text-center p-6">
      <img
        src={errImg}
        alt="404 Not Found"
        data-aos="zoom-in"
        className="w-72 md:w-96 h-auto mb-6 rounded-xl shadow-lg"
      />
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-5xl font-extrabold text-[#493628] mb-3"
      >
        Oops! Page Not Found
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-[#7a6651] font-medium mb-6 max-w-lg leading-relaxed"
      >
        We couldn't find the page you were looking for. It might have been
        removed, renamed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        data-aos="fade-up"
        data-aos-delay="300"
        className="px-8 py-3 border-none font-semibold rounded-md bg-[#AB886D] text-white shadow-md hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D] transform hover:scale-105 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
