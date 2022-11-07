/**
 * Ejemplo del uso de Hook, UseState()
 * Crear componente  de tipo function y acceder
 * a su estado privado y poder modificarlo
 */

import React, {useState} from 'react'

export default function Ejemplo1() {

    // valor inicial contador
    const valorInicial = 0
    // valo inicial persona
    const personaInicial ={
    nombre:'Juan',
    email:'juan@mail.com'
}

const[contador,setContador]=useState(valorInicial)
const[persona,setPersona]=useState(personaInicial)

function incContador(){
    setContador(contador+1)
}
function actualPersona(){
    setPersona({nombre:'Marcel', email: 'marc@mail.com'})
}
  return (
    <div>
      <h1>Ejemplo useState()</h1>
      <h2>Contador {contador}</h2>
      <h2>Datos: {persona.nombre} {persona.email}</h2>
      <button onClick={incContador}>Contador</button>
      <button onClick={actualPersona}>Actualizar Persona</button>
    </div>
  )
}

/**
 * queremos que valaorInicial y personaInicial sen parte del estado del componente
 * para gestionar su cambio y que se vea reflejado en la vista
 */