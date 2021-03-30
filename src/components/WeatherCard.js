import '../styles/WeatherCard.css'

const WeatherCard = ({ dailyWeather, current }) => {
    if (dailyWeather) {
        const date = new Date(dailyWeather.dt * 1000)
        const formatedDate = date.toDateString().slice(4, 10)
        return (
            <div id="weather-card">
                <h3>{current ? 'Today' : formatedDate}</h3>
                <p>{dailyWeather.weather[0].description}</p>
                <div className="humidity">
                    <p>Humidity</p>
                    <p>{dailyWeather.humidity + '%'}</p>
                </div>
            </div>
        )
    }
    return <p>Loading</p>


}

export default WeatherCard