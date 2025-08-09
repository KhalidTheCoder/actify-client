import React, { useEffect } from "react";
import {
  FaSearch,
  FaUserPlus,
  FaHandsHelping,
  FaCalendarCheck,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const steps = [
    {
      icon: <FaSearch className="text-4xl" />,
      title: "Browse Events",
      description:
        "Discover upcoming local events that matter to your community.",
    },
    {
      icon: <FaUserPlus className="text-4xl" />,
      title: "Join an Event",
      description:
        "Sign up easily and participate in social development activities.",
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "Create Your Own",
      description:
        "Host an event to rally your community and make a difference.",
    },
    {
      icon: <FaCalendarCheck className="text-4xl" />,
      title: "Manage Events",
      description: "Organize and oversee your events efficiently with ease.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="max-w-lg mb-6 text-4xl text-center font-bold tracking-tight sm:text-5xl md:mx-auto leading-tight">
        Getting Started with Actify
      </h2>
      <p className="text-center font-medium mb-12 md:text-lg max-w-2xl mx-auto">
        Get started quickly and contribute to your community with these simple
        steps.
      </p>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            data-aos-anchor-placement="top-bottom"
            className="
              flex flex-col items-center text-center bg-[#F5EFE6] p-6 rounded-lg shadow
              transition-shadow transition-transform duration-500 ease-in-out
              hover:shadow-lg hover:-translate-y-1 cursor-pointer
              group
            "
          >
            <div className="mb-4 text-[#AB886D] group-hover:text-[#7C682E] transition-colors duration-500 ease-in-out">
              {React.cloneElement(step.icon, { className: "text-4xl" })}
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#493628] group-hover:text-[#AB886D] transition-colors duration-500 ease-in-out">
              {step.title}
            </h3>
            <p className="text-[#6b5846] font-medium">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
