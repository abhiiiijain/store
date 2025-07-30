import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
import EmployeeAddModal from "../components/EmployeeModal";

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

export default function EmployeePage() {
  const [employees, setEmployees] = useState(employeesData);
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAddForm = () => {
    setEditingId(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddEmployee = (form) => {
    const newEmployee = {
      id: Math.max(...employees.map((e) => e.id), 0) + 1,
      name: `${form.firstName} ${form.lastName}`,
      gender: form.gender,
      email: form.email,
      age: Number(form.age),
      type: form.type,
    };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="flex h-screen font-sans bg-[#f1f6f9]">
      <Sidebar />
      <div className="flex w-full h-screen text-gray-700 font-sans">
        <main className="flex-1 p-8 overflow-auto bg-[#f1f6f9]">
            <h2 className="text-2xl font-bold mb-4">Employees</h2>

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
                  {employees.map((emp) => (
                    <tr
                      key={emp.id}
                      className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 space-x-1">
                        <button
                          // onClick={() => onEdit(emp.id)}
                          aria-label={`Edit ${emp.name}`}
                          className="p-1 text-gray-600 hover:text-primary">
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
            </div>
          

          {/* Floating Add Button */}
          {editingId === null && (
            <button
              onClick={openAddForm}
              aria-label="Add employee"
              className="fixed bottom-8 right-8 bg-primary hover:bg-primary/80 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <PlusIcon className="h-6 w-6" />
            </button>
          )}

          {/* Add Modal */}
          <EmployeeAddModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onRegister={handleAddEmployee}
          />
        </main>
      </div>
    </div>
  );
}
