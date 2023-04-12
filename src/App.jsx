import React from "react";
import axios from "axios";
import { CityInput } from "./components";
import "./App.scss";

function App() {
  const [city, setCity] = React.useState();
  const [weatherData, setWeatherData] = React.useState();

  async function getCoords() {
    return await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=298496db46ba04293b74971a704aeb07`
      )
      .then(({ data }) => [data[0].lat, data[0].lon]);
  }

  async function getWeather() {
    let [lat, lon] = await getCoords();
    return await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=298496db46ba04293b74971a704aeb07`
      )
      .then(({ data }) => data);
  }

  React.useEffect(() => {
    console.log(getWeather());
  }, [city]);

  return (
    <div className="App">
      <CityInput setText={setCity} />
    </div>
  );
}

export default App;
