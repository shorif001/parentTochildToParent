import React from "react";
import Three from "./three";

const Two = ({ name, handleClick, change, clickFunc, inputData }) => {
  console.log("🚀 ~ Two ~ name:", name);

  return (
    <>
      <h1>input value {inputData} </h1>
      <h1>2nd {name + 2}</h1>
      <Three handleClick={handleClick} change={change} inputData={inputData} />
    </>
  );
};

export default Two;
