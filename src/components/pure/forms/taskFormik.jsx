import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
//Models
import {LEVELS} from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'


const taskSchema = Yup.object().shape(
    {
        nameTask: Yup.string()
            .min(6, 'Name yoo short')
            .max(12, 'Name too long')
            .required('Name required'),
        descriptionTask: Yup.string()
            .min(6, 'Description yoo short')
            .max(20, 'Description too long'),
        levelTask: Yup.string()
            .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'Select Level')
                .required('Level is required'),       
    }
)

const TaskFormik = ({add , length}) => {


    const initialValues ={
        nameTask: '',
        descriptionTask: '',
        levelTask: LEVELS.NORMAL
        }

 const addTask = (values)=>{
      
        const newTask = new Task(
            values.nameTask,
            values.descriptionTask,
            false,
            values.levelTask,
        )
        add(newTask)
    }

    return (
        <div>
        <h4>Task Formik</h4>
          <Formik
          initialValues={initialValues}
          //** Yup validation Schema */
          validationSchema = {taskSchema}
          onSubmit ={async (values)=>{
            await new Promise((r)=> setTimeout(r,1000))
            alert(JSON.stringify(values, null,2))
            addTask(values)
          }}
          >
    
          {/* We obtain props from Formik */}
    
          {({values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur}) =>(<Form>
                    <label htmlFor="nameTask">Email</label>
                    <Field id="nameTask" type ='text' name="nameTask" placeholder="Task Name" />
                        {/* Email errors */}
                        {errors.nameTask && touched.nameTask && (<ErrorMessage name='nameTask' component='div'></ErrorMessage>)}
    
                    <label htmlFor="descriptionTask">Task Description</label>
                    <Field id="descriptionTask"  type='text' name="descriptionTask" placeholder="Task Description" />
                        {/* Email password */}
                        {errors.descriptionTask && touched.descriptionTask && (<ErrorMessage name='descriptionTask' component='div'></ErrorMessage>)}
                    <Field
                    component="select"
                    id="levelTask"
                    name="levelTask"
                    defaultValue={LEVELS.NORMAL}
                    >
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                    </Field>
                    
                    
                    <button type="submit">Submit</button>
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
    
                </Form>)}
    
          </Formik>
        </div>
      )

    }
    
    TaskFormik.protoTypes = {
           add: PropTypes.func.isRequired,
           length: PropTypes.number.isRequired
    
    }

export default TaskFormik
