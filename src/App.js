import React from "react";
import logo from "./logo.svg";
import "./App.css";
import cities from "./api/cities";
import { Button } from "@material-ui/core";
import Nav from "shared/components/Nav";
import Autocomplete from "shared/components/Autocomplete";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/*

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>

*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Autocomplete />
        <Button color="primary">Hello World</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {cities.map((l) => (
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
