import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import { SUN, WINDY } from './../../constants/weathers'
import './styles.css'

const location = "Buenos Aires, ar";
const api_key = "7f5525e739d5c5d34c8d0be8320af62d";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

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
    fetch(api_weather);
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