import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../../Redux/slices/incomeSlice";

const Income = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.income.items);

  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const addIncomeHandler = () => {
    if (income.source && income.amount) {
      dispatch(addIncome(income));
      setIncome({
        source: "",
        amount: "",
        date: new Date().toISOString().split("T")[0],
      });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Add Income</h2>
      <div className="space-y-3">
        <input
          className="border p-2 w-full rounded"
          type="text"
          name="source"
          placeholder="Income Source (e.g., Salary, Freelance)"
          value={income.source}
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full rounded"
          type="number"
          name="amount"
          placeholder="Amount"
          value={income.amount}
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full rounded"
          type="date"
          name="date"
          value={income.date}
          onChange={handleChange}
          disabled
        />
        <button
          className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600"
          onClick={addIncomeHandler}
        >
          Add Income
        </button>
      </div>

      {/* Income List */}
      {incomes.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-center mb-3">Income List</h3>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Source</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {incomes.map((inc, index) => (
                <tr key={index} className="text-center border">
                  <td className="border p-2">{inc.source}</td>
                  <td className="border p-2">Rs-{inc.amount}</td>
                  <td className="border p-2">{inc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right font-bold text-lg mt-4">
            Total Income: Rs-
            {incomes.reduce((total, inc) => total + parseFloat(inc.amount), 0)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Income;
