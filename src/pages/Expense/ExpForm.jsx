import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../../redux/slices/expenseSlice";
import ExpenseChart from "./expchart";

const ExpenseTracker = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);

  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    category: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const addExpenseHandler = () => {
    if (expense.name && expense.amount && expense.date && expense.category) {
      dispatch(
        addExpense({
          ...expense,
          id: Date.now(),
          amount: parseFloat(expense.amount),
        })
      );

      setExpense({
        name: "",
        amount: "",
        date: new Date().toISOString().split("T")[0],
        category: "",
      });
    }
  };

  return (
    <div className="flex justify-between gap-10 p-8">
      {/* Expense Form */}
      <div className="w-full md:w-1.5/4 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h2>
        <div className="space-y-3">
          <input
            className="border p-2 w-full rounded"
            type="text"
            name="name"
            placeholder="Expense Name"
            value={expense.name}
            onChange={handleChange}
          />
          <input
            className="border p-2 w-full rounded"
            type="number"
            name="amount"
            placeholder="Amount"
            value={expense.amount}
            onChange={handleChange}
          />
          <input
            className="border p-2 w-full rounded"
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            disabled
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            name="category"
            placeholder="Category"
            value={expense.category}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            onClick={addExpenseHandler}
          >
            Add Expense
          </button>
        </div>

        {/* Expense List */}
        {expenses.length > 0 ? (
          <>
            <h3 className="text-lg font-bold text-center mb-3">Expense List</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Amount</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((exp, index) => (
                    <tr key={index} className="text-center border">
                      <td className="border p-2">{exp.name}</td>
                      <td className="border p-2">Rs-{exp.amount}</td>
                      <td className="border p-2">{exp.date}</td>
                      <td className="border p-2">{exp.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 font-semibold text-lg mt-4">
            You don't have any expenses till now.
          </div>
        )}
      </div>

      {/* Expense Chart */}
      <div className="w-full md:w-2.5/4 bg-white shadow-lg rounded-lg p-1">
        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
};

export default ExpenseTracker;
