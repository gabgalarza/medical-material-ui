import React, { Component } from 'react';
import Nav from './components/Nav.js';
import Hero from './components/Hero';
import Text from './components/Text';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import './css/App.css';

//TODO: import Modal and use in the Text section
class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#0F0766',
          second: '#31e0f5',
        },
        secondary: pink,
        text: 'white',
      },
      status: {
        danger: 'orange',
      },
    });

    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Nav />
          <Hero />
          <Text />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
