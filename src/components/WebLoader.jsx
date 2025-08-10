import React from "react";
import loading from "../assets/lottie/Loading animation.json";
import Lottie from "lottie-react";
const WebLoader = () => {
  return (
    <div className="flex min-h-screen justify-center items-center p-20">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
};

export default WebLoader;
