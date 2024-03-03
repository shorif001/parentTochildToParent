import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Component3 = () => {
  const { user, text } = useContext(UserContext)
  console.log("first", user)
  return (
    <>
      <div>
        <h1>{text} to Component3</h1>
        <h1>{user.name} component1 to Component3</h1>
      </div>

    </>
  )
}

export default Component3