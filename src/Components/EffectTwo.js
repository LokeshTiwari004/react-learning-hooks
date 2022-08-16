import React from "react";

function EffectTwo() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    console.log("Updating Title");
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setCount((preCount) => preCount + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default EffectTwo;
