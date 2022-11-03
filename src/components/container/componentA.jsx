import React from 'react'
import { Contact } from '../../models/contact.class'
import ComponentB from '../pure/componentB'

const ComponentA = (data) => {

  
  const contacto = new Contact('Unombre','Unapellido','un@mail',true)
  
    return (
    <div>
        <ComponentB contact={contacto}></ComponentB>
    </div>
  )
}


export default ComponentA
