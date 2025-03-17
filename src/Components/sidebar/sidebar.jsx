import React from "react";
import { Home, Bell, DollarSign, List, Wallet, TrendingUp } from "lucide-react";
import { NavLink } from "react-router-dom"; // Correct Import

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4 flex flex-col space-y-6 shadow-lg">
      <h2 className="text-2xl font-bold text-center">Expense Tracker</h2>
      
      {/* Sidebar Navigation */}
      <nav className="flex flex-col space-y-4">
        <NavLink to="/home" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <Home className="w-5 h-5" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/notification" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <Bell className="w-5 h-5" />
          <span>Notifications</span>
        </NavLink>

        <NavLink to="/expenselist" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <Wallet className="w-5 h-5" /> 
          <span>Expenses</span>
        </NavLink>

        <NavLink to="/income" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <DollarSign className="w-5 h-5" />
          <span>Income</span>
        </NavLink>

        <NavLink to="/transactions" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <TrendingUp className="w-5 h-5" />
          <span>Transactions</span>
        </NavLink>

        <NavLink to="/other" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <List className="w-5 h-5" />
          <span>Other</span>
        </NavLink>

        <NavLink to="/logout" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <span>LogOut</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
