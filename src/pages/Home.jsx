import React from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Newsletter from "../components/Newsletter ";
import SomeUpComingEvents from "../components/SomeUpComingEvents";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SomeUpComingEvents></SomeUpComingEvents>
      <Featured></Featured>
      <Gallery></Gallery>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
