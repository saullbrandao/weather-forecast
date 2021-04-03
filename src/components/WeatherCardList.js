import WeatherCard from './WeatherCard'
import styled from 'styled-components'

const CardList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

const WeatherCardList = ({ weather }) => {
    return (
        <CardList>
            {weather.daily ? weather.daily.map((day, index) => {
                return index < 7 ? <WeatherCard key={index} dailyWeather={index === 0 ? weather.current : day} current={index === 0 ? true : false} /> : null
            }) : <p>Loading</p>}
        </CardList>
    )
}

export default WeatherCardList