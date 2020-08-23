import React from "react";
import logo from "./logo.svg";
import "./App.css";
import cities from "./api/citiesData";
import { v4 as uuidv4 } from "uuid";

function App() {
  let list = [];
  cities.forEach((c) => {
    const city = {};
    city.name = c[0];
    city.type = c[1];
    city.county = c[2];
    city.governmentForm = c[3];
    city.id = uuidv4();

    list.push(city);
  });

  console.log({ list });

  debugger;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {list.map((l) => (
          <p key={l.id}>{l.name}</p>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
