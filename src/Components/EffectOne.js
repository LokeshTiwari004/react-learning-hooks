import React, { useEffect, useState } from "react";

function EffectOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`
  })

  return (
    <button onClick={() => setCount((preCount) => preCount + 1)}>
      Clicked {count} times
    </button>
  );
}

export default EffectOne;
