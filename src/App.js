import React, { useEffect, useState } from 'react'
import { usePosition } from 'use-position'
import CurrentWeatherCard from './components/CurrentWeatherCard'
import DateTime from './components/DateTime'
import weatherApi from './services/weatherApi'

const App = () => {
  const [weather, setWeather] = useState({})
  const { latitude, longitude, error } = usePosition()

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
