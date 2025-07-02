import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-[220px] bg-white shadow-md flex flex-col">
        <nav className="flex-1 pt-6">
          <ul className="list-none pl-5 text-[#586e75]">
            <li className="mb-6 cursor-pointer flex items-center">
              <Link to="/home">
                <span className="mr-2 text-lg text-[#2c3e50]">🏠</span> Home
              </Link>
            </li>
            <li className="mb-6 cursor-pointer flex items-center">
              <Link to="/inventory">
                <span className="mr-2 text-lg text-[#2c3e50]">📋</span>{" "}
                Inventory
              </Link>
            </li>
            <li className="mb-6 cursor-pointer flex items-center">
              <Link to="/employee">
                <span className="mr-2 text-lg text-[#2c3e50]">👥</span>{" "}
                Employees
              </Link>
            </li>
            <li className="mb-6 cursor-pointer flex items-center">
              <Link to="/transaction">
                <span className="mr-2 text-lg text-[#2c3e50]">📄</span>{" "}
                Transactions
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
