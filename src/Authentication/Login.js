import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.config";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import useToken from "../Hooks/useToken";
import useGoogleToken from "../Hooks/useGoogleToken";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  const [gToken] = useGoogleToken(gUser);
  let errorMessage;

  //   condition
  useEffect(() => {
    document.title = `Login - Doctor Bhai`;
    if (token || gToken) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token, gToken]);
  if (loading || gLoading) {
    return <Loading />;
  }
  if (error || gError) {
    errorMessage = (
      <p className="text-lg text-red-500">{error.message || gError.message}</p>
    );
  }

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-4xl text-center">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
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
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Don't Have an Account
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

export default Login;
