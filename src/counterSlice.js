import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      if (action.payload) {
        return state + action.payload;
      } else {
        return state + 1;
      }
    },
    decrement: (state, action) => {
      if (action.payload) {
        return state - action.payload;
      } else {
        return state - 1;
      }
    },
    reset: (state) => {
      return 0;
    },
  },
  selectors: {
    getDoubleCounter: (state) => {
      return state * 2;
    },
    getCounter: (state, value) => {
      return state * value;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const { getDoubleCounter, getCounter } = counterSlice.selectors;
