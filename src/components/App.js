import React, { useEffect, useState } from 'react'
import { usePosition } from 'use-position'
import CurrentWeatherCard from './CurrentWeatherCard'
import DateTime from './DateTime'
import LocationInput from './LocationInput'
import geocodingApi from '../services/geocodingApi'
import weatherApi from '../services/weatherApi'
import '../styles/App.css'

const App = () => {
  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState('London')
  const { latitude, longitude, error } = usePosition()

  const handleLocationChange = (newLocation) => setLocation(newLocation)

  const handleLocation = () => {
    geocodingApi.get('geocode/v1/json', {
      params: {
        q: location
      }
    }).then(response => {
      const { lat, lng } = response.data.results[0].geometry
      handleWeather(lat, lng)
    })
  }

  const handleButtonClick = () => handleLocation()

  const handleWeather = async (lat, lon) => {
    const response = await weatherApi.get('data/2.5/onecall', {
      params: {
        lat,
        lon,
      }
    })
    setWeather(response.data)
  }
  useEffect(() => {
    if (latitude && longitude && !error) {
      handleWeather(latitude, longitude)
    } else {
      handleWeather(51.507351, -0.127758)
    }
  }, [latitude, longitude, error])
  return (
    <div>
      <h1>Weather Forecast</h1>
      <LocationInput
        location={location}
        handleLocationChange={handleLocationChange}
        handleButtonClick={handleButtonClick}
      />
      <button onClick={handleButtonClick}>Submit</button>
      <DateTime />
      {Object.keys(weather).length === 0 ||
        <CurrentWeatherCard
          temperature={weather.current.temp}
          weather={weather.current.weather[0].description}
          humidity={weather.current.humidity}
          windSpeed={weather.current.wind_speed}
        />
      }
    </div>
  );
}

export default App;
