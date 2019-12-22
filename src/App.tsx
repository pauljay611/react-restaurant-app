import React, { Component } from 'react';

import Navigation from './components/Navigation'
import { ResetStyle, GlobalStyle } from './components/Style/Reset'
import { Container } from './components/Style/Container'


export interface AppProps {
}

class App extends Component<AppProps, {}> {
  render() {
    return (
      <Container>
        <ResetStyle />
        <GlobalStyle />
        <Navigation />
      </Container>
    );
  }
}

export default App;
