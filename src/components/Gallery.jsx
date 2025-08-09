import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center">
        <h2
          data-aos="fade-up"
          className="max-w-lg mb-6 text-4xl text-center font-bold tracking-tight sm:text-5xl md:mx-auto leading-tight"
        >
          Snapshots from Our Community
        </h2>
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="max-w-2xl font-medium mx-auto mb-8 text-center md:text-lg"
      >
        A glimpse into the vibrant moments, inspiring events, and unforgettable
        connections that make our community truly special.
      </p>
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            src={firstImg}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded-xl shadow-md object-cover transform transition-transform duration-300 hover:scale-105 md:col-start-3 md:row-start-1"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            src={secImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src={thirdImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="400"
            src={nineImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="500"
            src={tenImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="600"
            src={fourthImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="700"
            src={fifthImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="800"
            src={sixthImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="900"
            src={eighthImg}
            alt=""
            className="w-full h-full rounded-xl shadow-sm object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            data-aos="zoom-in"
            data-aos-delay="1000"
            src={seventhImg}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded-xl shadow-md object-cover hover:scale-105 transition-transform duration-300 md:col-start-1 md:row-start-3"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
