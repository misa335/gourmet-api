import React from 'react';
// import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';
import Layout from './components/Layout';
import ListPlaces from './components/ListPlaces';
import { pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: pink
  },
  typography: {
    fontFamily: 'Ubuntu',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 500
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <ListPlaces />
    </Layout>
    </ThemeProvider>
  );
}

export default App;
