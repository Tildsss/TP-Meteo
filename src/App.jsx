import React, { useState } from 'react';
import './App.css';

const apiKey = "47b5f6415dd03ec6254e1635ce72f3f8";

export default function App() {
  const [city, setCity] = useState('')
  const [temperature, setTemperature] = useState(null)

  const fetchWeatherData = () =>
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const kelvinTemp = data.main.temp
        const celsiusTemp = kelvinToCelsius(kelvinTemp)
        setTemperature(celsiusTemp)
      })
    
      const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(1)
      };

      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          fetchWeatherData();
        }
      };
  
  return (
    <div className="mainDiv">
      <p className='title'>Meteo</p>
      <input 
        className='input1' 
        type="text" 
        placeholder="Ville" 
        value={city} 
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        />
      <button className="btn1" onClick={fetchWeatherData}>température</button>
      <p className='txt1'>{temperature}°</p>
    </div>
  );
}
