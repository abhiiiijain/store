import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/inventory1.png";

const Header = () => (
  <>
    {/* routing to be hided */}
    {/* <header>
      <nav>
        <Link to="/">| Login</Link> |<Link to="/home">| Home</Link> |
        <Link to="/employee">| Employee</Link> |
        <Link to="/inventory">| Inventory</Link> |
        <Link to="/transaction">| Transactions</Link> |
        <Link to="/profile">| Profile</Link> |
        <Link to="/register">| Register</Link> |
      </nav>
    </header> */}

    {/* Navbar */}
    <nav className="bg-primary px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className=" bg-white rounded shadow">
        <Link to="/profile">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "15px" }}
          />
        </Link>
      </div>
      {/* Search and blank */}
      <div className="flex space-x-6 items-center text-white">
        <div className="w-32 h-1 bg-blue-300 rounded"></div>
        <div className="w-24 h-1 bg-blue-300 rounded"></div>
        <div className="w-24 h-1 bg-blue-300 rounded"></div>
        <div className="w-32 h-1 bg-blue-300 rounded"></div>
        <button aria-label="search" className="focus:outline-none">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </nav>
  </>
);

export default Header;
