import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex h-screen font-sans bg-[#f1f6f9]">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8 bg-[#f1f6f9]">
          <h2 className="mb-6 text-[#333] font-semibold text-2xl">Profile</h2>
          <section className="p-6 flex items-center gap-6 max-w-3xl">
            {/* Profile Image Placeholder */}
            <div
              className="w-20 h-20 rounded-full bg-[#cbd5e1] flex-shrink-0"
              aria-label="Profile picture placeholder"
              role="img"
            />
            {/* Profile Info */}
            

            <div className="flex-grow">
              <p className="font-bold text-xl text-[#1e293b] mb-1">User Name</p>
              <p className="text-sm text-[#64748b] mb-0.5">
                example@example.com
              </p>
              <p className="text-sm text-[#94a3b8]">M 12 yrs</p>
            </div>
            {/* Edit button */}
            <button
              type="button"
              className="border border-[#94a3b8] rounded px-3 py-1.5 text-sm text-[#64748b] cursor-pointer self-start select-none"
              aria-label="Edit profile">
              Edit
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
