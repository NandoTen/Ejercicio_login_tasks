import React from 'react'
import LoginFormik from '../../components/pure/forms/loginFormik'
import {useNavigate} from 'react-router-dom'

const LoginPage = ({loogedF}) => {

  const history = useNavigate()

  const navigate =(path) => {
    history(path)
  }

  let values = sessionStorage.getItem("session")

  let obj = JSON.parse(values)

  /* console.log(obj.username)
 */
  return (
    <div>
      <h1>Login Page</h1>
      <LoginFormik value = {obj} loogedF={loogedF}></LoginFormik>
      <button onClick={()=> navigate('/register')}>
          Register
        </button>
        <button onClick={()=> navigate('/')}>
          Home
        </button>
    </div>
  )
}

export default LoginPage
