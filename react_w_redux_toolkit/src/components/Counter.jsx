import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementAsync, incrementByAmount } from '../features/counterSlice';

function Counter() {
  const [amount, setAmount] = useState(1);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>Add amount</button>
      <button onClick={() => dispatch(incrementAsync(amount))}>Add amount asynchronously</button>
    </div>
  )
}

export default Counter;