import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setCount } from "./actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [newCount, setNewCount] = useState(0); // Local state to hold the input value

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <input
          type="number"
          value={newCount}
          onChange={(e) => setNewCount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(setCount(newCount))}>Set Count</button>
      </div>
    </div>
  );
};

export default Counter;
