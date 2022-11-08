import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Main;
