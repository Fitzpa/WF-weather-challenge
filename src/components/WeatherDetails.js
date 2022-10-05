import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
// ?	Build weather details component. It should show the current Date, City Name, Current time & temperature details. “Begin with Static Data and later bind with JSON dynamic data”

function WeatherDetails() {
  const { currentCityWeather, city } = useContext(WeatherContext);
  return (
    <div>
      <h2>WeatherDetails</h2>
      <div className="container">
        <h3>Current Date: {currentCityWeather[0].Date}</h3>
        <h3>City Name: {city}</h3>
        <h3>Current time: {currentCityWeather[0].Time}</h3>
        <h3>Temperature: {currentCityWeather[0].temprature}</h3>
        <h3>Feels Like: {currentCityWeather[0].feels}</h3>
      </div>
    </div>
  );
}

export default WeatherDetails;
