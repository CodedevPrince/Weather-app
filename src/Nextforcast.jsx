import React from "react";

function NextForcast(props){  
    const getNext5Days = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const next5Days = [];

    for (let i = 1; i <= 5; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      const dayName = days[nextDate.getDay()];
      next5Days.push(dayName);
    }

    return next5Days;
  };

    return(
        <>
        <div className="previous-data">
          {props.weatherdata &&
            props.weatherdata.list &&
            props.weatherdata.list.slice(0, 5).map((forecast, index) => (
              <div className="previous-days" key={index}>
                <h3>{getNext5Days()[index]}</h3> {/* Display the next 5 days' names */}
                <h3>{props.weatherdata.list[0].weather[0].main === "Clouds" && (
                <img src="/carcloud-removebg-preview.png" alt="Cloudy" />
                )}
                {props.weatherdata.list[0].weather[0].main === "Rain" && (
                <img src="/raincloud-removebg-preview.png" alt="Rainy" />
    )}
                {props.weatherdata.list[0].weather[0].main === "Clear" &&(
                    <img src="/sun-removebg-preview.png"/>
                )}</h3> {/* Display weather condition */}
                <h3>{props.converttocelcius(forecast.main.temp)}°C</h3> {/* Display temperature */}
              </div>
            ))}
        </div>
        </>
    )
}
export default NextForcast;