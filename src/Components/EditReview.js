import React from "react";
import { toast } from "react-toastify";

const EditReview = ({ setEditReview, refetch, editReview }) => {
  const { _id, comment } = editReview;
  const handleEdit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const editComment = { comment: comment };
    fetch(`http://localhost:5000/review/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Update successfully`);
          setEditReview(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="edit-confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <form onSubmit={handleEdit} className="modal-box">
          <h3 className="font-bold text-info text-lg">
            Are you sure you want to Edit!
          </h3>
          <p className="py-4"> {comment}</p>
          <input
            className="input w-full max-w-xs"
            type="text"
            name="comment"
            placeholder="Comment"
            required
          />
          <div className="modal-action">
            <button className="btn btn-xs btn-error">Edit</button>
            <label htmlFor="edit-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReview;
