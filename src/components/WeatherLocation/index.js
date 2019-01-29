import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import { SUN, WINDY } from './../../constants/weathers'
import './styles.css'

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
}

const dataTest = {
  temperature: 15,
  weatherState: WINDY,
  humidity: 10,
  wind: '15.2 m/s',
}

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Trujillo",
      data: data,
    }
  }
  handleUpdateClick = () => {
    this.setState({
      city: "Huanchaco",
      data: dataTest,
    });
  }
  render() {
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