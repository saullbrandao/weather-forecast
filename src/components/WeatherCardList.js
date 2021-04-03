import WeatherCard from './WeatherCard'
import styled from 'styled-components'

const CardList = styled.div`
    display: flex;
    flex-direction: row;
`

const WeatherCardList = ({ weather }) => {
    return (
        <CardList>
            {/* <WeatherCard dailyWeather={weather.current} current={true} /> */}
            {weather.daily ? weather.daily.map((day, index) => {
                return index !== 0 && index < 7 ? <WeatherCard key={index} dailyWeather={day} current={false} /> : null
            }) : <p>ABC</p>}
        </CardList>
    )
    // return (for (let i = 1; i < weather.daily.length; i++) {
    //     <WeatherCard />
    // })
}

export default WeatherCardList