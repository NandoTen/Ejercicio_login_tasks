import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskForm from '../pure/forms/taskForm'
import TaskFormik from '../pure/forms/taskFormik'
import TaskComponent from '../pure/task'


const TaskListComponent = props => {

      const defaultTask1 = new Task('Example1','Default Description 1', false, LEVELS.NORMAL)
      const defaultTask2 = new Task('Example2','Default Description 2', true, LEVELS.URGENT)
      const defaultTask3 = new Task('Example3','Default Description 3', false, LEVELS.BLOCKING)

      // estado del componente
      const[tasks,setTasks] = useState([defaultTask1,defaultTask2,defaultTask3])
      const[loading,setLoading] = useState(true)


      // Control del ciclo del compponente
      useEffect(()=>{
        console.log('Task state has been modified')
        setTimeout(()=>{

          setLoading(false)
        },2000)
        
        return()=>{
          console.log('Task list component unmount')
        }

      },[tasks])

      const deleteTask=(task)=>{
        console.log('Delete this task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index,1)
        setTasks(tempTasks)
      }

      const completeTask=(task)=>{
        console.log('Complete this task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        // actualizamos el estado de tasks para que actalice la iteración de map()
        setTasks(tempTasks)
      }

      const addTask=(task)=>{
        console.log('Add this task:', task)

        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
      }

      const Table =()=>{
          return(

        
            <table>
                  <thead>
                      <tr>
                        <th scope ='col'>Title</th>
                        <th scope ='col'>Description</th>
                        <th scope ='col'>Priority</th>
                        <th scope ='col'>Actions</th>
                      </tr>
                  </thead>
                  <tbody> 
                  { tasks.map((task,index)=>{
                    return( <TaskComponent 
                        task ={task} 
                        key={index}
                        complete ={completeTask}
                        remove ={deleteTask}
                        ></TaskComponent>)
                    })
                  }
                  </tbody>
                </table>
          )

      }
      let taskTable
      

      if(tasks.length > 0){taskTable =<Table></Table>}else{taskTable =(<div><h3>There are no tasks to show</h3><h4>Add one</h4></div>)}
      
        return (
          <div className='col-12'>
              <div className='card'>
                <div className='card-header p-3'>
                <h5>Your Tasks:</h5>
                </div>
              
              <div className='card-body' style={{positio:'relative', height:'400px'}}>
              
                {loading ? (
                  <div>
                  <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                  </div><p>Loading</p></div>): taskTable}
              </div>
              </div>
              <TaskForm add={addTask} length={tasks.length}></TaskForm>
              <TaskFormik add={addTask} length={tasks.length}></TaskFormik>
          </div>
        )
      }



export default TaskListComponent
