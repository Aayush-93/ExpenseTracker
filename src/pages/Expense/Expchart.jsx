import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ExpenseChart = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + parseFloat(exp.amount);
    return acc;
  }, {});

  const data = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
  }));

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#FF4D4D"];

  return (
    <div className="w-full flex flex-col items-center p-1 ">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Expense Distribution</h3>
      {expenses.length > 0 ? (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: Rs-${value}`}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#333",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "10px",
                  fontSize: "14px",
                  border: "none",
                }}
                formatter={(value) => `Rs-${value}`}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: "20px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                formatter={(value) => <span className="text-gray-700">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg mb-4">No expenses added yet.</p>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => console.log("Add Expense clicked")}
          >
            Add Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpenseChart;