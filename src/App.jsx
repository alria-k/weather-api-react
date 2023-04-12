import React from "react";
import { CityInput } from "./components";
import "./App.scss";

function App() {
  const [city, setCity] = React.useState("");

  return (
    <div className="App">
      <CityInput setText={setCity} />
    </div>
  );
}

export default App;
