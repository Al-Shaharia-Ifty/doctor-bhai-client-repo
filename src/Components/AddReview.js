import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.config";
import { toast } from "react-toastify";

const AddReview = () => {
  const data = useLoaderData();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { _id, name } = data;
  const { displayName, email, photoURL } = user;
  useEffect(() => {
    document.title = `Add Review - Doctor Bhai`;
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const uploadComment = {
      name: displayName,
      service: name,
      email: email,
      photo: photoURL,
      comment: comment,
    };

    fetch(`https://doctor-server-ruddy.vercel.app/add-review/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(uploadComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Comment Successful");
          navigate(`/service/${_id}`);
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-2xl text-center">
              Add Comment on{" "}
              <span className="text-primary font-bold">{name}</span>
            </h2>

            <div className="form-control mt-5">
              <textarea
                name="comment"
                className="textarea textarea-bordered h-60"
                placeholder="Comment"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
