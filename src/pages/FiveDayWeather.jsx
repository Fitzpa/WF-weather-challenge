import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

import Temperature from "../components/Temperature";

function FiveDayWeather() {
  const { currentCityWeather, city } = useContext(WeatherContext);
  return (
    <div>
      FiveDayWeather
      <h1>{city}'s Five Day Forecast</h1>
      <div>
        {currentCityWeather &&
          currentCityWeather.map((day, index) => {
            console.log("day", day);
            return (
              <div key={index}>
                <h3>Date: {day.Date}</h3>
                <h3>Time: {day.Time}</h3>
                <Temperature temp={day.temprature} />
                <h3>Temperature: {day.temprature}</h3>
                <h3>Feels Like: {day.feels}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FiveDayWeather;
