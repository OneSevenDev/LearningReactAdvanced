import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url'
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weathers';
import './styles.css';

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
}

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: "Trujillo",
      data: data,
    }
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  
  componentWillMount() {
    console.log("UNSAFE componentWillMount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("UNSAFE componentWillUpdate");
  }
  
  handleUpdateClick = () => {
    fetch(api_weather).then( resolve => {
      return resolve.json();
    }).then( data => {
      const newWeather = transformWeather(data);
      this.setState({
        city: newWeather.city,
        data: newWeather
      });
    });
  }

  render() {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Update</button>
      </div>
    );
  }
}
export default WeatherLocation;