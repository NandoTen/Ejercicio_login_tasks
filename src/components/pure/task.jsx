import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {Task} from '../../models/task.class'
import '../../style/style.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({task}) => {

    useEffect(()=>{
      console.log('Create Task')
      return ()=>{

        console.log(`Task ${task.name} unmount`)
      }
    },[task])

/**
 * función que retorna Badge dependiendo del level
 */

    const taskLevelBadge =()=>{
        switch(task.level){
          case LEVELS.NORMAL: return(<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>) 
          case LEVELS.URGENT: return(<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>) 
          case LEVELS.BLOCKING: return(<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>) 

          default: break

        }
       
    }

    const taskIconCompleted =()=>{
      if(task.completed){
        return (<i className='bi-toggle-on' style={{color:'green'}}></i>) 
      }else{return (<i className='bi-toggle-off' style={{color:'black'}}></i>)}


    }
  

  return (

<tr className='fw-normal'>
    <th>
        <span className='ms-2'>{task.name}</span>
    </th>
    <td className='align-middle'>
        <span >{task.description}</span>
    </td>
    <td className='align-middle'>
      {taskLevelBadge()}
    </td>
    <td className='align-middle'>
      {/*sustituirt por un icono*/}
      {taskIconCompleted()
      }
      <i className='bi-trash' style={{color: 'tomato', fontSize:'20px'}}></i>   
    </td>




  
</tr>

/**
 * 
 * {     <div>
      <h2 className='task-name'>
        Nombre: {task.name}
      </h2>
      <h3>
        Descripción: {task.description}
      </h3>
      <h4>
        level: {task.level}
      </h4>
      <h5>
        This task is:{task.completed ? 'Completed':'Pending'}
      </h5>
    </div> }
 */

  )
}

TaskComponent.propTypes = {
task:PropTypes.instanceOf(Task)
}

export default TaskComponent
