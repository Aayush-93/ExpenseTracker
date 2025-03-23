import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (exp) => exp.id !== action.payload
      );
    },
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
  },
});

export const { addExpense, removeExpense, setExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
