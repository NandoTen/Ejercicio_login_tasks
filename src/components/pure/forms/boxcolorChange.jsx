import React from 'react'
import { useState } from 'react'
import '../../../style/style.scss'

const initColor={
backgroundColor:'black'
}
let intervalID

const BoxcolorChange = () => {

    const [color,setColor] = useState(initColor)
    
    let countClick = 0
    
    
    const enterChangeColor = ()=>{
        console.log('enterChangeColor', intervalID)
        intervalID = setInterval(changeColor, 1000);
    }

    const changeColor = ()=> {
        let red = Math.floor(Math.random()*255)
        let green = Math.floor(Math.random()*255)
        let blue = Math.floor(Math.random()*255)
        let newColor={
            backgroundColor:`rgb(${red},${green},${blue})`
            }

        setColor(newColor)

    }

    const stopChangeColor = ()=>{
        clearInterval(intervalID);
        console.log('stopChangeColor', intervalID)
        intervalID = null;
    }

    const clickOnComponent= ()=>{
        countClick +=1
        if(countClick ===2){
            clearInterval(intervalID);
            console.log('countClick', countClick)
            intervalID = null;
            countClick=0
        }
       
    }

    
  return (
    <div>
      <div style={color} className='box'
       onMouseEnter={enterChangeColor} onMouseLeave={stopChangeColor} onClick={clickOnComponent}></div>
    </div>
  )
}

export default BoxcolorChange
