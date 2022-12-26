import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'



const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email required'),
        password: Yup.string()
            .required('Password required')    
    }
)

const LoginFormik = ({value, loogedF}) => {

  console.log('datosPasados: ', value)

const initialCredentials ={
email: '',
password: ''

}

  return (
    <div>
    <h4>Login Formik</h4>
      <Formik
      initialValues={initialCredentials}
      //** Yup validation Schema */
      validationSchema = {loginSchema}
      onSubmit ={async (values)=>{
        await new Promise((r)=> setTimeout(r,1000))
        //alert(JSON.stringify(values, null,2))
        console.log('**********', value)
        // Save date in local storage
        if(value.email === values.email && value.password===values.password){

          loogedF(true)
          console.log ('LOGGED OK')
        }else{
          console.log ('LOGGED FAIL')
          }
         
        
      }}
      >

      {/* We obtain props from Formik */}

      {({values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur}) =>(<Form>
                <label htmlFor="email">Email</label>
                <Field id="email" type ='email' name="email" placeholder="Your email" />
                    {/* Email errors */}
                    {errors.email && touched.email && (<ErrorMessage name='email' component='div'></ErrorMessage>)}

                <label htmlFor="lastName">Password</label>
                <Field id="password"  type='password' name="password" placeholder="password" />
                    {/* Email password */}
                    {errors.password && touched.password && (<ErrorMessage name='password' component='div'></ErrorMessage>)}
                <button type="submit">Submit</button>
                {isSubmitting && value.email === values.email && value.password === values.password ? (<p>Welcome</p>) : (<p>login your data</p>)} 
                
               

            </Form>)}

      </Formik>
    </div>
  )
}

export default LoginFormik
