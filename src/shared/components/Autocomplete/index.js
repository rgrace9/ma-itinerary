import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { debounce, throttle } from "lodash";
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

  const debounceHandler = useMemo(
    () =>
      debounce((value) => {
        console.log("debounce", value);
      }, 1000),
    []
  );
  // const debounceHandler = useMemo(
  //   () =>
  //     debounce((value) => {
  //       console.log(`Debounced Value = ${value}`);
  //     }, 1000),
  //   []
  // );

  const throttleHandler = useMemo(
    () =>
      throttle((value) => {
        console.log("throttle", value);
        const filtered = options.filter((opt) => {
          return opt.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });
        console.log("filtered", filtered);

        setUserInput(value);
        setFilteredOptions(filtered);
        setActiveOption(0);
        setShowOptions(true);
      }),
    []
  );

  // const handleChange = throttle(
  //   500,
  //   (e) => {
  //     const { value } = e.target;

  //     const filtered = options.filter((opt) => {
  //       return opt.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
  //     });

  //     setUserInput(value);
  //     setFilteredOptions(filtered);
  //     setActiveOption(0);
  //     setShowOptions(true);
  //   },
  //   1000
  // );

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      debounceHandler(value);
      throttleHandler(value);
      setUserInput(value);
      // setFilteredOptions(filtered);
      setActiveOption(0);
      setShowOptions(true);
    },
    [debounceHandler, throttleHandler]
  );
  console.log({ userInput });

  const handleClick = (e) => {
    // console.log("click", e.currentTarget.innerText);
    setUserInput(e.currentTarget.innerText);
    setFilteredOptions([]);
    setActiveOption(0);
    setShowOptions(true);
  };

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    // console.log({ keyCode, e });
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

  // console.log({ filteredOptions });
  let optionList;
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="autocomplete__options">
          {filteredOptions.map((optionName, index) => {
            let className;
            if (index === activeOption) {
              className = "autocomplete__option--active";
            }
            return (
              <li className={className} key={optionName} onClick={handleClick}>
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="autocomplete__no-options">
          <em>No Option!</em>
        </div>
      );
    }
  }

  return (
    <div className="autocomplete-container">
      <input
        className="autocomplete"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        value={userInput}
      />
      {optionList}
    </div>
  );
};

Autocomplete.propTypes = {};

export default Autocomplete;
