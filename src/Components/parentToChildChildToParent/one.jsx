import React, { useState } from "react";
import Two from "./two";

const One = () => {
  const [name, setName] = useState(
    //"jhon"
    0
  );
  console.log("🚀 ~ One ~ name:", name);

  const handleClick = () => {
    // if (name === "jhon") {
    //   setName("jaki");
    // } else {
    //   setName("jhon");
    // }
    setName(name + 1);
  };

  const [inputData, setInputData] = useState("test");

  const clickFunc = () => {
    console.log(inputData);
  };

  const change = (event) => {
    setInputData(event.target.value);
  };

  return (
    <div className="App">
      <h1>1st c input data is {inputData}</h1>
      <h1>1st {name}</h1>
      <Two
        name={name}
        handleClick={handleClick}
        inputData={inputData}
        clickFunc={clickFunc}
        change={change}
      />


      {/* useContextStart */}
    </div>
  );
};

export default One;
