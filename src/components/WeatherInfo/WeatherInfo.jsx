export function WeatherInfo({ obj }) {
  if (Object.keys(obj).length === 0) {
    throw Promise.reject("Loading data");
  }
  const сelsius = obj.main.temp - 273.15;
  const fahrenheit = obj.main.temp * 1.8 - 459.67;

  return (
    <div className="weatherinfo__box">
      <img
        className="weatherinfo-img"
        src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
        alt="wheather-icon"
      />
      pooop
    </div>
  );
}
