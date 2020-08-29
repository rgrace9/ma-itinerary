import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Autocomplete.scss";

const options = [
  "Papaya",
  "Persimmon",
  "Paw Paw",
  "Prickly Pear",
  "Peach",
  "Pomegranate",
  "Pineapple",
];
const Autocomplete = (props) => {
  const [userInput, setUserInput] = useState("");
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;

    const filtered = options.filter((opt) => {
      return opt.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
    });

    setUserInput(value);
    setFilteredOptions(filtered);
    setActiveOption(0);
    setShowOptions(true);
  };

  console.log({ userInput });

  const handleClick = (e) => {
    console.log("click", e.currentTarget.innerText);
    setUserInput(e.currentTarget.innerText);
    setFilteredOptions([]);
    setActiveOption(0);
    setShowOptions(true);
  };

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    console.log({ keyCode, e });
    if (keyCode === 13) {
      setActiveOption(0);
      setShowOptions(false);
      setUserInput(filteredOptions[activeOption]);
    } else if (keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);
    } else if (keyCode === 40) {
      if (activeOption + 1 === filteredOptions.length) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  };

  console.log({ filteredOptions });

  return (
    <input
      className="autocomplete"
      type="text"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      value={userInput}
    />
  );
};

Autocomplete.propTypes = {};

export default Autocomplete;
