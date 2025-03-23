import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../Redux/slices/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const response = await fetch(
        "https://4d38-103-10-28-233.ngrok-free.app/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Login failed");

      dispatch(loginSuccess(result));

      // Store JWT token in localStorage
      const token = result.token; // Assuming result contains 'token'
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(result.user));

      // Make a request to a protected API endpoint with the token
      // const protectedResponse = await fetch(
      //   "endpointhttps://your-backend-url.com/protected-",
      //   {
      //     method: "GET", // or "POST", depending on your API
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`, // Send token here
      //     },
      //   }
      // );

      // const protectedData = await protectedResponse.json();
      // if (!protectedResponse.ok)
      //   throw new Error(
      //     protectedData.message || "Failed to fetch protected data"
      //   );

      // // Handle the protected data response if needed
      // console.log(protectedData);

      // Redirect to the home page after successful login and API call
      setTimeout(() => navigate("/home"), 2000);
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6">Login</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            autoComplete="username"
            className="p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoComplete="current-password"
            className="p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-gradient-to-l transition-all"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-5 text-gray-700 text-sm">
          Don't have an account?
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 font-semibold hover:underline ml-1"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
