import WeatherCard from './WeatherCard'
import styled from 'styled-components'

const CardList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 0.5em;
    
    

    @media(max-width: 970px) {
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 0.1px;
    }
`

const WeatherCardList = ({ weather }) => {
    return (
        <CardList>
            {weather.daily ? weather.daily.map((day, index) => {
                return index < 7 ? <WeatherCard key={index} dailyWeather={index === 0 ? weather.current : day} current={index === 0 ? true : false} /> : null
            }) : null}
        </CardList>
    )
}

export default WeatherCardList