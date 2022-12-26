import React from 'react'
import { useLocation } from 'react-router-dom'

const StatePage= ()=> {

const location = useLocation()



console.log('Location state', location) // state sent
console.log('Query Params', location.search) // Query Params sent

const state = location.state
const search = location.search
let result= ''

if(state){result=`state a pasado ${location.state.test}`}
else if(search){result=`search a pasado ${location.search}`}


  return (
    <div>
      <h3>State: {result}</h3>
    </div>
  )
}

export default StatePage
