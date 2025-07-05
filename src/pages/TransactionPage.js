import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { DownloadIcon } from "@heroicons/react/outline";

const transactions = [
  {
    id: 1,
    date: "25 Dec 2020",
    product: "Pat Black",
    items: 25,
    price: "₹450.00",
    type: "Buy",
  },
  {
    id: 2,
    date: "26 Dec 2020",
    product: "Angel Jones",
    items: 66,
    price: "₹325.00",
    type: "Sell",
  },
  {
    id: 3,
    date: "26 Dec 2020",
    product: "Max Edwards",
    items: 3,
    price: "₹25.00",
    type: "Buy",
  },
  {
    id: 4,
    date: "26 Dec 2020",
    product: "Bruce Fox",
    items: 120,
    price: "₹1500.00",
    type: "Sell",
  },
  {
    id: 5,
    date: "27 Dec 2020",
    product: "Devon Fisher",
    items: 15,
    price: "₹999.00",
    type: "Buy",
  },
];

export default function Transactions() {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="flex h-screen font-sans bg-[#f1f6f9]">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Transactions</h2>
        <div className="border-b border-gray-300 mb-6 flex gap-8">
          <button
            className={`py-2 px-4 -mb-px font-semibold border-b-2 ${
              activeTab === "buy"
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-primary"
            }`}
            onClick={() => setActiveTab("buy")}
            aria-current={activeTab === "buy" ? "page" : undefined}>
            Buy
          </button>
          <button
            className={`py-2 px-4 -mb-px font-semibold border-b-2 ${
              activeTab === "sell"
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-primary"
            }`}
            onClick={() => setActiveTab("sell")}
            aria-current={activeTab === "sell" ? "page" : undefined}>
            Sell
          </button>
          <button
            className={`py-2 px-4 -mb-px font-semibold border-b-2 ${
              activeTab === "history"
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-primary"
            }`}
            onClick={() => setActiveTab("history")}
            aria-current={activeTab === "history" ? "page" : undefined}>
            History
          </button>
        </div>

        {/* Buy */}
        {activeTab === "buy" && (
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Buy Items
            </h2>
            <div className="border-b border-gray-300 mb-6 flex gap-8"></div>

            {/* Customer */}
            <div className="mb-6">
              <div className="bg-white max-w-xl mx-auto flex rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-medium mb-2">Customer</h3>
                </div>
                <div className="flex-1 p-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 mb-6 flex gap-8"></div>

            {/* Product */}
            <div className="mb-6">
              <div className="bg-white max-w-xl mx-auto flex rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-medium mb-2">Product</h3>
                </div>
                <div className="flex-1 p-6">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  {/* <select className="w-full p-2 border bg-gray-300 rounded mb-2">
                    <option>Select a product to view details</option>
                    <option>20 in inventory, 85 Recommended limit</option>
                    <option>No details</option>
                  </select> */}

                  <div className="text-sm text-gray-600 mb-2 overflow-auto text-center">
                    <p>Select a product to view details</p>
                    <p>/</p>
                    <p>20 in inventory, 85 Recommended limit</p>
                    <p>/</p>
                    <p>No details</p>
                  </div>

                  <input
                    type="text"
                    placeholder="Price"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="number"
                    placeholder="No. of Items"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="date"
                    placeholder="Expiry Date"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <div className="flex justify-center">
                    <button className="text-primary text-sm p-2 underline border border-primary">
                      + Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-primary text-white p-2 w-24 text-center rounded-full ">
                Buy
              </button>
            </div>
          </div>
        )}
        {/* Sell */}
        {activeTab === "sell" && (
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Sell Items
            </h2>
            <div className="border-b border-gray-300 mb-6 flex gap-8"></div>

            {/* Customer */}
            <div className="mb-6">
              <div className="bg-white max-w-xl mx-auto flex rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-medium mb-2">Customer</h3>
                </div>
                <div className="flex-1 p-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 mb-6 flex gap-8"></div>

            {/* Product */}
            <div className="mb-6">
              <div className="bg-white max-w-xl mx-auto flex rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-medium mb-2">Product</h3>
                </div>
                <div className="flex-1 p-6">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  {/* <select className="w-full p-2 border bg-gray-300 rounded mb-2">
                    <option>Select a product to view details</option>
                    <option>20 in inventory, 85 Recommended limit</option>
                    <option>No details</option>
                  </select> */}

                  <div className="text-sm text-gray-600 mb-2 overflow-auto text-center">
                    <p>Select a product to view details</p>
                    <p>/</p>
                    <p>20 in inventory, 85 Critical limit</p>
                    <p>/</p>
                    <p>No details</p>
                  </div>

                  <input
                    type="text"
                    placeholder="Price"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="number"
                    placeholder="No. of Items"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="date"
                    placeholder="Expiry Date"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <div className="flex justify-center">
                    <button className="text-primary text-sm p-2 underline border border-primary">
                      + Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-primary text-white p-2 w-24 text-center rounded-full ">
                Sell
              </button>
            </div>
          </div>
        )}

        {/* History */}
        {activeTab === "history" && (
          <div className="overflow-x-auto rounded bg-white shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-primary/10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-gray-900 text-sm">
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-primary/10 transition-colors">
                    <td className="px-6 py-3 text-left">{transaction.id}</td>
                    <td>
                      <button
                        aria-label="Download Transaction"
                        className="p-1 text-gray-600 hover:text-primary">
                        <DownloadIcon className="h-5 w-5" />
                      </button>
                    </td>
                    <td className="px-6 py-3 text-left">{transaction.date}</td>
                    <td className="px-6 py-3 text-left">
                      {transaction.product}
                    </td>
                    <td className="px-6 py-3 text-right">
                      {transaction.items}
                    </td>
                    <td className="px-6 py-3 text-right">
                      {transaction.price}
                    </td>
                    <td className="px-6 py-3 text-left">{transaction.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}