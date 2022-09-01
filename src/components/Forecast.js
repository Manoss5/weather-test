import NextDays from "./NextDays";
import WeatherChart from "./WeatherChart";

export default function Forecast({ weatherData, setDay }) {
  return (
    <div className="forecast-wrapper">
      <NextDays setDay={setDay} weatherData={weatherData} />
      <WeatherChart weatherData={weatherData} />
    </div>
  );
}
