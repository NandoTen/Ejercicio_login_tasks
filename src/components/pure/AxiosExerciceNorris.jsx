import React, { useEffect, useState } from 'react'
import { getRandomJoke } from '../../services/axiosServicesNorris'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@mui/material/Button'

function AxiosExerciceNorris() {

    const [joke, setJoke]= useState([])

    const [jokeTotalCount, setJokeTotalCount]= useState([0,0])

    const [jokeCount, setJokeCount]= useState([0,0])


    useEffect(()=>{
        getRandomJoke()
            .then((response)=>{ 
              if(response.status === 200){
                setJoke(response.data)
              }
              console.log('RESPONSE Joke: ',response.data)
            })
            .catch((error)=>{alert(`Something went wrong ${error}`)})
      },[])


        const obtainJoke = () =>{

            setJokeCount([0,0])

            let lastCount = [...jokeTotalCount]
            if(jokeCount[0]===1){lastCount[0] +=1}
            else if(jokeCount[1]===1){lastCount[1] +=1}
            setJokeTotalCount(lastCount)

            getRandomJoke()
            .then((response)=>{ 
              if(response.status === 200){
                setJoke(response.data)
              }
              console.log('RESPONSE Joke: ',response.data)
            })
            .catch((error)=>{alert(`Something went wrong ${error}`)})
        }

        const setTotalUp = ()=>{
            setJokeCount([1,0])
            console.log('jokeCount+', jokeCount)
        }
        const setTotalDown = ()=>{
            setJokeCount([0,1])
            console.log('jokeCount-', jokeCount)
        }

  return (
    <div>
      <Button variant="contained" onClick={ setTotalUp }><ThumbUpIcon/></Button><span style={{margin: '10px'}}>Vote</span>
      <Button variant="outlined" onClick={ setTotalDown }><ThumbDownIcon/></Button>
      <hr></hr>
        {<div><p>{joke.value}</p></div>}
        <hr></hr>
        {<button onClick={obtainJoke}>new joke</button>}
      <div>
      <hr></hr>
      <p>De un total de {
          jokeCount[0]+jokeCount[1] >0 ? jokeTotalCount.reduce((subtotal, current) => subtotal + current, 0)+1 :
          jokeTotalCount.reduce((subtotal, current) => subtotal + current, 0)
          } te han gustado {jokeTotalCount[0] + jokeCount[0]} / Te han disgustado {jokeTotalCount[1]+ jokeCount[1]}</p>
      </div> 
    </div>
  )
}

export default AxiosExerciceNorris
