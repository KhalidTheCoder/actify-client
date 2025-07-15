import React from "react";
import { Link, useNavigate } from "react-router";

const NoEvent = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate(0); 
  };
  return (
    <div
      style={{ minHeight: "calc(100vh - 300px)" }}
      className="flex flex-col items-center justify-center w-full h-full"
    >
      <h2 className="text-2xl font-semibold mb-4">
        No Events Found
      </h2>
      <p className="text-center mb-4">
        We couldn’t find any events that match your filter or search. Try
        adjusting your criteria or view all upcoming events.
      </p>
      <button
        onClick={handleReload}
        className="px-6 py-2 border-none font-semibold rounded-md bg-[#AB886D] text-white hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D]"
      >
        View All Events
      </button>
    </div>
  );
};

export default NoEvent;
