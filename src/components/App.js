import React, { useEffect, useState } from 'react'
import { usePosition } from 'use-position'
import LocationInput from './LocationInput'
import geocodingApi from '../services/geocodingApi'
import weatherApi from '../services/weatherApi'
import WeatherCardList from './WeatherCardList'
import GlobalStyle from '../styles/globals'
import styled from 'styled-components'
import Header from './Header'
import CityName from './CityName'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    color: #fdfdfd;
    gap: 5em;
    height: 100%;

    @media(max-width: 970px) {
        gap: 3em;
    }
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
      <Header>Weather Forecast</Header>
      <LocationInput handleLocationChange={handleLocationChange} />
      <CityName>{location.city && `${location.city.toUpperCase()}`}</CityName>
      <WeatherCardList weather={weather} />
      <GlobalStyle />
    </Container>
  );
}

export default App;
