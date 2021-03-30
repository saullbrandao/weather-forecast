import WeatherCard from './WeatherCard'
import '../styles/WeatherCardList.css'

const WeatherCardList = ({ weather }) => {
    return (
        <div id="card-list">
            <WeatherCard dailyWeather={weather.current} current={true} />
            {weather.daily ? weather.daily.map((day, index) => {
                return index !== 0 ? <WeatherCard key={index} dailyWeather={day} current={false} /> : null
            }) : <p>ABC</p>}
        </div>
    )
    // return (for (let i = 1; i < weather.daily.length; i++) {
    //     <WeatherCard />
    // })
}

export default WeatherCardList