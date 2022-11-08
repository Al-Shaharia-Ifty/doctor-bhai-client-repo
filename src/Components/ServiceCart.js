import React from "react";

const ServiceCart = ({ service }) => {
  const { name, id, img, price, details } = service;
  return (
    <div>
      <div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
