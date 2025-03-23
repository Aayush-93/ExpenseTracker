import { createSlice } from "@reduxjs/toolkit";

// Safely parse user from localStorage
let parsedUser = null;
try {
  const storedUser = localStorage.getItem("user");
  parsedUser = storedUser ? JSON.parse(storedUser) : null;
} catch (e) {
  console.error("Invalid user JSON in localStorage", e);
  localStorage.removeItem("user"); // Optional: clean corrupted data
  parsedUser = null;
}

const initialState = {
  user: parsedUser,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login Actions
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;

      // Store in localStorage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Signup Actions
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;

      // Store in localStorage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Logout
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;

      // Remove from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
