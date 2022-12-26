
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
import DashboardPage from './dashboard/Dashboard'
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import HomePage from './pages/home/HomePage'
import TaskPage from './pages/tasks/TaskPage'


function AppRoutingFinal() {

const [logged, setLogged] = useState(false)


//sessionStorage.setItem("logged", logged)

const isLogged =(data)=>{
  console.log('DATA: ', data)
setLogged(data)
}

useEffect(()=>{
  sessionStorage.setItem("logged", logged)
  console.log('Datos del Usuario:', logged)
},[logged])


  return (
    
    <Router>
        <Routes>
            <Route path='/' element ={<HomePage loogedF={isLogged}/>}/>
            
            <Route path='/login' element=
            { 
              
              logged ? <Navigate  to={'/tasks'} replace/>:<LoginPage loogedF={isLogged}/>
            
            
            }/>
            
            <Route path='/register' element={<RegisterPage/>}/>
            
            <Route path='/tasks' element =
            {
              logged ?
              <TaskPage/>
              :
              <Navigate  to={'/login'} replace/>  
            }/>
            <Route element={<NotFoundPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutingFinal
