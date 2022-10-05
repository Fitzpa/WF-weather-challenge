import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
// ?	Build weather details component. It should show the current Date, City Name, Current time & temperature details. “Begin with Static Data and later bind with JSON dynamic data”

function WeatherDetails() {
  const { currentCityWeather, city } = useContext(WeatherContext);
  return (
    <div className="weather-details">
      <h2>WeatherDetails</h2>
      <div>
        <h3>
          Current Date: <span>{currentCityWeather[0]?.Date}</span>
        </h3>
        <h3>
          City Name: <span>{city}</span>
        </h3>
        <h3>
          Current time: <span>{currentCityWeather[0]?.Time}</span>
        </h3>
        <h3>
          Temperature: <span>{currentCityWeather[0]?.temprature}</span>
        </h3>
        <h3>
          Feels Like: <span>{currentCityWeather[0]?.feels}</span>
        </h3>
      </div>
    </div>
  );
}

export default WeatherDetails;
