const API_KEY = "";
const URL1 = `https://api.openweathermap.org/data/2.5/onecall?
lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutel
y&appid=${API_KEY}&units=metric `;

export const getWeatherData = async () => {
  const wind_direction = (d) => {
    return d > 348.75 || d < 11.25
      ? "N"
      : d < 33.75
      ? "N/NE"
      : d < 56.25
      ? "NE"
      : d < 78.75
      ? "E/NE"
      : d < 101.25
      ? "E"
      : d < 123.75
      ? "E/SE"
      : d < 146.25
      ? "SE"
      : d < 168.75
      ? "S/SE"
      : d < 191.25
      ? "S"
      : d < 213.75
      ? "S/SW"
      : d < 236.25
      ? "SW"
      : d < 258.75
      ? "W/SW"
      : d < 281.25
      ? "W"
      : d < 303.75
      ? "W/NW"
      : d < 326.25
      ? "NW"
      : "N/NW";
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dt = new Date();
  let d = dt.getDay();
  let day_of_the_week = "Today";

  const BASE_URL = new URL(URL1);
  const data = await fetch(BASE_URL)
    .then((data) => data.json())
    .then((data) => data);
  let {
    current: {
      temp,
      feels_like,
      pressure,
      humidity,
      clouds,
      wind_speed,
      wind_deg,
      weather,
    },
    daily,
  } = data;

  temp = Math.round(temp);
  feels_like = Math.round(feels_like);
  wind_speed = Math.round(wind_speed);

  wind_deg = wind_direction(wind_deg);

  const weatherDescription = weather[0].description;
  const icon = weather[0].icon;

  daily.shift();
  const dailyFormatted = daily.map((day) => {
    return {
      temp: Math.round((day.temp.day + day.temp.night) / 2),
      feels_like: Math.round((day.feels_like.day + day.feels_like.night) / 2),
      pressure: day.pressure,
      humidity: day.humidity,
      clouds: day.clouds,
      wind_speed: Math.round(day.wind_speed),
      wind_deg: wind_direction(day.wind_deg),
      weatherDescription: day.weather[0].description,
      icon: day.weather[0].icon,
      day_of_the_week: days[++d % 7],
      max_temp: Math.round(day.temp.max),
    };
  });

  return [
    {
      temp,
      feels_like,
      pressure,
      humidity,
      clouds,
      wind_speed,
      wind_deg,
      weatherDescription,
      icon,
      day_of_the_week,
    },
    ...dailyFormatted,
  ];
};
