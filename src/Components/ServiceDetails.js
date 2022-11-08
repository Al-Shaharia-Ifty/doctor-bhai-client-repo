import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceDetails = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <PhotoProvider>
            <PhotoView src={data.img}>
              <img
                src={data.img}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
          <div>
            <h1 className="text-5xl font-bold">{data.name}</h1>
            <p className="py-6">{data.details}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
