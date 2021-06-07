import React from 'react';
import './App.css';
// import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import ListPlaces from './components/ListPlaces';


function App() {
  return (
    <div className="Appbar">
      <Button color="primary">Test</Button>
      <ListPlaces />
    </div>
  );
}

export default App;
