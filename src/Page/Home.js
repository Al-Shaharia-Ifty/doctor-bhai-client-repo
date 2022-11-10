import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import Services from "../Components/ServiceSection";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Doctor Bhai";
  }, []);

  return (
    <div>
      <Banner />
      <Services />
    </div>
  );
};

export default Home;
