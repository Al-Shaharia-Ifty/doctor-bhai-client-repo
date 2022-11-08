import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-200 pl-5 md:px-10 lg:px-20">
        <div className="navbar-start">
          <NavLink
            to="/home"
            className="btn btn-ghost normal-case text-xl w-56 h-16"
          >
            <img className="w-full" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <NavLink
                  className="mx-1 rounded-lg text-md text-gray-800"
                  to="home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mx-1 rounded-lg text-md text-gray-800"
                  to="about"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mx-1 rounded-lg text-md text-gray-800"
                  to="contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className="my-1" to="home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="my-1" to="about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="my-1" to="contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
