import React from "react";

export function CityInput({ setText }) {
  const [inputValue, setInputValue] = React.useState("");

  function handleInput(e) {
    if (e.target.value == "") {
      return;
    }
    setInputValue(e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setText(inputValue);
      }}
    >
      <input
        type="text"
        value={inputValue}
        placeholder="Type city"
        onChange={(e) => handleInput(e)}
      />
      <button type="submit">Serach</button>
    </form>
  );
}
