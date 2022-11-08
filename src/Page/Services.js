import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCart from "../Components/ServiceCart";

const Services = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-20 md:mx-10 mx-5 my-10">
        {data.map((service) => (
          <ServiceCart service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
