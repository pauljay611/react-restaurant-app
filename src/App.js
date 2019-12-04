import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Admin from './components/AdminPage'
import Home from './components/HomePage'
import Restaurant from './components/RestaurantPage'

function App() {
  return (
    <div className="container">
      <Home></Home>
    </div>
  );
}

export default App;
