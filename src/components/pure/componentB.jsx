import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'


const ComponentB = ({contact}) => {

    const [handle,setHandle]=useState(contact.contacto)

    const oposite =()=>{
        if(contact.contacto){
            contact.contacto = false
        }else{
            contact.contacto = true
        }
        setHandle(contact.contacto)
    }

  return (
    <div>
      <div>
    <h2>
      Nombre: {contact.nombre}
    </h2>
    <h3>
      Apellido: {contact.apellido}
    </h3>
    <h4>
      Email: {contact.email}
    </h4>
    <h5>
      Conectado: {contact.contacto ? 'Contacto En Línea':'Contacto No Disponible'} 
    </h5>
    <button onClick={oposite}>Cambiar estado</button>
  </div>
    </div>
  )
}
ComponentB.propTypes = {
    contact:PropTypes.instanceOf(Contact)
}


export default ComponentB
