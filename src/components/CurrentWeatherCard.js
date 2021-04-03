import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    width:20rem;
    justify-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #4467A3;
    color: #ffffff;
`
const Temperature = styled.p`
    /* grid-column: 1/3; */
    font-weight: bold;
    /* font-size: 50px; */

    sup{
        /* font-size: 20px; */
    }
`
const Weather = styled.p`
    /* grid-column: 1/3; */
    font-weight: bold;
    font-size: 20px;
`

const Humidity = styled.div`
    /* grid-column: 1/2; */
    /* display: grid;
    align-items: center;
    justify-items: center;  */
`

const Wind = styled.div`
    /* grid-column: 2/3; */
    /* display: grid;
    align-items: center;
    justify-items: center;  */
`
const CurrentWeatherCard = ({ temperature, weather, humidity, windSpeed }) => {
    return (
        <Container>
            <h1>Today</h1>
            <Temperature>{Math.floor(temperature)}<sup>°C</sup> </Temperature>
            <Weather>{weather}</Weather>
            <Humidity>
                <p className="grey-text">Humidity</p>
                <p>{`${humidity}%`}</p>
            </Humidity>
            <Wind id="wind">
                <p className="grey-text">Wind Speed</p>
                <p>{`${windSpeed} m/s`}</p>
            </Wind>
        </Container>
    )
}

export default CurrentWeatherCard