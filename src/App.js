import axios from "axios"
import React,{useState} from 'react'

const App = () =>{  
  const [data,setdata] = useState({})
  const [location,setlocation]=useState('')
  const API =`https://api.openweathermap.org/data/2.5/weather?q=${location} &units=metric&appid=2eeb7c63611a0bc3d2874b1069b97c0e`
  const looklocation =(event)=>{
    if (event.key=='Enter'){
      axios.get(API).then((response)=>{
        setdata(response.data)
        console.log(response.data)
      })
    }
  }
    return(
      <>
      <div className={( typeof data.main !='undefined')?((data.weather[0].main='clear')?"bg-success":'bg'):'bg-success'}>
        <div className="top">
        <div className="search_box">
          <input type="text" name=""onKeyPress={looklocation} value={location} onChange={event=>setlocation(event.target.value)}className="form-control"  placeholder="Search Location" id="" />
        </div>
        <div className="city">
          {data.sys?<h4>{data.sys.country}</ h4>:null}
          {data.name?<h3>{data.name}</h3>:null}
        </div>
        <div className="temp">
          {data.main?<p className="num">{data.main.temp.toFixed()}°C</p>:null}
          </div>
          <div className="description">
            {data.weather?<p>{data.weather[0].main}</p>:null}
        </div>
        </div> 
      {data.name != undefined &&
        <div className="down">
            <div className="feeling">
            {data.main?<p>{data.main.feels_like}°C</p>:null}
            <p>Feels Like</p>
            </div>
            <div className="humidity">
            {data.main?<p>{data.main.humidity}%</p>:null}
            <p>Humidity</p>
            </div>
           <div className="humility">
           {data.wind?<p>{data.wind.speed} MPH</p>:null}
            <p>Winds</p>
           </div>
        </div>
      }
         
      </div>
      </>
    )
 }
  
  export default App;
  
  
  








