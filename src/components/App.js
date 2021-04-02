import React, { useEffect, useState } from 'react'
import { usePosition } from 'use-position'
import CurrentWeatherCard from './CurrentWeatherCard'
import LocationInput from './LocationInput'
import geocodingApi from '../services/geocodingApi'
import weatherApi from '../services/weatherApi'
import WeatherCardList from './WeatherCardList'
import "../styles/App.css"

const App = () => {
  const [weather, setWeather] = useState({})
  const { latitude, longitude, error } = usePosition()

  useEffect(() => {
    if (latitude && longitude && !error) {
      const newLocation = {
        city: '',
        latitude,
        longitude,
      }
      setLocation(newLocation)
    } else {
      console.log('error')
    }
  }, [latitude, longitude, error])

  const [location, setLocation] = useState({})

  useEffect(() => {

    const handleWeather = async () => {
      const response = await weatherApi.get('data/2.5/onecall', {
        params: {
          lat: location.latitude,
          lon: location.longitude,
        }
      })
      setWeather(response.data)
    }
    const getCityName = async () => {
      const response = await geocodingApi.get('geocode/v1/json', {
        params: {
          q: `${location.latitude},${location.longitude}`
        }
      })
      setLocation(
        {
          ...location,
          city: response.data.results[0].components.city
        })
    }
    if (location.latitude && location.longitude) {
      getCityName()
      handleWeather()
    }

  }, [location, location.latitude, location.longitude])

  const handleLocationChange = (newCity) => {
    geocodingApi.get('geocode/v1/json', {
      params: {
        q: newCity
      }
    }).then(response => {
      const { lat, lng } = response.data.results[0].geometry
      setLocation({
        city: newCity,
        latitude: lat,
        longitude: lng
      })
    })
  }

  return (
    <div id="app">
      <h1 id="header">Weather Forecast</h1>
      <LocationInput handleLocationChange={handleLocationChange} />
      <label>{location.city && `${location.city.toUpperCase()}`}</label>
      {Object.keys(weather).length === 0 ?
        <p>Loading...</p> :
        <CurrentWeatherCard
          temperature={weather.current.temp}
          weather={weather.current.weather[0].description}
          humidity={weather.current.humidity}
          windSpeed={weather.current.wind_speed}
        />
      }
      <WeatherCardList weather={weather} />
    </div>
  );
}

export default App;
