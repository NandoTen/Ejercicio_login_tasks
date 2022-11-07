import React, {useEffect} from 'react'

const Allcycles = () => {


    useEffect(()=>{

        console.log('Componente creado')

        const intervalID = setInterval(()=>{
        document.title =`${new Date()}`
        console.log('Actualizando componente')
        },1000)

        return ()=>{

            console.log('Componente va a desaparecer')
            document.title ='Tiempo detenido'
        }
        
        })
        
  return (
    <div>
      <h1>{document.title}</h1>
      <h2>Tiempo detenido</h2>
      <h3>x</h3>
      
    </div>
  )
}

export default Allcycles
