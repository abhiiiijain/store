import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <>
      <div>
        <main className="max-w-5xl mx-auto mt-16 px-6">
          <div className="bg-white max-w-4xl mx-auto flex rounded-lg shadow-lg overflow-hidden">
            {/* Illustration part */}
            <div className="hidden md:block md:w-1/2 bg-blue-50 p-10 items-center justify-center">
              <img
                src={logo}
                alt="login page"
                className="object-contain h-72"
              />
            </div>

            {/* Login form */}
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Register
              </h2>
              <p className="text-xl font-semibold text-gray-900 mb-4 text-left">
                Account
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-2 px-4 rounded bg-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full py-2 px-4 rounded bg-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-2 px-4 rounded bg-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full py-2 px-4 rounded bg-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xl font-semibold text-gray-900 mb-4 text-left">
                  Shop Details
                </p>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-2 px-4 rounded bg-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full py-2 px-4 rounded bg-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                  Register
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-gray-600">
                Existing user?{" "}
                <Link to="/">
                  <span className="text-blue-700 hover:underline font-medium">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
