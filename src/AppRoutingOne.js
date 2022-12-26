import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage'
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';


function AppRoutingOne() {

let logged = true

/*   useEffect(()=>{
     logged = localStorage.getItem('credentials')
console.log('User Logged?', logged)
  },[]) */

const taskList= [
  {
  id: 1,
  name: 'Task1',
  description: 'My firts task'
},
{
  id: 2,
  name: 'Task2',
  description: 'My second task'
}
]

  return (

   <Router>
      
      <div>
        <aside>
          <Link to='/'> Home | </Link>
          <Link to='/about'> About | </Link>
          <Link to='/faqs'> Faqs | </Link>
          <Link to='/profile'> Profile |</Link>
          <Link to='/login'> Login |</Link>
          <Link to='/tasks/1'> Task1 |</Link>
          <Link to='/tasks/2'> Task2 |</Link>
          <Link to='/any404'> 404 |</Link>
        </aside>
      </div>

      


      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/state' element={<StatePage/>}/>
        <Route path='/login' element={
          logged ? <AboutPage/> : <LoginPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/faqs' element={<AboutPage/>}/>

        <Route path='/profile' element=
          {
            logged ? <ProfilePage/> : <Navigate replace to={'/login'}/>  
          }
        >
        </Route>
        <Route path='/tasks'>
            <Route index element={<TaskPage/>}/>
            <Route path=':id' element={<TaskDetailPage task={taskList}/>}/>

        </Route>


        {/* 404 Page not found */}
        <Route path = '*' element={<NotFoundPage/>}/>


      </Routes>
   </Router>
  );
}

export default AppRoutingOne;
