import React, { Component } from 'react';
//import logo from './logo.svg';
import LocationList from './components/LocationList'
import './App.css';

const cities = [
  'Lima, pe',
  'Buenos Aires, ar',
  'Bogota, col',
  'Washington, us',
  'Madrid, es',
  'Ciudad de México, mx',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} />
      </div>
    );
  }
}

export default App;
