import React, { Component } from 'react';

import Navigation from './components/Navigation'
import { ResetStyle, GlobalStyle } from './components/Style/Reset'

export interface AppProps {
}

class App extends Component<AppProps, {}> {
  render() {
    return (
      <div className="container">
        <ResetStyle />
        <GlobalStyle />
        <Navigation />
      </div>
    );
  }
}

export default App;
