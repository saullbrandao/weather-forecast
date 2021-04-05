# Weather Forecast App


## Technologies
- [React](https://github.com/facebook/react)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Axios](https://github.com/axios/axios)
- [usePosition](https://github.com/trekhleb/use-position) 

## How to run
- You will need [Node.js](https://nodejs.org/) instaled
- I used [yarn](https://yarnpkg.com/getting-started/install) but you can use npm instead if you prefer

1. Clone the repository and run `yarn` or `npm istall`
2. Sign up at [OpenWeather](https://openweathermap.org/) and create your api key
3. Do the same with [OpenCage Geocodind API](https://opencagedata.com/)
4. Create a .env file in the root directory of the project and add the code below: 
    
    ```
    REACT_APP_WEATHER_API_KEY={YOUR_API_KEY}

    REACT_APP_GEOCODING_API_KEY={YOUR_API_KEY}

    ```
    Substitute the `{YOUR_API_KEY}` with the keys you created before
5. Run `yarn start` or `npm start`