import React from "react";

function Currenttemp(props){
    return(
        <>
            {props.weatherdata && props.weatherdata.list &&(
                <div className="temp">
                <h1>{props.converttocelcius(props.weatherdata.list[0].main.temp)}°C</h1>
                {props.weatherdata.list[0].weather[0].main === "Clouds" && (
                <img src="/carcloud-removebg-preview.png" alt="Cloudy" />
                )}
                {props.weatherdata.list[0].weather[0].main === "Rain" && (
                <img src="/raincloud-removebg-preview.png" alt="Rainy" />
    )}
                {props.weatherdata.list[0].weather[0].main === "Clear" &&(
                    <img src="/sun-removebg-preview.png"/>
                )}
                </div>)}
        </>
    )
}
export default Currenttemp;