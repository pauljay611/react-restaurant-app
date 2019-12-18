import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation'

export interface AppProps {
}

class App extends Component<AppProps, {}> {
  render() {
    return (
      <div className="container">
        <Navigation />
      </div>
    );
  }
}

export default App;
