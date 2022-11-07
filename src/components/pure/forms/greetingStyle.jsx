import React,{useState} from 'react'

const GreetingStyle = (props) => {
console.log(props)

const[logged,setLogged]=useState(false)

const loggedStyle = {
    color:'white'
}

const unloggedStyle = {
    color:'cyan',
    fontWeight:'bold'
}


  return (
    <div style={logged ? loggedStyle:unloggedStyle}>
    {logged ? (<p>Hola: {props.nombre}</p>) : (<p>Login, please</p>)}
    <button onClick={()=>{
        setLogged(!logged)
        console.log('Pulsado')

    }}>
        {logged ? 'log out':'log in'}

    </button>
      
    </div>
  )
}

export default GreetingStyle
