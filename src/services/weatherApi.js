import axios from "axios";

const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org',
    params: {
        units: 'metric',
        exclude: 'minutely,hourly,alerts',
        appid: process.env.REACT_APP_WEATHER_API_KEY
    }
})

export default weatherApi