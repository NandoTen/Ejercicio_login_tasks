import React, {useState} from 'react'
import CHild from '../pure/forms/chid'

const Father = () => {

    let colorInit = {'background':'tomato',padding:'10px'}
    const [name,setName] = useState('Fernando')
    const [color, setColor] = useState('tomato')

const showMessage =(text)=>{
    alert(`Message received: ${text}` )
}


 const updateName = (newName)=>{
    setName(newName)
    setColor('black')

    console.log(color)
 }

  return (
    <div style ={{'background':color,padding:'10px'}}>
      <CHild name={name} send={showMessage} update={updateName}></CHild>
    </div>
  )
}

export default Father
