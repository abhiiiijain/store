import React, { useState } from "react";

export default function EmployeeAddModal({ isOpen, onClose, onRegister }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    type: "Manager",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add simple validation if needed before onRegister
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onRegister(form);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      age: "",
      type: "Manager",
    });
    onClose();
  };

  return (
    <>
      {/* Modal backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>
      {/* Modal */}
      <div className="fixed inset-0 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-md p-6 relative shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Add Employee</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Account and fields */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <label className="text-right font-medium text-gray-700">Account</label>
              <div className="space-y-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.gender}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.age}
                  onChange={handleChange}
                  min="0"
                  max="120"
                />
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="type"
                      value="Manager"
                      checked={form.type === "Manager"}
                      onChange={handleChange}
                      className="accent-blue-600"
                    />
                    <span>Manager</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="type"
                      value="Employee"
                      checked={form.type === "Employee"}
                      onChange={handleChange}
                      className="accent-blue-600"
                    />
                    <span>Employee</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-8 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Register
              </button>
            </div>
          </form>
          {/* Close button top right */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

