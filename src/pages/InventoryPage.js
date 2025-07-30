import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

const inventoryData = [
  {
    id: 1,
    product: "Pat Black",
    items: 25,
    price: 450,
    expiryDate: "2025-07-05",
  },
  {
    id: 2,
    product: "Angel Jones",
    items: 66,
    price: 325,
    expiryDate: "2025-07-15",
  },
  {
    id: 3,
    product: "Max Edwards",
    items: 3,
    price: 25,
    expiryDate: "2025-07-30",
  },
  {
    id: 4,
    product: "Bruce Fox",
    items: 120,
    price: 1500,
    expiryDate: "2025-07-20",
  },
  {
    id: 5,
    product: "Devon Fisher",
    items: 15,
    price: 999,
    expiryDate: "2025-07-15",
  },
];

// Utility to check if expiry date is near (within 30 days from today)
const isNearExpiry = (expiryDate) => {
  const today = new Date();
  const expiry = new Date(expiryDate);

  today.setHours(0, 0, 0, 0); // Normalize today's date for comparison
  expiry.setHours(0, 0, 0, 0); // Normalize expiry date for comparison
  const diffTime = expiry - today;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= 30 && diffDays >= 0;
};

export default function Inventory() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredData =
    activeTab === "near-expiry"
      ? inventoryData.filter((item) => isNearExpiry(item.expiryDate))
      : inventoryData;

  return (
    <div className="flex h-screen font-sans bg-[#f1f6f9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Inventory header and tabs */}
        <h2 className="text-2xl font-bold mb-4">Inventory</h2>
        <div className="border-b border-gray-300 mb-6 flex gap-8">
          <button
            className={`py-2 px-4 -mb-px font-semibold border-b-2 ${
              activeTab === "all"
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-primary"
            }`}
            onClick={() => setActiveTab("all")}
            aria-current={activeTab === "all" ? "page" : undefined}>
            All
          </button>
          <button
            className={`py-2 px-4 -mb-px font-semibold border-b-2 ${
              activeTab === "near-expiry"
                ? "border-blue-600 text-primary"
                : "border-transparent text-gray-600 hover:text-primary"
            }`}
            onClick={() => setActiveTab("near-expiry")}
            aria-current={activeTab === "near-expiry" ? "page" : undefined}>
            Near Expiry
          </button>
        </div>

        {/* Inventory Table */}
        <div className="overflow-x-auto rounded bg-white shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primary/10">
              <tr>
                {activeTab === "all" && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {activeTab === "all" ? "Price" : "Days Left"}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-gray-900 text-sm">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-400">
                    No items found.
                  </td>
                </tr>
              ) : (
                filteredData.map(
                  ({ id, product, items, price, expiryDate }) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); // Normalize today's date for comparison
                    const expiry = new Date(expiryDate);
                    expiry.setHours(0, 0, 0, 0); // Normalize expiry date for comparison
                    const daysLeft = Math.ceil(
                      (expiry - today) / (1000 * 60 * 60 * 24)
                    );
                    return (
                      <tr
                        key={id}
                        className="hover:bg-primary transition-colors">
                        {activeTab === "all" && (
                          <td className="px-6 py-3 flex gap-2 text-lg text-gray-600">
                            <button
                              aria-label={`Edit ${product}`}
                              className="p-1 text-gray-600 hover:text-primary">
                              <PencilIcon className="h-5 w-5" />
                            </button>
                            <button
                              aria-label={`Delete ${product}`}
                              className="p-1 text-gray-600 hover:text-red-600">
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </td>
                        )}
                        <td className="px-6 py-3">{product}</td>
                        <td className="px-6 py-3 text-center">{items}</td>
                        <td className="px-6 py-3 text-right">
                          {activeTab === "near-expiry"
                            ? `${daysLeft}`
                            : //  day${daysLeft !== 1 ? "s" : ""} left`
                              `₹${price.toFixed(2)}`}
                        </td>
                      </tr>
                    );
                  }
                )
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
