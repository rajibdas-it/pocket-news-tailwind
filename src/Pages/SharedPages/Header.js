import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pocket_news.png";
// import rajib from "../../assets/rajib_pic.jpg";
import LeftSideNav from "./LeftSideNav";

const Header = () => {
  return (
    <div className="navbar bg-white mb-5 shadow-lg">
      <div className="flex-1">
        <Link to="/">
          <img className="w-40" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none gap-2 mr-3">
        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-3">
              <li className=" hover:bg-gray-500 hover:px-2 rounded font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className=" hover:bg-gray-500 hover:px-2 rounded font-semibold">
                <Link to="/news">News</Link>
              </li>
              <li className=" hover:bg-gray-500 hover:px-2 rounded font-semibold">
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
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

            {/* <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div> */}
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li className=" hover:bg-gray-500 hover:px-2 rounded font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:bg-gray-500 hover:px-2 rounded font-semibold">
              <Link to="/news">News</Link>
            </li>
            <li className=" hover:bg-gray-500 hover:px-2 rounded font-semibold">
              <Link to="/about">About Us</Link>
            </li>
            <LeftSideNav></LeftSideNav>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
