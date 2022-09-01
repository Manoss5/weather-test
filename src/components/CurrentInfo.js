export default function CurrentInfo({ weatherData, day }) {
  const wd = weatherData[day];
  const img_url = `http://openweathermap.org/img/wn/${wd.icon}@2x.png`;
  return (
    <div className="current-info">
      <div className="current-weather">
        <div>{wd.day_of_the_week}</div>
        <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Thessaloniki
        </div>
        <div>{wd.weatherDescription}</div>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{wd.temp}°C</div>
      </div>
      <div
        className="current-icon"
        style={{
          backgroundImage: `url(${img_url})`,
        }}
      ></div>
      <div className="current-details">
        <br></br>
        <div> Feels like: {wd.feels_like} °C</div>
        <div> Pressure: {wd.pressure} hPa</div>
        <div>Humidity: {wd.humidity} %</div>
        <div>
          Wind: {wd.wind_deg} {wd.wind_speed} km/h
        </div>
        <div>Clouds: {wd.clouds} %</div>
      </div>
    </div>
  );
}
