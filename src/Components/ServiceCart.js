import React from "react";

const ServiceCart = ({ service }) => {
  const { name, id, img, price, details } = service;
  return (
    <div>
      <div className="mb-10 bg-base-100 overflow-hidden rounded-lg">
        <div>
          <img className="h-56 w-full" src={img} alt="" />
        </div>
        <div className="p-5">
          <h2 className="text-3xl font-medium">{name}</h2>
          <p className="text-xl my-3">{details.slice(0, 100)}...</p>
          <button className="btn btn-info">More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
