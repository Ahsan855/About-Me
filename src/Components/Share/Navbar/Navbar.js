import React from "react";
import { NavLink } from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/" className="text-secondary font-semibold">
                  Home
                </NavLink>
              </li>
              <li tabIndex="0">
                <NavLink
                  to="/pages"
                  className="justify-between text-secondary font-semibold"
                >
                  Pages
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </NavLink>
                <ul className="p-2">
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Pricing</a>
                  </li>
                  <li>
                    <a>Team</a>
                  </li>
                  <li>
                    <a>Comming Soon</a>
                  </li>
                  <li>
                    <a>Error 404</a>
                  </li>
                </ul>
              </li>
              <li tabIndex="0">
                <NavLink
                  to="/services"
                  className="justify-between text-secondary font-semibold"
                >
                  Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </NavLink>
                <ul className="p-2">
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Services Details</a>
                  </li>
                </ul>
              </li>
              <li tabIndex="0">
                <NavLink
                  to="/blog"
                  className="justify-between text-secondary font-semibold"
                >
                  Blogs
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </NavLink>
                <ul className="p-2">
                  <li>
                    <a>Large Right Sidebar</a>
                  </li>
                  <li>
                    <a>Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact" className="text-secondary font-semibold">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Devloper-Build</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/" className="text-secondary font-semibold">
                Home
              </NavLink>
            </li>
            <li tabIndex="0">
              <NavLink
                to="/pages"
                className="justify-between text-secondary font-semibold"
              >
                Pages
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </NavLink>
              <ul className="p-2">
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
                <li>
                  <a>Comming Soon</a>
                </li>
                <li>
                  <a>Error 404</a>
                </li>
              </ul>
            </li>
            <li tabIndex="0">
              <NavLink
                to="/services"
                className="justify-between text-secondary font-semibold"
              >
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </NavLink>
              <ul className="p-2">
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Services Details</a>
                </li>
              </ul>
            </li>
            <li tabIndex="0">
              <NavLink
                to="/blog"
                className="justify-between text-secondary font-semibold"
              >
                Blogs
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </NavLink>
              <ul className="p-2">
                <li>
                  <a>Large Right Sidebar</a>
                </li>
                <li>
                  <a>Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contact" className="text-secondary font-semibold">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
