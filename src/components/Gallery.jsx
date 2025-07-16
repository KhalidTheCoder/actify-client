import React from "react";
import firstImg from "../assets/gallery/priscilla.jpg";
import secImg from "../assets/gallery/two.jpg";
import thirdImg from "../assets/gallery/three.jpg";
import fourthImg from "../assets/gallery/four.jpg";
import fifthImg from "../assets/gallery/five.jpg";
import sixthImg from "../assets/gallery/sixth.jpg";
import seventhImg from "../assets/gallery/seventh.jpg";
import eighthImg from "../assets/gallery/eighth.jpg";
import nineImg from "../assets/gallery/nine.jpg";
import tenImg from "../assets/gallery/ten.jpg";

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center">
        <h2 className="max-w-lg mb-6 text-4xl text-center font-bold tracking-tight sm:text-5xl md:mx-auto leading-tight">
          Snapshots from Our Community
        </h2>
      </div>
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          <img
            src={firstImg}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded-xl shadow-md object-cover transform transition-transform duration-300 hover:scale-105 md:col-start-3 md:row-start-1"
          />
          <img
            src={secImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={thirdImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={nineImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={tenImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={fourthImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={fifthImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={sixthImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={eighthImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={seventhImg} 
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded-xl shadow-md object-cover transform transition-transform duration-300 hover:scale-105 md:col-start-1 md:row-start-3"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
