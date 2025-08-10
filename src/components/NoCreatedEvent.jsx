import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import empty from "../assets/empty.jpg";

const NoCreatedEvent = () => {
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
          alt="No events"
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
        You haven’t created any events yet. Start your journey by creating your
        first one today.
      </p>

      <Link
        to="/create-event"
        data-aos="fade-up"
        data-aos-delay="300"
        className="px-8 py-3 font-semibold rounded-md bg-[#AB886D] text-white shadow-md hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D] transform hover:scale-105 transition-all duration-300"
      >
        Create Event
      </Link>
    </div>
  );
};

export default NoCreatedEvent;
