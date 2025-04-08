import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremenet, increment, reset } from "./counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decremenet());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
