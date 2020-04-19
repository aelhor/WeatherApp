import React from 'react'


 const weather=props=>(
    <div className="weather__info">
        {props.city&& <p className="weather__key"> Location : <span className="weather__value" >{props.city},{props.country}</span> </p>} 
        {props.temperature&& <p className="weather__key"> Temperature :<span className="weather__value">{props.temperature} °C</span></p>} 
        {props.humidity&& <p className="weather__key"> Humidity :<span className="weather__value">{props.humidity} %</span></p>} 
        {props.windSpeed&& <p className="weather__key"> Wind :<span className="weather__value">{props.windSpeed} km/h</span></p>} 
        {props.windDeg&& <p className="weather__key"> Wind  :<span className="weather__value">{props.windDeg} °</span></p>} 
        {props.description&& <p className="weather__key"> Description :<span className="weather__value">{props.description}</span></p>} 
        {props.error && <p className="weather__key">Error : <span className="weather__value">{props.error}</span></p>} 
    </div>)
export default weather
