import React, { useState } from "react";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/outline";

const employeesData = [
  {
    id: 1,
    name: "Pat Black",
    gender: "Male",
    email: "bill.berry@example.com",
    age: 28,
  },
  {
    id: 2,
    name: "Angel Jones",
    gender: "Female",
    email: "glen.ramirez@example.com",
    age: 36,
  },
  {
    id: 3,
    name: "Max Edwards",
    gender: "Female",
    email: "renee.hughes@example.com",
    age: 27,
  },
  {
    id: 4,
    name: "Bruce Fox",
    gender: "Male",
    email: "craig.kelley@example.com",
    age: 43,
  },
  {
    id: 5,
    name: "Devon Fisher",
    gender: "Male",
    email: "joy.ramos@example.com",
    age: 32,
  },
];

export default function App() {
  const [employees, setEmployees] = useState(employeesData);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    age: "",
  });
  const [isAdding, setIsAdding] = useState(false);

  // const onEdit = (id) => {
  //   const emp = employees.find((e) => e.id === id);
  //   setEditingId(id);
  //   setFormData({
  //     name: emp.name,
  //     gender: emp.gender,
  //     email: emp.email,
  //     age: emp.age,
  //   });
  // };

  // const onDelete = (id) => {
  //   setEmployees(employees.filter((e) => e.id !== id));
  // };

  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((d) => ({
  //     ...d,
  //     [name]: value,
  //   }));
  // };

  // const onSave = () => {
  //   if (editingId !== null) {
  //     setEmployees((ex) =>
  //       ex.map((emp) =>
  //         emp.id === editingId
  //           ? { ...emp, ...formData, age: Number(formData.age) }
  //           : emp
  //       )
  //     );
  //     setEditingId(null);
  //   } else if (isAdding) {
  //     const newEmployee = {
  //       id: Math.max(...employees.map((e) => e.id)) + 1,
  //       ...formData,
  //       age: Number(formData.age),
  //     };
  //     setEmployees([...employees, newEmployee]);
  //     setIsAdding(false);
  //   }
  //   setFormData({ name: "", gender: "", email: "", age: "" });
  // };

  const onCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ name: "", gender: "", email: "", age: "" });
  };

  const openAddForm = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({ name: "", gender: "", email: "", age: "" });
  };

  return (
    <>
      <div className="flex h-screen font-sans bg-[#f1f6f9]">
        {/* <div> */}
        {/* Sidebar */}
        <aside className="w-[220px] bg-white shadow-md flex flex-col">
          <nav className="flex-1 pt-6">
            <ul className="list-none pl-5 text-[#586e75]">
              <li className="mb-6 cursor-pointer flex items-center">
                <span className="mr-2 text-lg text-[#2c3e50]">🏠</span> Home
              </li>
              <li className="mb-6 cursor-pointer flex items-center">
                <span className="mr-2 text-lg text-[#2c3e50]">📋</span>{" "}
                Inventory
              </li>
              <li className="mb-6 cursor-pointer flex items-center">
                <span className="mr-2 text-lg text-[#2c3e50]">👥</span>{" "}
                Employees
              </li>
              <li className="mb-6 cursor-pointer flex items-center">
                <span className="mr-2 text-lg text-[#2c3e50]">📄</span>{" "}
                Transactions
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex w-full h-screen bg-gray-50 text-gray-700 font-sans">
          <main className="flex-1 p-8 overflow-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl font-semibold mb-6">Employees</h2>

              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-blue-50 text-gray-600 text-sm font-semibold">
                    <tr>
                      <th className="px-4 py-3 w-32"></th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Gender</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(isAdding ? [] : employees).map((emp) => (
                      <tr
                        key={emp.id}
                        className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 space-x-1">
                          <button
                            // onClick={() => onEdit(emp.id)}
                            aria-label={`Edit ${emp.name}`}
                            className="p-1 text-gray-600 hover:text-blue-600">
                            <PencilIcon className="h-5 w-5" />
                          </button>
                          <button
                            // onClick={() => onDelete(emp.id)}
                            aria-label={`Delete ${emp.name}`}
                            className="p-1 text-gray-600 hover:text-red-600">
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </td>
                        <td className="px-4 py-3">{emp.name}</td>
                        <td className="px-4 py-3">{emp.gender}</td>
                        <td className="px-4 py-3">{emp.email}</td>
                        <td className="px-4 py-3">{emp.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Editing or Adding Row */}
                <table>
                  <tbody>
                    {(editingId !== null || isAdding) && (
                      <div>Add Employee</div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Floating add button bottom right */}
            {!isAdding && editingId === null && (
              <button
                onClick={openAddForm}
                aria-label="Add employee"
                className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                <PlusIcon className="h-6 w-6" />
              </button>
            )}

            {/* Close add/edit button if editing or adding */}
            {(isAdding || editingId !== null) && (
              <button
                onClick={onCancel}
                aria-label="Cancel"
                className="fixed bottom-8 right-8 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400">
                <XIcon className="h-6 w-6" />
              </button>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
