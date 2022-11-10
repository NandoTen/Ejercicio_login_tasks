import React, {useRef} from 'react'



/**
 * 
 * Desde Father pasamos por props a child la function send(), 
 * creamos un useRef lo asociamos al input y enviamos el contenido del input messageRef.current.value
 * con el botón ejecutamos send(messageRef.current.value)
 * el evento se ejecuta en el padre desde el hijo
 */
const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

 const pressBoton = ()=>{
    const text = messageRef.current.value
    alert(`Text in Input: ${text}`)
 }

 const pressBotonParams = (text)=>{
    alert(`Text:${text}`)
 }

 const submitName=(e)=>{
    e.preventDefault()
    update(nameRef.current.value)
 }

  return (
    <div style={{background:'cyan',padding:'20px'}}>
      <p onMouseOver={()=>console.log('Mouse Over')}>Hello: {name}</p>
      <button onClick={()=>console.log('Boton 1')}>Boton 1</button>
      <button onClick={pressBoton}>Boton 2</button>
      <button onClick={()=>pressBotonParams('Hello dude')}>Boton 3</button>
      
      <input 
      placeholder = 'Send text to your father' 
      onFocus={()=>{console.log('On Focus')}}
      onChange={(e)=>console.log('Input change',e.target.value)}
      onCopy ={()=>{console.log('Copied text input')}}
      ref ={ messageRef }
      />
      <button onClick={() =>{send(messageRef.current.value)}}>Send Message</button>

      <div style={{background:'grey',marginTop:'20x'}}>
        <form onSubmit={submitName}>
            <input ref ={ nameRef } placeholder='New name'></input>
            <button type='submit'>Update name</button>

        </form>


      </div>
    
    </div>
  )
}

export default Child
