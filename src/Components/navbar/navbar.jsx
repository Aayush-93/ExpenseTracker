import React from "react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-900 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Expense Tracker</h1>
      <div>
        <Link to="/dashboard" className="mx-3">Dashboard</Link>
        <Link to="/home" className="mx-3">Expenses</Link>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
