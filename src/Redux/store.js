import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import expenseReducer from "./slices/expenseSlice";
import incomeReducer from "./slices/incomeSlice";
// import notificationReducer from "./slices/notificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
    income: incomeReducer,
    // notification: notificationReducer,
  },
});

export default store;
