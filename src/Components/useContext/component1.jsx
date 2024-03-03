import React, { useState } from 'react'
import { UserContext } from './UserContext'
import Component2 from './component2'

const Component1 = () => {

  const [user, setUser] = useState({
    id: 101,
    name: "shorif"
  })

  const [text, setText] = useState("hello i am text from component1")

  return (
    <>
      <UserContext.Provider value={{ user, text }}>
        comp1
        <Component2 />
      </UserContext.Provider>
    </>
  )
}

export default Component1