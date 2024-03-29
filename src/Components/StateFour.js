import React, { useState } from "react";

function CounterFour() {
  const [items, setItems] = useState([]);

  // const addItem = () =>
  //   setItems((preItems) => [
  //     ...preItems,
  //     { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
  //   ]);
  // -----------------OR-------------------
  const addItem = () =>
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 }
    ]);

  return (
    <div>
      <button onClick={addItem}>Add A Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterFour;
