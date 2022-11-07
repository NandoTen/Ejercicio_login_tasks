import React from 'react'

export default function Ejemplo4(props) {
  return (
    <div>
      <h1>Elemplo props.children</h1>
      <h2>Nombre: {props.nombre}</h2>
      {/*props.children pintara´aquello se que se encuantre entre las etiquetas
      de nuestro componente */}
      {props.children}
    </div>
  )
}
