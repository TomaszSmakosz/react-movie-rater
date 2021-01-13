import logo from './logo.svg';
import classes from './App.css';
import React, { Component } from "react";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <div className={classes.App}>
        <Layout>
            <Home/>
        </Layout>
    </div>
  );
}

export default App;
