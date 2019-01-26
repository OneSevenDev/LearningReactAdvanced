import React from 'react'
import WeatherIcon from 'react-weathericons'

const icons = {
  sunny: "day-sunny",
  fog: "day-fog",
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState]
  if (icon)
    return <WeatherIcon name={icon} size="2x" />;
  else
    return <WeatherIcon name={"day-sunny"} size="2x" />;
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div>
    {
      getWeatherIcon(weatherState)
    }
    <span>{`${temperature} C°`}</span>
  </div>
);

export default WeatherTemperature; 