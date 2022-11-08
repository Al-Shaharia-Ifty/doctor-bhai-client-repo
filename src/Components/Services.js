import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 lg:mx-20 md:mx-10 mx-0">
        {data.slice(0, 3).map((service) => (
          <ServiceCart service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
