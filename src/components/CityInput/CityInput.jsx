import React from "react";
import "./CityInput.scss";

export function CityInput({ setText }) {
  const [inputValue, setInputValue] = React.useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit() {
    if (!/(.|\s)*\S(.|\s)*/.test(inputValue)) {
      return;
    }
    setText(inputValue);
    setInputValue("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="cityinput__form"
    >
      <input
        type="text"
        value={inputValue}
        placeholder="Type city"
        className="cityinput__input"
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="cityinput__btn">
        Serach
      </button>
    </form>
  );
}
