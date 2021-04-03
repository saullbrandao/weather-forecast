import React, { useEffect, useState } from 'react'
import { usePosition } from 'use-position'
import CurrentWeatherCard from './CurrentWeatherCard'
import LocationInput from './LocationInput'
import geocodingApi from '../services/geocodingApi'
import weatherApi from '../services/weatherApi'
import WeatherCardList from './WeatherCardList'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
    justify-content: center;
    justify-items: center;
`

const App = () => {
  const [weather, setWeather] = useState({})
  const { latitude, longitude, error } = usePosition()

  useEffect(() => {

    const handleCityName = async () => {
      const response = await geocodingApi.get('geocode/v1/json', {
        params: {
          q: `${latitude},${longitude}`
        }
      })
      setLocation(location => {
        return { ...location, city: response.data.results[0].components.city }
      })
    }

    if (latitude && longitude && !error) {
      handleCityName()

      setLocation(location => {
        return {
          ...location,
          latitude,
          longitude,
        }
      })
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
      console.log('weather api call')
      console.log(response.data)
      setWeather(response.data)
    }
    if (location.latitude && location.longitude) {
      handleWeather()
    }

  }, [location.latitude, location.longitude])

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
    <Container id="app">
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
    </Container>
  );
}

export default App;
