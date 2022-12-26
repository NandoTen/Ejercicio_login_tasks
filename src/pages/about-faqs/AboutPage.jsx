import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const AboutPage = () => {

const location = useLocation()
console.log('La ruta es: ', location.pathname)
const history = useNavigate()


const navigate =(path) => {
history(path)
}



  return (
    <div>
      <h1>About | FAQs Page</h1>
      <div>
        <button onClick={()=> navigate('/')}>
          Home
        </button>
        <button onClick={()=> navigate(-1)}>
          Back
        </button>
        <button onClick={()=> navigate(1)}>
          Forward
        </button>
      </div>
    </div>
  )
}

export default AboutPage
