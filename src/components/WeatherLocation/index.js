import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {

  constructor(props) {
    super(props);

    const { city } = props;

    this.state = {
      city,
      data: null,
    }
  }

  componentDidMount() {
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
  }
  
  handleUpdateClick = () => {
    const  api_weather = getUrlWeatherByCity(this.state.city);
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
    const { city, data } = this.state;
    const { onWeatherLocationClick } = this.props;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        { data ?
         <WeatherData data={data} /> :
         <CircularProgress /> }
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;