import styled from 'styled-components'

const Card = styled.div`
    display: grid;
    width: 120px;
    grid-template-rows: 80x 80px 80px;
    align-items: center;
    justify-items: center;
    border: 1px solid;
`

const WeatherCard = ({ dailyWeather, current }) => {
    if (dailyWeather) {
        const date = new Date(dailyWeather.dt * 1000)
        const formatedDate = date.toDateString().slice(0, 4)

        return (
            <Card>
                <h3>{current ? 'Today' : formatedDate}</h3>
                <p>{dailyWeather.weather[0].description}</p>
                <div className="humidity">
                    <p>Humidity</p>
                    <p>{dailyWeather.humidity + '%'}</p>
                </div>
            </Card>
        )
    }

    return <p>Loading</p>
}

export default WeatherCard