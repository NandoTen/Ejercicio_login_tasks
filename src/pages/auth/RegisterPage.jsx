import React from 'react'
import RegisterFormik from '../../components/pure/forms/registerFormik'
import {useNavigate} from 'react-router-dom'

const RegisterPage = () => {

  const history = useNavigate()

  const navigate =(path) => {
    history(path)
  }

  return (
    <div>
      <h1>Register Page</h1>
      <RegisterFormik></RegisterFormik>
      <button onClick={()=> navigate('/login')}>
          Login
        </button>
    </div>
  )
}

export default RegisterPage
