import './App.css'
import Forecast from './components/Forecast'
import SearchForm from './components/SearchForm'
import forecastData from './data/data.js'
import { useState, useEffect } from 'react'

function App() {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState([]);

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <>
      <header>
        <h1>Weather Report</h1>
        <p>📍 Location: {city ? city : ""}</p>
      </header>
      <SearchForm onDataSubmit={setCity}/>
      <Forecast forecastData={weatherData}/>
    </>
  )
}

export default App
