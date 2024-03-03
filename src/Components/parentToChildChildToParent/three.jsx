import React from "react";

const Three = ({ handleClick, change, inputData, clickFunc }) => {
  return (
    <div>
      Three
      <input onChange={change} value={inputData} />
      <button onClick={clickFunc}>getInputData</button>
      <button onClick={() => handleClick()}>Click mee</button>
    </div>
  );
};

export default Three;
