import React from "react";
import loading from "../assets/lottie/Loading animation.json";
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 250px)" }}
      className="flex justify-center items-center p-20"
    >
      <Lottie animationData={loading} loop={true} />
    </div>
  );
};

export default Loading;
