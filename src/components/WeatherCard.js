import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    align-items: center;
    background-color:#2E8BC0;
    width: 10rem;
    gap: 1rem;
    padding: 4px;
    font-size: 2rem;

`

const CurrentDayCard = styled(Card)`
    background-color: #145DA0;
`

const Temperature = styled.p`
    font-weight: bold;

    sup {
        font-size: 1rem;
    }
`

const Icon = styled.img`
    
`

const Humidity = styled.p`
    font-size: 1rem;
    font-weight:bold;
`


const WeatherCard = ({ dailyWeather, current }) => {
    const iconURL = `https://openweathermap.org/img/w/${dailyWeather.weather[0].icon}.png`

    if (dailyWeather) {
        const date = new Date(dailyWeather.dt * 1000)
        const formatedDate = date.toDateString().slice(0, 4)
        return (
            current ? <CurrentDayCard>
                <h2>Today</h2>
                <Temperature>{Math.floor(dailyWeather.temp)}<sup>°C</sup> </Temperature>
                <Icon src={iconURL} />
                <Humidity>
                    Humidity {`${dailyWeather.humidity}%`}
                </Humidity>

            </CurrentDayCard>
                : <Card>
                    <h2>{formatedDate}</h2>
                    <Temperature>{Math.floor(dailyWeather.temp.day)}<sup>°C</sup> </Temperature>

                    <img src={iconURL} />
                    <Humidity>
                        <p>Humidity {`${dailyWeather.humidity}%`}</p>
                    </Humidity>
                </Card>
        )
    }

    return <p>Loading</p>
}

export default WeatherCard