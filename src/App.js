import React, { Component } from 'react';
import FullWidthTabs from './components/Nav.js';
import Text from './components/Text';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import './App.css';

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: indigo,
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
          <Text/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
