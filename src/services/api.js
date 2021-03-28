import axios from "axios";

const api = axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        units: 'metric',
        exclude: 'minutely,hourly,alerts',
        appid: process.env.REACT_APP_API_KEY
    }
})

export default api