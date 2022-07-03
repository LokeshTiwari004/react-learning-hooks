import React, { useState } from "react";
import EffectFourChild from "./EffectFourChild";

function EffectFourParent() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay((preDisplay) => !preDisplay);
        }}
      >
        Toggle Display
      </button>
      {
        display && <EffectFourChild />
      }
    </div>
  );
}

export default EffectFourParent;
