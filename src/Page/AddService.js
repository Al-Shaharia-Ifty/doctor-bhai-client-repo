import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddService = () => {
  let errorMessage;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const img = e.target.img.value;
    const details = e.target.details.value;
    const price = e.target.price.value;
    const uploadService = {
      name: name,
      img: img,
      price: price,
      details: details,
    };
    console.log(uploadService);

    fetch("http://localhost:5000/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(uploadService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Add Services Successful");
          navigate(`/services`);
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-4xl text-center">Add Services</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Image URL</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            {errorMessage}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
