import axios from "axios";

const geocodingApi = axios.create({
    baseURL: 'api.opencagedata.com',
    params: {
        key: process.env.REACT_APP_GEOCODING_API_KEY
    }
})

export default geocodingApi