import React, { Component } from 'react';
//import logo from './logo.svg';
import LocationList from './components/LocationList'
import './App.css';

const cities = [
  { cityId: '1', cityName: 'Lima, pe' },
  { cityId: '2', cityName: 'Buenos Aires, ar' },
  { cityId: '3', cityName: 'Bogota, col' },
  { cityId: '4', cityName: 'Washington, us' },
  { cityId: '5', cityName: 'Madrid, es' },
  { cityId: '5', cityName: 'Ciudad de México, mx' },
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
