import logo from './logo.svg';
import classes from './App.css';
import React, { Component } from "react";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className={classes.App}>
      <Home/>
    </div>
  );
}

export default App;
