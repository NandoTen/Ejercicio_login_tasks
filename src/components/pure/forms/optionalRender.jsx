import React, {useState} from 'react'


// Login Logout Buttons como componentes

let red = 0
let green = 200
let blue = 100

const loggedStyle={
  color:'white',
  backgroundColor: `rgb(${red},${green},${blue})`
}

const unloggedStyle={

  color:'white',
  backgroundColor: 'tomato'
}


const LoginButton = ({loginAction, propStyle})=>{
  return(<button style={propStyle} onClick={loginAction}>Login</button>)
}

const LogoutButton = ({logoutAction, propStyle})=>{
  return(<button style={propStyle}  onClick={logoutAction}>Logout</button>)
}

//


const OptionalRender = () => {

    const [access, setAccess] = useState(false)
    const [nmessage, setNMessage] = useState(0)

    const LogIn =()=>{setAccess(true)}

    const LogOut =()=>{setAccess(false)}

    let optionalButton

   
    if(access){
      optionalButton = <LogoutButton propStyle ={unloggedStyle} logoutAction={LogOut}></LogoutButton>
    }else{
      optionalButton = <LoginButton propStyle={loggedStyle} loginAction={LogIn}></LoginButton> 
    }

    // Unread messages

    let addMessages =()=>{
      setNMessage(nmessage + 1)
    }

    /* const updateAccess = ()=>{
    setAccess(!access)
    }
    if(access){
      optionalButton = <button onClick={updateAccess}>Logout</button>
    }else{
      optionalButton = <button onClick={updateAccess}>Login</button>
    } */



  return (
    <div>
      {optionalButton}
      {/* {nmessage > 0 && nmessage===1 &&<p>You have mew message</p>}
      {nmessage > 1 && <p>You have  {nmessage} mew messages...</p>}
      {nmessage === 0 && <p>There are no new messages</p>} */}
      
      {/* Con operador ternario*/}

      {access ? 
      (<div>{nmessage > 0 ? <p>You have {nmessage} message{nmessage>1 ? 's': null}...</p> :<p>There are no new messages</p>}
      <button onClick={addMessages}>{nmessage===0 ? 'Add your first message':'Add new message'}</button></div>)
      :null}
      
    </div>
  )
}

export default OptionalRender
