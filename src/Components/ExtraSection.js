import React from "react";
import img1 from "../Assets/trust/doctor1.jpg";
import img2 from "../Assets/trust/doctor2.jpg";
import img3 from "../Assets/trust/doctor3.jpg";
import doc from "../Assets/trust/doc3.png";
import doc2 from "../Assets/trust/doc2.png";
import doc1 from "../Assets/trust/doc1.png";

const ExtraSection = () => {
  return (
    <div>
      <div className="mx-5 lg:mx-20 md:mx-10 my-10">
        <h2 className="text-4xl text-center">Our Best Doctors</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
          <div className="p-3 ">
            <img className="h-80 w-full rounded-2xl" src={doc} alt="" />
            <h2 className="text-2xl mt-5 text-center">Debra Bass</h2>
          </div>
          <div className="p-3 ">
            <img className="h-80 w-full rounded-2xl" src={doc2} alt="" />
            <h2 className="text-2xl mt-5 text-center">Harvey Reynolds</h2>
          </div>
          <div className="p-3 ">
            <img className="h-80 w-full rounded-2xl" src={doc1} alt="" />
            <h2 className="text-2xl mt-5 text-center">Christopher Dawson</h2>
          </div>
        </div>
      </div>
      <div className="mx-5 lg:mx-20 md:mx-10 my-10">
        <h2 className="text-4xl">Why use Daktar Bhai?</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
          <div className="p-3 bg-base-100 rounded-2xl">
            <img className="h-56 w-full rounded-2xl" src={img1} alt="" />
            <h2 className="text-2xl mt-5">Easy to use</h2>
            <p className="text-md my-3">
              Get the best user experience on DocTime App. Search for a doctor
              and get an instant consultation.
            </p>
            <button className="btn btn-outline">See More</button>
          </div>
          <div className="p-3 bg-base-100 rounded-2xl">
            <img className="h-56 w-full rounded-2xl" src={img2} alt="" />
            <h2 className="text-2xl mt-5">Any Time</h2>
            <p className="text-md my-3">
              Talk to a doctor within minutes. Our qualified network of doctors
              is available 24/7. You can get a consultation whenever you need.
            </p>
            <button className="btn btn-outline">See More</button>
          </div>
          <div className="p-3 bg-base-100 rounded-2xl">
            <img className="h-56 w-full rounded-2xl" src={img3} alt="" />
            <h2 className="text-2xl mt-5">Trusted</h2>
            <p className="text-md my-3">
              DocTime's experienced doctors, specialists and therapists are
              selected carefully. Safety and quality is at the heart of
              everything we do.
            </p>
            <button className="btn btn-outline">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
