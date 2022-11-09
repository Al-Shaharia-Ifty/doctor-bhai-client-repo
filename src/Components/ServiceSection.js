import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-20 md:mx-10 mx-5">
        {data?.slice(-3)?.map((service) => (
          <ServiceCart service={service} key={service._id} />
        ))}
      </div>
      <Link
        to="../services"
        className="flex justify-center lg:mx-20 md:mx-10 mx-5"
      >
        <button className="btn btn-outline">See All services</button>
      </Link>
    </div>
  );
};

export default Services;
