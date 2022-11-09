import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ReviewCart from "./ReviewCart";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { _id, name, img, details, price, review } = data;
  return (
    <div className="py-10">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6 text-xl">{details}</p>
            <p className="text-xl">
              {" "}
              Price:{" "}
              <span className="font-bold text-gray-600">${price}.99</span>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl text-center">Reviews</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10 lg:mx-20 md:mx-10 mx-5">
          {review.map((r) => (
            <ReviewCart r={r} key={r.email} />
          ))}
        </div>
        <Link to={`/add-review/${_id}`} className="flex justify-center">
          <button className="btn btn-warning">Add Review</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
