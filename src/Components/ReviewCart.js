import React from "react";

const ReviewCart = ({ r }) => {
  const { name, photo, email, comment } = r;
  return (
    <div className="bg-base-100 rounded-2xl p-3">
      <div className="flex">
        <img className="h-14 rounded-full" src={photo} alt="" />
        <div className="ml-3">
          <h2 className="text-2xl">{name}</h2>
          <p className="font-bold">{email}</p>
        </div>
      </div>
      <div className="text-xl text-justify">{comment}</div>
    </div>
  );
};

export default ReviewCart;
