import React from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Newsletter from "../components/Newsletter ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Gallery></Gallery>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
