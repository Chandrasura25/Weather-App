import {useEffect, useState} from 'react'
// import axios from 'axios'
import useAxios from '../useAxios'
// useeffect(callback,dependency)
export default function Effect() {
    const url ="https://jsonplaceholder.typicode.com/users";
    const api ='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={2eeb7c63611a0bc3d2874b1069b97c0e}' 
    const [num,setnum]=useState(0);
    const [response,setresponse]= useState([])
    const getLocation=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((response)=>{
                console.log(response)
            })
        }
        else{
            console.log(`Browser is not supported`)
        }
    }
    const increment=()=>{
        setnum(num+1)
    }

    let {error,isLoading,onlineData}= useAxios(url)
  
  return (
      <>
    <div>{num}</div>
    {error&&<div className='bg-danger'>{error}</div>}
    {isLoading&&<div>is loading ...</div>}
    {onlineData &&onlineData.map((val,index)=>(
        <div>{val.name}</div>
    )
)}
 <div>{response}</div>
    <button onClick={increment}>Add</button>
    <button onClick={getLocation}>Get location</button>
    </>
  )
}
