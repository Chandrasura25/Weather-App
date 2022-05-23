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
      <body className={(typeof data.main !='undefined')?((data.weather[0].description=='broken clouds')?"bg-1":'bg'):'bg-1'}>
        <div className="col-12 mx-auto">
        <div className="top">
        <div className="search_box">
          <input type="text" name=""onKeyPress={looklocation} value={location} onChange={event=>setlocation(event.target.value)} className="form-control mx-auto w-50" placeholder="Search Location" id="" />
        </div>
        </div>
        <div className="col-12 col-sm-12 display-4">
        <div className="city m-5">
          {data.sys?<h4>{data.sys.country}</ h4>:null}
          {data.name?<h3>{data.name}</h3>:null}
        </div>
        <div className="temp m-5">
          {data.main?<p className="num">{data.main.temp.toFixed()}°C</p>:null}
          </div>
          <div className="description lead fw-bold mx-2">
            {data.weather?<p>{data.weather[0].description}</p>:null}
        </div>
        </div>
        </div> 
      {data.name != undefined &&
        <div className="down mx-auto col-12 col-sm-12 mt-5">
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
         
      </body>
      </>
    )
 }
  
  export default App;
  
  
  








