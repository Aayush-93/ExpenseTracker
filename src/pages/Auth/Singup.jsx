import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  signupStart,
  signupSuccess,
  signupFailure,
} from "../../Redux/slices/authSlice";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Form validation
    if (
      Object.values(formData).some((field) => !field.trim()) ||
      !formData.role
    ) {
      dispatch(
        signupFailure("Please fill out all fields, including selecting a role.")
      );
      return;
    }

    dispatch(signupStart());
    try {
      const response = await axios.post(
        "https://4d38-103-10-28-233.ngrok-free.app/api/auth/signup",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch(signupSuccess("Signup successful!"));
      setFormData({
        username: "",
        email: "",
        password: "",
        name: "",
        role: "",
      });
      navigate("/login");
    } catch (err) {
      // More comprehensive error handling
      const errorMessage =
        err.response?.data?.message || "Signup failed. Please try again.";
      dispatch(signupFailure(errorMessage));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-3">{success}</p>}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
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
          <p className="mt-5 text-gray-700 text-sm">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Log In
            </button>
          </p>
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-gradient-to-l transition-all"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
