import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5em 0 0.5em 0;
    border-radius: 3px;
    align-items: center;
    background-color:#2E8BC0;
    width: 4em;
    border: 1px solid #fdfdfd;
    font-size: 2em;

    @media(max-width: 970px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 100%;
        justify-items: center;
    }

    @media(max-width: 530px) {
        font-size: 1.5em ;
        grid-template-columns: 1fr 1fr 1fr; 
    }

    
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

    @media(max-width: 530px) {
        display: none;
    }
`

const WeekDay = styled.h3`

`


const WeatherCard = ({ dailyWeather, current }) => {
    const iconURL = `https://openweathermap.org/img/w/${dailyWeather.weather[0].icon}.png`

    if (dailyWeather) {
        const date = new Date(dailyWeather.dt * 1000)
        const formatedDate = date.toDateString().slice(0, 4)
        return (
            current ? <CurrentDayCard>
                <WeekDay>Today</WeekDay>
                <Temperature>{Math.floor(dailyWeather.temp)}<sup>°C</sup> </Temperature>
                <Icon src={iconURL} />
                <Humidity>
                    Humidity {`${dailyWeather.humidity}%`}
                </Humidity>

            </CurrentDayCard>
                : <Card>
                    <WeekDay>{formatedDate}</WeekDay>
                    <Temperature>{Math.floor(dailyWeather.temp.day)}<sup>°C</sup> </Temperature>

                    <Icon src={iconURL} />
                    <Humidity>
                        Humidity {`${dailyWeather.humidity}%`}
                    </Humidity>
                </Card>
        )
    }

    return <p>Loading</p>
}

export default WeatherCard