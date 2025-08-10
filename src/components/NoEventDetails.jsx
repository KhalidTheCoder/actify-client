import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import empty from "../assets/empty.jpg";

const NoEventDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div
      style={{ minHeight: "calc(100vh - 300px)" }}
      className="flex flex-col items-center justify-center w-full h-full px-4 text-center"
    >
      <div data-aos="zoom-in" className="mb-6">
        <img
          src={empty}
          alt="No event details"
          className="w-64 h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h2
        className="text-3xl font-bold mb-4 tracking-wide"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        No Events Found
      </h2>

      <p
        className="text-lg font-medium mb-8 max-w-md leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Sorry, we couldn’t find any event details right now. Please check out
        all upcoming events.
      </p>

      <Link to="/upcoming-events">
        <button
          data-aos="fade-up"
          data-aos-delay="300"
          className="px-8 py-3 font-semibold rounded-md bg-[#AB886D] text-white shadow-md hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D] transform hover:scale-105 transition-all duration-300"
        >
          View All Events
        </button>
      </Link>
    </div>
  );
};

export default NoEventDetails;
