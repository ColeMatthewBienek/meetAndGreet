import React from 'react';
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Nav from './nav.js'
import RouterURL from './routerURL'
import "./app.css"

const App = () => (
  <div className="wrapper">
    <h1>Meet and Greet</h1>
    <Router>
      <div>
        <RouterURL />
        <Nav />
      </div>
    </Router>
  </div>

);

export default App;

