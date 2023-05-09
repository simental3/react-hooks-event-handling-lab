// Code Keypad Component Here
import React from 'react'

function Keypad (){

  function handlePasswordChange() {
    console.log("Entering password...")
  }

  return (
    <div>
      <input
        type="password"
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
    </div>
  )
}

export default Keypad;