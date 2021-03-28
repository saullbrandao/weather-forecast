import React, { useEffect, useState } from 'react'
import CurrentDayCard from './components/CurrentDayCard'
import DateTime from './components/DateTime'
import api from './services/api'

const App = () => {
  const [weather, setWeather] = useState({})

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
      <CurrentDayCard />
    </div>
  );
}

export default App;
