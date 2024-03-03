import React, { useContext } from 'react'
import { InputContext } from '../InputContext'

const ContactUs = () => {

  const { inputData, change } = useContext(InputContext)
  console.log("🚀 ~ ContactUs ~ inputData:", inputData)
  return (
    <div>ContactUs

      <input onChange={change} value={inputData} type="text" />
    </div>
  )
}

export default ContactUs