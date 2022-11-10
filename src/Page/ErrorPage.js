import React, { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  // title name
  useEffect(() => {
    document.title = "Error Page - Zanjira";
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex h-screen justify-center items-center">
        <div>
          <h1 className="text-4xl">404 Page Not Found</h1>
          <br />
          {error && (
            <div>
              <p className="text-red-500">
                {" "}
                {error.statusText || error.message}
              </p>
              <p>{error.status}</p>
            </div>
          )}
          <br />
          <Link to="/">
            <button className="btn btn-outline">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
