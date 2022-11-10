import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.config";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import useToken from "../Hooks/useToken";
import useGoogleToken from "../Hooks/useGoogleToken";

const Register = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const [gToken] = useGoogleToken(gUser);
  let errorMessage;

  useEffect(() => {
    document.title = `Register - Doctor Bhai`;
    if (token || gToken) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token, gToken]);
  if (loading || updating || gLoading) {
    return <Loading />;
  }
  if (error || uError || gError) {
    errorMessage = (
      <p className="text-xl text-red-500">
        {error?.message || uError?.message || gError?.message}
      </p>
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL =
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName, photoURL });
    toast.success("Create Account");
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-4xl text-center">Register</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="******"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account.
                </Link>
              </label>
              {errorMessage}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline w-full"
            >
              Continue with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
