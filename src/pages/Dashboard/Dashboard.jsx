import React, { useState } from "react";
import ExpenseTracker from "../Expense/expform";
import Datas from "../Expense/Datas";

const Dashboard = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  // Calculate total expense
  const totalExpense = expenses.reduce(
    (total, exp) => total + parseFloat(exp.amount || 0),
    0
  );

  // Calculate remaining balance
  const remaining = income - totalExpense;

  return (
    <div>
      <Datas
        income={income}
        setIncome={setIncome}
        totalExpense={totalExpense}
        remaining={remaining}
      />
      <ExpenseTracker expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
};

export default Dashboard;
