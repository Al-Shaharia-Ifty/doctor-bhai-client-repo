import React, { useEffect } from "react";
import { useQuery } from "react-query";
import ServiceCart from "../Components/ServiceCart";
import Loading from "../Shared/Loading";

const Services = () => {
  const { data: service, isLoading } = useQuery("service", () =>
    fetch(`https://doctor-server-ruddy.vercel.app/services`).then((res) =>
      res.json()
    )
  );
  useEffect(() => {
    document.title = "Services - Doctor Bhai";
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-20 md:mx-10 mx-5 my-10">
        {service.map((service) => (
          <ServiceCart service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
