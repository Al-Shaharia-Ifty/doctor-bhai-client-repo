import React, { useState } from "react";
import { useQuery } from "react-query";
import DeleteReview from "../Components/DeleteReview";
import EditReview from "../Components/EditReview";
import Loading from "../Shared/Loading";

const MyReview = () => {
  const [deleteReview, setDeleteReview] = useState(null);
  const [editReview, setEditReview] = useState(null);
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
        {reviews.length === 0 ? (
          <p>No reviews were added</p>
        ) : (
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
                      <label
                        onClick={() => setEditReview(r)}
                        htmlFor="edit-confirm-modal"
                        className="btn btn-info "
                      >
                        Edit
                      </label>
                      <label
                        onClick={() => setDeleteReview(r)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-error ml-3"
                      >
                        delete
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {editReview && (
        <EditReview
          editReview={editReview}
          refetch={refetch}
          setEditReview={setEditReview}
        />
      )}
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
