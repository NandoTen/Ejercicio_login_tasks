import React, { useEffect , useState } from 'react'

const Clock = () => {

    const estadoInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }
    const [clock, setClock] = useState(estadoInicial)


    const tick = ()=>{
        let edad = clock.edad
        setClock({...clock, edad: edad + 1, fecha: new Date()})        
    }

    useEffect(()=>{
        const intervalID = setInterval(()=>{
        tick()
            }, 1000)

        return ()=>{
            clearInterval (intervalID)
        }
    })

    return (
        <div>
        <h2>
            Hora Actual:
            {clock.fecha.toLocaleTimeString()}
            </h2>
            <h3>{clock.nombre} {clock.apellidos}</h3>
            <h1>Edad: {clock.edad}</h1>
            
        </div>
    )  
}

export default Clock
