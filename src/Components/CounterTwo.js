import React, { useState } from "react";

function CounterTwo() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(preCount => preCount + 1);
    }
  };

  return (
    <div>
      Count {count}
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount(preCount => preCount + 1)}>Increment</button>
      <button onClick={() => setCount(preCount => preCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment Five</button>
    </div>
  );
}

export default CounterTwo;
