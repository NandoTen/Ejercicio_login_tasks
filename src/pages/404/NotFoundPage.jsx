import React from 'react'
import {useNavigate} from 'react-router-dom'

const NotFoundPage = () => {

const history = useNavigate()

const goBack =()=>{
  history('/')
}


  return (
    <div>
      <h1>Page not Found 404</h1>
      <button onClick={goBack}>Home</button>
    </div>
  )
}

export default NotFoundPage
