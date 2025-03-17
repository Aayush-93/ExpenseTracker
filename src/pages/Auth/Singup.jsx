import React, { useState } from "react";
import { useNavigate } from "react-router"; // Make sure to use react-router-dom
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field.trim())) {
      setError("Please fill out all fields.");
      setSuccess("");
      return;
    }

    try {
      await axios.post(
        "https://5e3e-103-10-28-234.ngrok-free.app/api/auth/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setSuccess("Signup successful!");
      setError("");
      setFormData({
        username: "",
        email: "",
        password: "",
        name: "",
        role: "",
      });

      navigate("/login"); // Navigate to login page on successful signup
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
      setSuccess("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission when Enter is pressed
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-3">{success}</p>}
        <form onSubmit={handleSignup} className="flex flex-col gap-4" onKeyDown={handleKeyDown}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />

          {/* Role */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>

          {/* Login Link */}
          <p className="mt-5 text-gray-700 text-sm">
            Already have an account?{" "}
            <button
              type="button" // Ensure the Login link doesn't trigger form submission
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Log In
            </button>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-gradient-to-l transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
