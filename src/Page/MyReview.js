import React, { useEffect, useState } from "react";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-review`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [setReviews]);

  return (
    <div className="min-h-screen">
      <h2 className="text-2xl mx-5 md:mx-10 lg:mx-20">
        My all review on services
      </h2>
      <div className="overflow-x-auto mx-5 md:mx-10 lg:mx-20">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r, index) => (
              <tr key={r._id}>
                <th>{index + 1}</th>
                <td>{r.service}</td>
                <td>{r.comment}</td>
                <td>
                  <div>
                    <button className="btn btn-info mr-3">Edit</button>
                    <button className="btn btn-error">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
