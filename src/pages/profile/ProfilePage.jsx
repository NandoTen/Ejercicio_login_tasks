import React from 'react'
import {useNavigate} from 'react-router-dom'

const ProfilePage = ({user}) => {

const history = useNavigate()
const goBack =()=>{
    history(-1)
}

const navigateTo =(path)=>{

    history(path)
}

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={()=>navigateTo('/tasks')}>Tasks</button>
      <button onClick={ goBack }>Back</button>
    </div>
  )
}

export default ProfilePage
