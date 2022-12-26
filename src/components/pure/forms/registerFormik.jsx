import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'


//Models
import {ROLES} from '../../../models/roles.enum'
import {User} from '../../../models/user.class'


const RegisterFormik = () => {

let user = new User()

const initialValues={
    username:'',
    email: '',
    password:'',
    confirm:'', // to confirm password
    role: ROLES.USER
}

const registerSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(6, 'UserName yoo short')
            .max(12, 'Username too long')
            .required('Username required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        role: Yup.string()
        .oneOf([ROLES.USER, ROLES.ADMIN], 'Select Role: User/admin')
            .required('Role is required'),
        password: Yup.string()
                .min(8,'password too short')
                .required('Password is required'),
        confirm: Yup.string()
        .when('password', {
            is: value =>(value && value.length >0 ? true: false), 
            then: Yup.string().oneOf(
                [Yup.ref('password')], 
                'Password must match!'
            )}).required('You must confirm password')
    }
)



const submit = (values)=>{

    alert('Register user')
} 


  return (    
    <div>
      <h4>Register Formik</h4>
      <Formik
            initialValues = {initialValues}
            //** Yup validation Schema */
            validationSchema = {registerSchema}
            //** onSubmit Event */
            onSubmit ={async (values) => {
                await new Promise((r) => setTimeout(r, 1000))
                alert(JSON.stringify(values, null, 2))
                
            }}
            >
                {({values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (
                    <Form>
                        <label htmlFor="username">UserName</label>
                        <Field id="username" type ='username' name="username" placeholder="Your username" />
                        {errors.username && touched.username && (<ErrorMessage name='username' component='div'></ErrorMessage>)}

                        <label htmlFor="email">Email</label>
                        <Field id="email" type ='email' name="email" placeholder="Your email" />
                        {errors.email && touched.email && (<ErrorMessage name='email' component='div'></ErrorMessage>)}

                        <label htmlFor="password">Password</label>
                        <Field id="password"  type='password' name="password" placeholder="password" />
                        {errors.password && touched.password && (<ErrorMessage name='password' component='div'></ErrorMessage>)}

                        <label htmlFor="confirm">Password</label>
                        <Field id="confirm"  type='password' name="confirm" placeholder="Confirm password" />
                        {errors.confirm && touched.confirm && (<ErrorMessage name='confirm' component='div'></ErrorMessage>)}

                            <button type='submit'>Register Account</button>
                            {/* {isSubmitting ? (<p>Login your credentials...</p>) : null} */}
                            {isSubmitting ? sessionStorage.setItem("session", JSON.stringify(values)) : null}
                    </Form>
                    )}

      </Formik>
    </div>
  )
}

export default RegisterFormik
