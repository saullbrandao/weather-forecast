import axios from "axios";

const weatherApi = axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        units: 'metric',
        exclude: 'minutely,hourly,alerts',
        appid: process.env.REACT_APP_API_KEY
    }
})

export default weatherApi