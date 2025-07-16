import React from "react";
import { motion } from "framer-motion";
import bnrImg from "../assets/joel.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <motion.div
        className="hero p-20 rounded-3xl bg-[#E4E0E1] text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
            src={bnrImg}
            className="w-full max-w-lg rounded-lg shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.5 }}
          >
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 0px #AB886D",
                    "0 0 15px #AB886D",
                    "0 0 0px #AB886D",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="btn border-none py-2 font-semibold rounded-md bg-[#AB886D] text-white hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D]"
              >
                Explore Events
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
