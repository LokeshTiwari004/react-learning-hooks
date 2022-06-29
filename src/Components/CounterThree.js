import React, { useState } from "react";

function CounterThree() {
  const [name, setName] = useState({ fname: "", lname: "" });

  // const handleChange = (event) =>
  //   setName((preName) => ({
  //     ...preName,
  //     [event.target.name]: event.target.value,
  //   }));
  // ----------------------OR------------------
  const handleChange = (event) =>
    setName({
      ...name,
      [event.target.name]: event.target.value,
    });

  return (
    <div>
      <form>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="fname"
          id="fname"
          value={name.fname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={name.lname}
          onChange={handleChange}
        />
      </form>
      <h2>Your First Name is : {name.fname} </h2>
      <h2>Your Last Name is : {name.lname} </h2>
      <h1>name: {JSON.stringify(name)}</h1>
    </div>
  );
}

export default CounterThree;
