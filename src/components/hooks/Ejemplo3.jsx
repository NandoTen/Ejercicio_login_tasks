/**
 * useState & useContext
 */

import React,{useState,useContext} from 'react'

const miContexto = React.createContext(null)

function Componente1() {
  
    const state = useContext(miContexto)
    return (
    <div>
      <h1>el token es: {state.token} </h1>
      <Componente2></Componente2>
    </div>
  )
}

function Componente2() {

    const state = useContext(miContexto)

    return (
      <div>
        <h2>La sesión es: {state.sesion}</h2>
      </div>
    )
  }
  
  
  export default function ComponentContext() {

    const estadoInicial = {
        token:'AFGD45',
        sesion: 1
    }

const [sesionData,setSesionData]= useState(estadoInicial)

function actualizarSesion(){

    setSesionData({

    token:'123457',
    sesion: sesionData.sesion+1

})

}
    return (
     <miContexto.Provider value={sesionData}>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesion</button>
     </miContexto.Provider>
    )
  }