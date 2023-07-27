import React from "react";

function TempDetails(props){
    const degreesToDirection=(degrees)=>{
        const directions = ["North","South","East","West","North-west","South-west","North-East","South-East"];
        const index = Math.round((degrees % 360) / 45);
        return directions[(index + 8) % 8];
      }
      const converttime=(time)=>{
        let sunriseTimestamp=time;
        let sunriseDate = new Date(sunriseTimestamp * 1000);
        let hours = sunriseDate.getHours();
        let minutes = sunriseDate.getMinutes();
        
        let formattedHours = hours.toString().padStart(2, '0');
        let formattedMinutes = minutes.toString().padStart(2, '0');
    
        return `${formattedHours}:${formattedMinutes}`;
       }
    return(
        <>
            <div className="temp-details">
                {props.weatherdata && props.weatherdata.list &&(
                    <div className="wind-details">
                        <h2>{props.weatherdata.list[0].wind.speed}mph</h2>
                        <h2>{degreesToDirection(props.weatherdata.list[0].wind.deg)}</h2>
                    </div>)}
                    {props.weatherdata && props.weatherdata.list &&(
                        <>
                    <h2>{props.weatherdata.list[0].main.pressure} mbar</h2>
                    <h2 className="templimit"><span>Temp_Max</span>{props.converttocelcius(props.weatherdata.list[0].main.temp_max)}°C</h2>
                    <h2 className="templimit"><span>Temp_Min</span>{props.converttocelcius(props.weatherdata.list[0].main.temp_min)}°C</h2>
                    </>
                    )}
                    {props.weatherdata && props.weatherdata.list &&(
                    <div className="sun-details">
                        <h2>Sunrise {converttime(props.weatherdata.city.sunrise)}</h2>
                        <h2>Sunset {converttime(props.weatherdata.city.sunset)}</h2>
                    </div>)}
                </div>
        </>
    )
}
export default TempDetails;