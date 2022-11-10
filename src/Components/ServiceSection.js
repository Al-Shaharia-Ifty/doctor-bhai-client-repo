import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const { data: service, isLoading } = useQuery("service", () =>
    fetch(`https://doctor-server-ruddy.vercel.app/services`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-20 md:mx-10 mx-5">
        {service?.slice(-3)?.map((service) => (
          <ServiceCart service={service} key={service._id} />
        ))}
      </div>
      <Link
        to="../services"
        className="flex justify-center lg:mx-20 md:mx-10 mx-5 mt-7"
      >
        <button className="btn btn-outline">See All services</button>
      </Link>
    </div>
  );
};

export default Services;
