import CurrentDayCard from './components/CurrentDayCard'
import DateTime from './components/DateTime'
import api from './services/api'

const App = () => {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <DateTime />
      <CurrentDayCard />
    </div>
  );
}

export default App;
