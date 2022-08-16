import React, { useEffect, useState } from "react";

function EffectFive() {
  const [count, setCount] = useState(0);
  
  const tick = () => {
    setCount(preCount => preCount + 1);
  };

  useEffect(() => {  
    const interval = setInterval(tick, 1000);
    // setTimeout(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Count - {count}</h1>;
}

export default EffectFive;
