import '../styles/currentDayCard.css'

const CurrentDayCard = () => {
    return (
        <div className="container">
            <p id="temperature">🌨 {`25`}<sup>°C</sup> </p>
            <p id="clouds">{`Cloudy`}</p>
            <div id="humidity">
                <p className="grey-text">Humidity</p>
                <p>{`65%`}</p>
            </div>
            <div id="wind">
                <p className="grey-text">Wind Speed</p>
                <p>{`19.2 km/h`}</p>
            </div>
        </div>
    )
}

export default CurrentDayCard