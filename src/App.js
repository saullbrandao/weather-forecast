import CurrentDayCard from './components/CurrentDayCard'
import api from './services/api'

const App = () => {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <CurrentDayCard />
    </div>
  );
}

export default App;
