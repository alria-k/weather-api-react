import React from "react";

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
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
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
