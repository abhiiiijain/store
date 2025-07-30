import React from "react";
import Sidebar from "../components/Sidebar";

const colors = [
  { name: "Blue", value: "#2563eb" },
  { name: "Green", value: "#16a34a" },
  { name: "Red", value: "#dc2626" },
  { name: "Yellow", value: "#eab308" },
  { name: "Purple", value: "#7c3aed" },
];

export default function ProfilePage() {
  const handleThemeChange = (color) => {
    document.documentElement.style.setProperty("--primary", color);
  };

  return (
    <div className="flex h-screen font-sans bg-[#f1f6f9]">
      {/* Sidebar */}
      <Sidebar />
      {/* Profile Section */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8 bg-[#f1f6f9]">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <section className="p-6 flex items-center gap-6 max-w-3xl">
            {/* Profile Image Placeholder */}
            <div
              className="w-20 h-20 rounded-full bg-[#cbd5e1] flex-shrink-0"
              aria-label="Profile picture placeholder"
              role="img"
            />
            {/* Profile Info */}

            <div className="flex-grow">
              <p className="font-bold text-xl text-primary mb-1">User Name</p>
              <p className="text-sm text-gray-500 mb-0.5">
                example@example.com
              </p>
              <p className="text-sm text-gray-400">M 12 yrs</p>
            </div>
            {/* Edit button */}
            <button
              type="button"
              className="border border-primary rounded px-3 py-1.5 text-sm text-grau-500 cursor-pointer self-start select-none"
              aria-label="Edit profile">
              Edit
            </button>
          </section>

          {/* <div className="mt-6"> */}
          <section className="mt-10 max-w-3xl bg-white p-6 rounded shadow">
            <h3 className="text-md font-semibold mb-2 text-primary">
              Choose Theme Color:
            </h3>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleThemeChange(color.value)}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 hover:scale-105 transition-transform"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </section>
        </main>
        {/* </div> */}
      </div>
    </div>
  );
}
