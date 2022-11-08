import React from "react";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import Navbar from "../Shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
    </div>
  );
};

export default Home;
