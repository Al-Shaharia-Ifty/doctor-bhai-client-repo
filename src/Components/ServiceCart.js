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
          <h2>{name}</h2>
          <p>{details.slice(0, 100)}...</p>
          <button className="btn btn-info">More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
