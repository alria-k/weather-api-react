import React from "react";
import axios from "axios";
import {
  CityInput,
  WeatherInfo,
  ErrorComponent,
  Container,
} from "./components";
import "./App.scss";
import "./helpers/cssReset.css";

function App() {
  const [city, setCity] = React.useState();
  const [weatherData, setWeatherData] = React.useState(null);
  const [hasError, setError] = React.useState(false);
  const APIKEY = "298496db46ba04293b74971a704aeb07";

  async function getCoords() {
    return axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${
          city || "Zagreb"
        }&appid=${APIKEY}`
      )
      .then(({ data }) => [data[0].lat, data[0].lon])
      .catch((err) => {
        setError(true);
      });
  }

  async function getWeather() {
    let [lat, lon] = await getCoords();
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`
      )
      .then(({ data }) => setWeatherData(data))
      .catch((err) => setError(true));
  }

  async function getObj() {
    try {
      await getWeather();
      setError(false);
    } catch {
      setError(true);
    }
  }

  React.useEffect(() => {
    getObj();
  }, [city]);

  return (
    <div className="App">
      <Container>
        <CityInput setText={setCity} />
        {hasError ? (
          <ErrorComponent />
        ) : (
          <React.Suspense
            fallback={<div className="loading">Loading data...</div>}
          >
            <WeatherInfo obj={weatherData} />
          </React.Suspense>
        )}
      </Container>
    </div>
  );
}

export default App;
