import React, {useState} from 'react'

export default function test() {

let test = 0

  return (
    <div>
      <h1> Test {test}</h1>
      <button onClick={sumar}>SUMA</button>
    </div>
  )

  function sumar(){
   test += 1
   console.log('test = ', test)

  }
}
