import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCart = ({ service }) => {
  const { name, _id, img, price, details } = service;
  return (
    <div>
      <div className="mb-10 bg-base-100 overflow-hidden rounded-lg">
        <div>
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="h-56 w-full" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="p-5">
          <h2 className="text-3xl font-medium">{name}</h2>
          <p className="text-xl my-3">{details.slice(0, 100)}...</p>
          <p className="text-xl">
            Price: <span className="font-bold text-gray-600">${price}.99</span>
          </p>
          <Link to={`../service/${_id}`}>
            <button className="btn btn-info mt-3">More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
