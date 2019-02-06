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
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  };
  render() {
    return (

      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectionLocation} />
      </div>
    );
  }
}

export default App;
