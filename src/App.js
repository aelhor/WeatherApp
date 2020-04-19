import React from 'react';
import './App.css';
import Form from './Component/Form'
import Title from './Component/Title'
import Weather from './Component/Weather'


const APIKEY = 'eae562dda86799f7f693ebf6d1626a06'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      windSpeed : undefined,
      windDeg : undefined,
      description: undefined,
      error: undefined, 
      haveData :undefined
      
    }
  }
  
  getWeather = async(e)=>{
    const city = e.target.elements.city.value
 
    const country = e.target.elements.country.value

    e.preventDefault()
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`)
    const data = await apiCall.json()
   // console.log(data)
    
    if(city.length  &&data.cod !=='404'){ 
      this.setState( {
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        windSpeed : data.wind.speed,
        windDeg : data.wind.deg,
        description: data.weather[0].description,
        error: undefined,
        haveData : true
        

    }) }
    else {
      this.setState( {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        windSpeed : undefined,
        windDeg : undefined,
        description: undefined,
        error: data.message,
        haveData : false
      }) }
    
  }
   
  
 
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                <Form  getWeather = {this.getWeather}/>
                {
                  this.state.haveData ? 
                    <Weather 
                    temperature = {this.state.temperature} 
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    windSpeed = {this.state.windSpeed}
                    windDeg = {this.state.windDeg}
                    description = {this.state.description}
                    error = {this.state.error}
                    />:
                    <p className="weather__key"> {this.state.error}</p>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
      
    )}
}
 

export default App;
