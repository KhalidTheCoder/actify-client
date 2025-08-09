import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Featured = () => {
  const features = [
    "Participate in community-driven events that create meaningful social impact.",
    "Easily organize and manage your own cleanup, plantation, or donation initiatives.",
    "Monitor your engagement and track the impact of your contributions over time.",
    "Connect with a network of passionate individuals committed to change.",
    "Powered by modern, scalable technology for a fast and seamless experience.",
    "Absolutely free for all users, no subscriptions, no hidden fees.",
  ];

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <p
          data-aos="fade-down"
          className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-[#AB886D] uppercase bg-[#F4E8E1] rounded-full"
        >
          Built For Changemakers
        </p>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-lg mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:mx-auto leading-tight"
        >
          Actify Empowers Meaningful Action in Every Neighborhood
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-base font-medium md:text-lg"
        >
          Discover, create, and participate in impactful social development
          events near you all in one place.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {features.map((item, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
            className="flex items-center p-4 border rounded-lg shadow-sm bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <svg
              className="w-6 h-6 mr-3 text-[#AB886D] flex-shrink-0"
              stroke="currentColor"
              viewBox="0 0 52 52"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>
            <span className="text-[#493628] font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
