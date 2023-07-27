import React from "react";

function Day(props){
    const getdaysofweek = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currdate=new Date().toLocaleDateString();
        const date = new Date();
        const dayOfWeek = days[date.getDay()];
        return `${dayOfWeek} ${currdate}`
      };
    return(
        <>
        <div className="date">
        <h1>{getdaysofweek()} </h1>
        <input type="text" value={props.input} onChange={props.cityname} placeholder="Type your city name"/>
        </div>
        </>
    )
}
export default Day;