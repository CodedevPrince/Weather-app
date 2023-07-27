import React, { useEffect, useState } from "react";
import Currenttemp from "./Currenttemp";
import TempDetails from "./TempDetails";
import NextForcast from "./Nextforcast";
import Day from "./Day";

function App(){
    const [input,setinput]=useState("delhi");
    // const [city,setcity]=useState("Mumbai")
    const [weatherdata, setweatherdata]=useState(null);
    const cityname=(e)=>{
        // console.log(e.target.value);
        setinput(e.target.value)
    }
    const callapi = async function getweatherdata(){
     try{
        const res =await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=c225f5881ef81bd63e98dbd6e7a6a33c`)
        // console.log(res);
        const data=await res.json();
        console.log(data)
        setweatherdata(data);
       }catch(error){
        console.error('Error fetching weather data:', error);
        throw error;
     }
    }
    useEffect(()=>{
       const timeout= setTimeout(()=>{
            callapi();
        },1000)
      return ()=>{clearTimeout(timeout)}
    },[input])
   const converttocelcius =(kelvin)=>{
    let number= kelvin - 273.15
    let result =parseFloat(number.toFixed(2));
    return result;
   }
   return(
        <>
        <div className="box-wrapper">
        <div className="box">
        <Day input={input} cityname={cityname}/>
        <Currenttemp weatherdata={weatherdata} converttocelcius={converttocelcius}/>
        <TempDetails weatherdata={weatherdata} converttocelcius={converttocelcius} />
        </div>
        <NextForcast weatherdata={weatherdata} converttocelcius={converttocelcius}/>
</div>
            
        </>
    )
}
export default App;