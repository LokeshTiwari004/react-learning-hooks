import React, { useEffect, useState } from "react";

function EffectFourChild() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse Moved");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("Component Mounting Code");
    window.addEventListener("mousemove", logMousePosition);
    
    return () => {
      console.log("Component UnMounting Code");
      window.removeEventListener("mousemove", logMousePosition);
    }
  }, []);
  
  return (
    <div>
      Hooks X - {x}, Y - {y}
    </div>
  );
}

export default EffectFourChild;
