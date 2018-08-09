import React, { Component } from 'react';
import FullWidthTabs from './components/Nav.js';
import Text from './components/Text';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import './App.css';

//TODO: import Modal and use in the Text section

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#2c387e',
          second: '#3f51b5',
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
          <FullWidthTabs />
          <Text />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
