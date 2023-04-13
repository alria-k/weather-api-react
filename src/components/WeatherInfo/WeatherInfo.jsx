import "./WeatherInfo.scss";

export function WeatherInfo({ obj }) {
  if (!obj) {
    throw Promise.reject("Loading data");
  }
  const сelsius = Math.round(obj.main.temp - 273.15);
  const fahrenheit = Math.round(obj.main.temp * 1.8 - 459.67);

  return (
    <div className="weatherinfo__box">
      <img
        className="weatherinfo-img"
        src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
      <div className="weatherinfo__text">
        <h1 className="weatherinfo__title">{obj.name}</h1>
        <div className="weatherinfo__temperature">
          <p className="weatherinfo__temperature-text">{сelsius} °C</p>
          <p className="weatherinfo__temperature-text">{fahrenheit} °F</p>
        </div>
        <div className="weatherinfo__minor">
          <p className="weatherinfo__temperature-discr">
            Wind: {obj.wind.speed} meter/sec
          </p>
          <p className="weatherinfo__temperature-discr">
            Clouds: {obj.clouds.all} %
          </p>
          <p className="weatherinfo__temperature-discr">
            Humidity: {obj.main.humidity} %
          </p>
        </div>
      </div>
    </div>
  );
}
