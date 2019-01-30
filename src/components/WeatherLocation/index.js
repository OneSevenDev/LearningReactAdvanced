import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import { SUN } from './../../constants/weathers'
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

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Trujillo",
      data: data,
    }
  }
  getWeahterState = weather_data => {
    return SUN;
  }
  getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const { name } = weather_data;
    const weatherState = this.getWeahterState(weather_data);
    const data = {
      city: name,
      humidity,
      temperature: temp/32,
      weatherState,
      wind: `${speed} m/s`
    };
    return data;
  };
  handleUpdateClick = () => {
    fetch(api_weather).then( resolve => {
      return resolve.json();
    }).then( data => {
      const newWeather = this.getData(data);
      this.setState({
        city: newWeather.city,
        data: newWeather
      });
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