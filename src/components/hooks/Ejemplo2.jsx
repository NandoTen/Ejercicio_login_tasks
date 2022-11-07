// useEfect(), useRef(), useEffect()

import React, {useState, useRef, useEffect} from 'react'

export default function Ejemplo2() {

const [counter1,setCounter1]= useState(0)
const [counter2,setCounter2]= useState(0)

const miRef = useRef()

function increment1(){
    setCounter1(counter1+1)
}

function increment2(){
    setCounter2(counter2+1)
}

/**
 * useEffect
 * 1.ejecutar siempre, cada vez que cambie useState se ejecuta
 */

/**
 * useEffect(()=>{
console.log('Cambio estado del componente')
console.log('Mostrar ref del DOM')
console.log(miRef)
})
 */


/**
 * caso 2.  sólo se ejecuta con 1
 * */

useEffect(()=>{

    console.log('Cambio estado de contador 1')
    console.log('Mostrar ref del DOM')
    console.log(miRef)
},[counter1])

/* useEffect nos da el ciclo de vida del componente: [], se ha actualizado: sin [],
cuando va a desaparecer return()=>{} vacío
*/ 



  return (
    <div>
    <h1>useEffect-useState-useRef</h1>
      <h2>Contador 1: {counter1}</h2>
      <h2>Contador 2: {counter2}</h2>
      <h4 ref={miRef}>Elemento Referenciado</h4>
      <button onClick={increment1}>Contador 1</button>
      <button onClick={increment2}>Contador 2</button>
      
    </div>
  )
}
