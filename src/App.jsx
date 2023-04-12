import React from "react";
import axios from "axios";
import { CityInput, WeatherInfo, ErrorComponent } from "./components";
import "./App.scss";

function App() {
  const [city, setCity] = React.useState();
  const [weatherData, setWeatherData] = React.useState({});
  const [hasError, setError] = React.useState(false);

  async function getCoords() {
    return await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${
          city || "Zagreb"
        }&appid=298496db46ba04293b74971a704aeb07`
      )
      .then(({ data }) => [data[0].lat, data[0].lon])
      .catch((err) => {
        setError(true);
      });
  }

  async function getWeather() {
    let [lat, lon] = await getCoords();
    return setWeatherData(
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=298496db46ba04293b74971a704aeb07`
        )
        .then(({ data }) => data)
        .catch((err) => setError(true))
    );
  }

  async function getObj() {
    try {
      await getWeather();
    } catch {
      setError(true);
    }
  }

  React.useEffect(() => {
    getObj();
  }, [city]);

  return (
    <div className="App">
      <CityInput setText={setCity} />

      {hasError ? (
        <ErrorComponent />
      ) : (
        <React.Suspense fallback={<div>hi</div>}>
          <WeatherInfo obj={weatherData} />
        </React.Suspense>
      )}
    </div>
  );
}

export default App;
