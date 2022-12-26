import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const TaskForm = ({add , length}) => {

const nameRef = useRef('')
const descriptionRef = useRef('')
const levelRef = useRef(LEVELS.NORMAL)


const addTask = (e)=>{
    e.preventDefault()
    const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
    )
    add(newTask)
}


  return (
    <div>
    <form onSubmit={addTask} className='d-flex justify-content align-items-center mb-4'>
        <div className='form-outline flex-fill'>
            <input ref={nameRef} id='inputName' type='text' className='form-control form-lg' placeholder='Task name' required autoFocus></input>
            <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-lg' placeholder='Task description' required ></input>
            <select ref={levelRef}  id='selectLevel' className='form-control form-lg'>
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENT}>Urgent</option>
                <option value={LEVELS.BLOCKING}>Blocking</option>
            </select>
            <br></br>
            <button type='submit' className='btn btn-success btn-lg ms-5'>{length > 0 ? 'Add Task': 'Create Task'}</button>
        </div>

    </form>
      
    </div>
  )
}

TaskForm.protoTypes = {
       add: PropTypes.func.isRequired,
       length: PropTypes.number.isRequired

}

export default TaskForm
