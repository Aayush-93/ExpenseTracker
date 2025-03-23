import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalIncome: 0,
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.items.push(action.payload);
      state.totalIncome = state.items.reduce(
        (total, inc) => total + parseFloat(inc.amount),
        0
      );
    },
  },
});

export const { addIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
