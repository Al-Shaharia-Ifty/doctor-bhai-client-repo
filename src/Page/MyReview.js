import React, { useState } from "react";
import { useQuery } from "react-query";
import DeleteReview from "../Components/DeleteReview";
import Loading from "../Shared/Loading";

const MyReview = () => {
  const [deleteReview, setDeleteReview] = useState(null);
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch(`http://localhost:5000/my-review`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

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
                    <label
                      onClick={() => setDeleteReview(r)}
                      htmlFor="delete-confirm-modal"
                      className="btn btn-error"
                    >
                      delete
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteReview && (
        <DeleteReview
          deleteReview={deleteReview}
          setDeleteReview={setDeleteReview}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default MyReview;
