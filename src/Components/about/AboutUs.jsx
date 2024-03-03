import React, { useState } from 'react'
import { InputContext } from '../InputContext'
import ContactUs from '../contact/ContactUs'

const AboutUs = () => {
  const [inputData, setInputData] = useState("ffsd")

  // const clickFunc = () => {
  //   console.log(inputData);
  // };

  const change = (event) => {
    setInputData(event.target.value);
  };

  return (
    <InputContext.Provider value={{ inputData, change }}>
      <h5>contactus a input thakbe aboutus, home a input value show hobe wrap korte hobe 1 tate</h5>
      <h4>AboutUs = </h4>
      <ContactUs />
    </InputContext.Provider>
  )
}

export default AboutUs