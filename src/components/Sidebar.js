import React from "react";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-[220px] bg-white shadow-md flex flex-col">
        <nav className="flex-1 pt-6">
          <ul className="list-none pl-5 text-[#586e75]">
            <li className="mb-6 cursor-pointer flex items-center">
              <span className="mr-2 text-lg text-[#2c3e50]">🏠</span> Home
            </li>
            <li className="mb-6 cursor-pointer flex items-center">
              <span className="mr-2 text-lg text-[#2c3e50]">📋</span> Inventory
            </li>
            <li className="mb-6 cursor-pointer flex items-center">
              <span className="mr-2 text-lg text-[#2c3e50]">👥</span> Employees
            </li>
            <li className="mb-6 cursor-pointer flex items-center">
              <span className="mr-2 text-lg text-[#2c3e50]">📄</span>{" "}
              Transactions
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
