import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
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
        setLoading(false)
        return()=>{
          console.log('Task list component unmount')
        }

      },[tasks])



      const changeCompleted=(id)=>{
        console.log('Cambiar estado de una tarea')
      }

        return (
          <div className='col-12'>
              <div className='card'>
                <div className='card-header p-3'>
                <h5>Your Tasks:</h5>
                </div>
              </div>
              <div className='card-body' style={{positio:'relative', height:'400px'}}>
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
                  return( <TaskComponent task ={task} key={index}></TaskComponent>)
                  })
                }
                </tbody>
                </table>
              </div>
          </div>
        )
      }



export default TaskListComponent
