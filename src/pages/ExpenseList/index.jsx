import React from "react";
import { useSelector } from "react-redux";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Expenses</h2>

      {expenses.length > 0 ? (
        <ul className="space-y-4">
          {expenses.map((exp, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg border-l-4 border-blue-500"
            >
              <div>
                <h3 className="font-semibold text-lg">{exp.name}</h3>
                <p className="text-gray-600 text-sm">
                  Category: {exp.category}
                </p>
                <p className="text-gray-500 text-sm">Date: {exp.date}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-blue-600">
                  Rs. {exp.amount}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-lg font-medium">
          No expenses added yet.
        </p>
      )}
    </div>
  );
};

export default ExpenseList;
