import React from "react";
import { Link } from "react-router";

const NoCreatedEvent = () => {
  return (
    <div>
      <div
        style={{ minHeight: "calc(100vh - 300px)" }}
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <h2 className="text-2xl font-semibold mb-4">No Events Found</h2>
        <p className="text-center mb-4">You haven't created any events yet.</p>
        <Link to="/create-event">
          <button className="px-6 py-2 border-none font-semibold rounded-md bg-[#AB886D] text-white hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D]">
           Go To Create Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoCreatedEvent;
