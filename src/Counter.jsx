import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, getCounter, getDoubleCounter, increment, reset } from "./counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const doubleCounter = useSelector(getDoubleCounter);
  const trippleCounter = useSelector((state) => getCounter(state, 3));

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Double Counter: {doubleCounter}</h1>
      <h1>Tripple Counter: {trippleCounter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => dispatch(increment(2))}>Increment + 2</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement - 2</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
