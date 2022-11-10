import React from "react";
import { toast } from "react-toastify";

const DeleteReview = ({ deleteReview, setDeleteReview, refetch }) => {
  const { comment, _id } = deleteReview;
  const handleDelete = () => {
    fetch(`https://doctor-server-ruddy.vercel.app/my-review/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Delete successfully`);
          setDeleteReview(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-red-500 text-lg">
            Are you sure you want to delete!
          </h3>
          <p className="py-4"> {comment}</p>
          <div className="modal-action">
            <button onClick={handleDelete} className="btn btn-xs btn-error">
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteReview;
