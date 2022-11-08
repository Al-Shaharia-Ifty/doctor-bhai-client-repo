import React from "react";
import photo from "../Assets/banner/banner-main.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 lg:px-20 md:px-10 px-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 lg:pr-10 pr-0">
              DocTime's experienced doctors, specialists and therapists are
              selected carefully. Safety and quality is at the heart of
              everything we do..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
