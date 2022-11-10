import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import ExtraSection from "../Components/ExtraSection";
import Services from "../Components/ServiceSection";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Doctor Bhai";
  }, []);

  return (
    <div>
      <Banner />
      <Services />
      <ExtraSection />
    </div>
  );
};

export default Home;
