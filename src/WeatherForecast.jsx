import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';
import './WeatherForecast.css';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <WeatherData day={day} conditions={conditions} time={time} />
      <WeatherIcon img={img} imgAlt={imgAlt} />
    </div>
  );
};

export default WeatherForecast;
