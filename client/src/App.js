import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import Nav from "shared/components/Nav";
import Home from "screens/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
