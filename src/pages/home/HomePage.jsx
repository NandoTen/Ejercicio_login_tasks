import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = ({loogedF}) => {

  const history = useNavigate()


const navigate =(path) => {
  history(path)
}

const logout = ()=>{
  sessionStorage.setItem('logged', false)
  loogedF(false)
  history('/login')
}


  return (
    <div>
      <h1>Home Page</h1>
      <h2>Dashboard</h2>
      <div>
  
        <button onClick={()=> navigate('/login')}>
          Login
        </button>
        <button onClick={()=> navigate('/register')}>
          Register
        </button>
        <button onClick={()=> navigate('/tasks')}>
          Tasks
        </button>
        <button onClick={logout}>
          Logout
        </button>
 
      </div>
    </div>
  )
}

export default HomePage
