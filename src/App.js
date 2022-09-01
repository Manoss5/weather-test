import { useState, useEffect } from "react";
import CurrentInfo from "./components/CurrentInfo";
import Forecast from "./components/Forecast";
import { getWeatherData } from "./WeatherServices";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [day, setDay] = useState(0);
  useEffect(() => {
    const getWeather = async () => {
      const wd = await getWeatherData();
      setWeatherData(wd);
    };
    getWeather();
  }, []);
  return (
    weatherData && (
      <div className="app">
        <button className="home" onClick={() => setDay(0)}></button>
        <CurrentInfo weatherData={weatherData} day={day} />
        <Forecast weatherData={weatherData} setDay={setDay} />
      </div>
    )
  );
}

export default App;
