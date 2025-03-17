import React from "react";

const Datas = () => {
  return (
    <div className="flex justify-center gap-6 p-6">
      {/* Income Box */}
      <div className="w-1/3 p-6 border-2 border-green-500 bg-green-100 shadow-lg rounded-lg text-center">
        <h1 className="text-xl font-bold text-green-700">Your Income</h1>
        <p className="text-2xl font-semibold mt-2">Rs. 00,000</p>
      </div>

      {/* Expense Box */}
      <div className="w-1/3 p-6 border-2 border-red-500 bg-red-100 shadow-lg rounded-lg text-center">
        <h1 className="text-xl font-bold text-red-700">Your Expense</h1>
        <p className="text-2xl font-semibold mt-2">Rs. 00,000</p>
      </div>

      {/* Remaining Balance Box */}
      <div className="w-1/3 p-6 border-2 border-blue-500 bg-blue-100 shadow-lg rounded-lg text-center">
        <h1 className="text-xl font-bold text-blue-700">Your Remaining</h1>
        <p className="text-2xl font-semibold mt-2">Rs. 00,000</p>
      </div>
    </div>
  );
};

export default Datas;
