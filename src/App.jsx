import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/navbar";
import "./App.css";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Singup";
import Sidebar from "./Components/sidebar/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Notification from "./pages/Notification";
import ExpList from "./pages/ExpenseList";
import Income from "./pages/Income/Income";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar />  */}
      <div className="flex">
        <Sidebar /> {/* Sidebar for navigation */}
        <div className="flex-1 p-1">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Signup />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/expenselist" element={<ExpList />} />
            <Route path="/income" element={<Income />} />
            <Route path="/logout" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
