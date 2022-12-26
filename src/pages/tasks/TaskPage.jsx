import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import TaskListComponent from '../../components/container/task_list'
import TaskDetailPage from './TaskDetailPage'

const TaskPage = () => {

  const history = useNavigate()


const navigate =() => {
  history('/')
}


  return (
    <div>
    <button onClick={navigate}>Home</button>
      <TaskListComponent></TaskListComponent>
      <Routes>
        <Route path=':id' element={<TaskDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default TaskPage
