import React from "react";
import bnrImg from "../assets/joel.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="hero p-20 rounded-3xl bg-[#E4E0E1] text-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bnrImg} className="w-full max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl text-[#493628] font-bold">
              Empower Change with Actify
            </h1>
            <p className="py-6 font-medium">
              Actify is your gateway to meaningful change. Whether it’s planting
              trees, cleaning streets, or organizing donation drives, we help
              you connect, contribute, and make a difference where it matters
              most.
            </p>
            <Link to="/upcoming-events">
              <button className="btn border-none py-2 font-semibold rounded-md bg-[#AB886D] text-white hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D]">
                Explore Events
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
