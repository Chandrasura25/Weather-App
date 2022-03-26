import axios from "axios"
import {useState,useEffect} from 'react'

const useAxios =(url)=>{
    
    const [onlineData,setonlineData]=useState([])
    const [error,seterror]=useState(null)
    const [isLoading,setisLoading]=useState(true)
    useEffect(()=>{
        // console.log("effect")
        axios.get(url).then((response)=>{
            setisLoading(false)
            setonlineData(response.data)
            console.log(response.data)
        })
        .catch((err)=>{
            setisLoading(false)
            seterror(err.message)
            console.log(err.message)
        })
    },[])
    return {onlineData,error,isLoading}
}
export default useAxios;