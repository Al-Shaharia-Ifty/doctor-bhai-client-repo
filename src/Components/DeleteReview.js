import React from "react";

const DeleteReview = ({ deleteReview, setDeleteReview, refetch }) => {
  const { service, comment } = deleteReview;
  console.log(comment);
  const handleDelete = () => {};
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
          <p className="py-4"> {service}</p>
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
