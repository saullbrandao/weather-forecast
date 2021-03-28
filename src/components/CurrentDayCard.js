import '../styles/currentDayCard.css'

const CurrentDayCard = ({ temperature, weather, humidity, windSpeed }) => {
    return (
        <div className="container">
            <p id="temperature">{Math.floor(temperature)}<sup>°C</sup> </p>
            <p id="weather">{weather}</p>
            <div id="humidity">
                <p className="grey-text">Humidity</p>
                <p>{`${humidity}%`}</p>
            </div>
            <div id="wind">
                <p className="grey-text">Wind Speed</p>
                <p>{`${windSpeed} m/s`}</p>
            </div>
        </div>
    )
}

export default CurrentDayCard