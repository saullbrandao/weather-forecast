import React, { useEffect, useState } from 'react'
import { usePosition } from 'use-position'
import CurrentWeatherCard from './components/CurrentWeatherCard'
import DateTime from './components/DateTime'
import api from './services/api'

const App = () => {
  const [weather, setWeather] = useState({})
  const { latitude, longitude, error } = usePosition()


  useEffect(() => {
    api.get('data/2.5/onecall', {
      params: {
        lon: -38.554790,
        lat: -3.788670,
      }
    }).then(response => setWeather(response.data))
  }, [])
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
