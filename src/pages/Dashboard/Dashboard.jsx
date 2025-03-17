import React from "react";
import ExpenseTracker from "../Expense/expform";
import Datas from "./Datas";

const Dashboard = () => {
  return (
    <div>
      <Datas />
      <ExpenseTracker />
    </div>
  );
};

export default Dashboard;
