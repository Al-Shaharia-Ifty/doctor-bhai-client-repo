import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import auth from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  const menuList = [
    <>
      <li>
        <NavLink className="mx-1 rounded-lg text-md" to="home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-1 rounded-lg text-md" to="services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-1 rounded-lg text-md" to="blog">
          Blogs
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink className="mx-1 rounded-lg text-md" to="my-review">
              My Review
            </NavLink>
          </li>
          <li>
            <NavLink className="mx-1 rounded-lg text-md" to="add-service">
              Add Service
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                signOut(auth);
                localStorage.setItem("accessToken", "");
              }}
              className="btn btn-outline btn-error"
            >
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <NavLink className="mx-1 rounded-lg text-md" to="login">
            Login
          </NavLink>
        </li>
      )}
    </>,
  ];
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
            <ul className="menu menu-horizontal p-0">{menuList}</ul>
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
              {menuList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
