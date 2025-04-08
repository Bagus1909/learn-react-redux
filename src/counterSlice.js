import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decremenet: (state) => {
      return state - 1;
    },
    reset: (state) => {
      return 0;
    },
  },
});

export const { increment, decremenet, reset } = counterSlice.actions;
