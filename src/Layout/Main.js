import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Main;
